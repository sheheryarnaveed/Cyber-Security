import base64
import imghdr
import os


ifile = open("evidence.txt", "r") 
abc = ""
for e in ifile:
  abc = e
abc = abc[::-1]

def ROT13_decode(character):
  c = ord(character)
  if(c>96 and c<=122):
    if((c+13)>122):
      b = chr(((c+13)%122)+96)
    else:
      b = chr((c+13)%122)
      if(c==109):
        b = chr(122)
    return (b)
  elif(c>64 and c<=90):
    if((c+13)>90):
      b = chr(((c+13)%90)+64)
    else:
      b = chr((c+13)%90)
      if(c==77):
        b=chr(90)
    return (b)
  else:
    return (chr(c))

bda = ""

for character in abc:
  bda += ROT13_decode(character)
  

#print(bda)  
dee= bytes(bda, 'utf-8')

with open("output", "wb") as newfile:
    newfile.write(base64.decodebytes(dee))


thisFile = "output"
base = os.path.splitext(thisFile)[0]
os.rename(thisFile, base + "." + imghdr.what("output"))

