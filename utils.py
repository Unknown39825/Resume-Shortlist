# import require packages 

import nltk # natural language toolkit  
from nltk.tokenize import RegexpTokenizer #tokenize the regex expression
from nltk.corpus import stopwords # remove the stopwords
from nltk import FreqDist # frequency distribution 
from nltk.stem import PorterStemmer # Porter Stemmer used for removing the suffixes
from nltk.tokenize import word_tokenize # tokenize the words 



# Extract text from file, return text
def extract_text(fname):
    myf = open(fname,"rb")
    text = myf.read().decode(errors='replace')
    return text


#doing analysis on the text
def uniqratio(token):
  return str(len(set(token))/len(token))


#Checking distribution of words
def freqDist(tokens,title):
  fdist1 = FreqDist(tokens)
  fdist1.plot(50, cumulative=True, title=title)


#Tokenizing the text, return token list
def preprocess(sentence):
 sentence = sentence.lower()
 tokenizer = RegexpTokenizer(r'\w+')
 tokens = tokenizer.tokenize(sentence)
 return nltk.word_tokenize(" ".join(tokens))


# Stopwords removal, return list
def sw_remove(tokens):
  stop = stopwords.words('english')
  new_tokens = [i for i in tokens if i not in stop]
  return new_tokens


#Stemming of tokens, return list
def stem_tokens(new_tokens):
    ps = PorterStemmer()
    stemmed = []
    for i in new_tokens:
        stemmed.append(ps.stem(i))
    return stemmed

# Helper functions for inv_ind()
class CreateInvDict:
    def __init__(self):
        self.myd = {}

    def checkf(self, x, i):
        if i not in self.myd.keys():
            self.myd[i] = [x]
        else:
            self.myd[i].append(x)



# freq list of word in doc, return list
def freq_list(str, word):
    count = str.count(word)
    mid = -1
    freq = []
    for i in range(count):
        prev = str[mid + 1:].index(word)
        mid += (prev + 1)
        freq.append(mid)
    return freq


def freq_count(text, word):
    return text.count(word)


# Inverted index, return dictionary
def inv_ind(stemmed_docs, doc_sizes, n,xfiles):
    unq_tok = set(stemmed_docs)
    inv_table = CreateInvDict()
    for i in unq_tok:
        start = 0
        for j in range(n):
            end = doc_sizes[j]
            temp = stemmed_docs[start:(start + end)]
            if i in temp:
                x = (xfiles[j], freq_count(temp, i))
                inv_table.checkf(x, i)
            start += end
    return inv_table.myd


