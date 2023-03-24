
from __future__ import division
from ctypes import util
from datetime import datetime
import os
# aspose used for converting docx to txt
import aspose.words as aw
# nltk used for preprocessing
import nltk
import pandas as pd
import matplotlib.pyplot as plt
import os,math,re
import json
# stopwords used for removing stopwords
nltk.download('stopwords')
# punkt used for tokenizing
nltk.download('punkt')
import utils


# to txt function to convert docx to txt used for converting the doc resume to the txt resume
#----------------------------------------------------------------------------------------------
def toTxt(query,uuid):
    for filename in os.listdir('uploads/'+ uuid +'/raw_resume'):
        if filename.endswith('.pdf') or filename.endswith('.doc')  or filename.endswith('.docx'):
            filename_split=filename.split('.')
            just_filename= filename_split[0]+'-'+filename_split[1]
            doc = aw.Document('uploads/'+ uuid +'/raw_resume/'+filename)
            # print(doc)
            doc.save('uploads/'+ uuid +'/txt_resume/'+just_filename+'.txt')
        else:
            continue
    return readFiles(query,uuid)

#-----------------------------------------------------------------------------------------------



# read the files processed and return the inverted index  
def readFiles(query,uuid):
    files = []
    xfiles = []
    path = "uploads/"+ uuid +"/txt_resume"
    dir_list = os.listdir(path)
    print("Files and directories in '", path, "' :")
    # prints all files

    for i in dir_list:
        files.append(path + '/' + i)
    # for i in files:
        # print(i)
    xfiles = [(i[len(i) - i[::-1].index('/'):]) for i in files]
    # print(xfiles)
    print("files & xfiles")
    # print(files)
    # print(xfiles)
    return process(files,xfiles,query,uuid)
    
    




def process(files,xfiles,query,uuid):
    doc_sizes = []
    stemmed = []
    n = len(files)
    for i in files:
        text = utils.extract_text(i)
        tokens = utils.preprocess(text)
        tokens = utils.sw_remove(tokens)
        tokens = utils.stem_tokens(tokens)
        doc_sizes.append(len(tokens))
        stemmed.extend(tokens)

    table = utils.inv_ind(stemmed,doc_sizes,n,xfiles)
    # print(table['uranium'])
    df = pd.DataFrame(table.items(), columns=['Tokens','Occurences'])
    
    try:

        os.remove(r'uploads/'+uuid +'/Inverted.csv')
    except:
        pass
    df.to_csv(r'uploads/'+uuid +'/Inverted.csv')
    # print(df)
    return calculateidf(xfiles,query,uuid,files)

# Retrieval using query
def get_data(query,uuid):
    df = pd.read_csv(r'uploads/'+uuid +'/Inverted.csv')
    df.set_index('Tokens',inplace=True)
    try:
        x = df.loc[query,'Occurences']
        return x
    except:
        return -1

# get idf values
def get_idf(n,uuid,inv_file=None):
  df = pd.read_csv(r'uploads/'+uuid +'/Inverted.csv')
  # print(df)
  idf = dict()
  for i in range(0, len(df)):
      test = list(df['Occurences'][i])
      print("CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCc")
    #   print(test)
      idf[df['Tokens'][i]] = math.log(n/test.count('('),2)
    #   idf[]
      print(idf[df['Tokens'][i]])
  print(idf)
  return idf


# get tf*idf matrix
def get_tf_idf_matrix(idf,xfiles,uuid):
    matrix = dict()
    words = list(idf.keys())

    df = pd.read_csv(r'uploads/'+uuid +'/Inverted.csv')
    df.set_index('Tokens', inplace=True)

    for i in range(len(xfiles)):
        for j in words:
            try:
                result = df.loc[j, 'Occurences']

                start = result.index(xfiles[i])
                end = start + result[start:].index(')')

                xtemp = result[start:end]
                start = len(xtemp) - xtemp[::-1].index('txt')

                val = re.findall('\d+', xtemp[start:])

            except Exception as e:
                val = [0]

            try:
                matrix[xfiles[i]][j] = int(val[0]) * idf[j]
            except:
                matrix[xfiles[i]] = {j: int(val[0]) * idf[j]}

    # print(matrix)

    return matrix


# obtain query vector
def get_query_vector(query, idf):
    tokens = utils.preprocess(query.lower())
    tokens = utils.sw_remove(tokens)
    tokens = utils.stem_tokens(tokens)

    q = {}
    for i in idf.keys():
        if i in tokens:
            q[i] = (tokens.count(i) / len(set(tokens))) * idf[i]
        else:
            q[i] = 0

    return q

# Given 2 vectors (a,b) compute similarity
def compute_sim(a,b):
  print("Testing compute_sim")
  print(a,b)
  a = list(a.values())
  b = list(b.values())
  dot_prod = sum([a[i]*b[i] for i in range(len(a))])
  mag_a = (sum([a[i]**2 for i in range(len(a))])**0.5)
  mag_b = (sum([b[i]**2 for i in range(len(b))])**0.5)
  try:
    return dot_prod/(mag_a*mag_b)
  except:
    return 0


# Similarity between the documents
def get_similarity_matrix(xfiles,doc_matrix):
  n = len(xfiles)

  sim_mat = []
  for i in range(n):
    sim_mat.append([1]*n)

  for i in range(n):
    for j in range(i):
      a = doc_matrix[xfiles[i]]
      b = doc_matrix[xfiles[j]]
      sim_mat[i][j] = sim_mat[j][i] = compute_sim(a,b)
  return pd.DataFrame(sim_mat,index=xfiles,columns=xfiles)

def calculateidf(xfiles,text,uuid,files):
    #-----------------------------------------------------------------------------------------------
    df = pd.read_excel(r'skillsList.xlsx')
    querry_skills = []

    for skill in df.SKILLS:
        if skill in text:
            querry_skills.append(skill)
    print("querry skills:" + str(querry_skills))

    with open('colleges.json') as f:
            data = json.load(f)
    clg = data.get('colleges')
    # print (clg)

    nc = len(clg)
    rank = list(range(1, nc + 1))
    rank.reverse()

    idf = get_idf(len(xfiles),uuid)
    matrix = get_tf_idf_matrix(idf,xfiles,uuid)
    # print(idf)
    # print(matrix)
    print("-:"+"Compute Similarity"+":-")

    print("Query : ")
    query = get_query_vector(text,idf)

    vect = []
    for i,j in zip(files,xfiles):
        xyz=0
        file1 = open(i, "r")
        # print('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'+i)
        readfile = file1.read()
        for (c, r) in zip(clg, rank):
            # print("............................"+c)
            # print(r)
            if c in readfile:
                # vect[j] = {compute_sim(matrix[j],query),r/nc,c}
                xyz= (r / nc)
        skill_name=[]
        tokens = nltk.word_tokenize(readfile)
        print(j + " 's resume tockeinsed: ------------" + str(tokens))
        print()
        print(j + " 's skills:")
        print()
        count = 0
        for skill in querry_skills:
            if skill in readfile:
                count = count + 1
                print(str(count) + ' .' + skill)
                skill_name.append({'skillName':skill})



        print('xxxxxxxxxxxxxxxxxxxxxxxxxx')

        sim=compute_sim(matrix[j],query)
        slent = len(querry_skills)
        if slent!=0:
            ss=count
        else:
            ss=0
        vect.append({'filename':j ,'similarity': sim,'finalscore':sim+xyz+ss,'cllg':xyz,'skillScore':ss,'skills':skill_name})
        

    return vect,querry_skills