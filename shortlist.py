
from __future__ import division
from ctypes import util
from datetime import datetime
# aspose used for converting docx to txt
import aspose.words as aw
# nltk used for preprocessing
import nltk
import pandas as pd
import os,math,re
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
    for i in files:
        print(i)
    xfiles = [(i[len(i) - i[::-1].index('/'):]) for i in files]
    print(xfiles)
    return process(files,xfiles,query,uuid)


# pre process the file 
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
    print(df)
    return xfiles,files
    
    
    
