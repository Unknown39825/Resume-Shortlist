import json
# open colleges.json
with open('colleges.json') as f:
    data = json.load(f)
# print(data)
cllg = data.get('colleges')
print (cllg)
