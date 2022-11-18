# I used `sed -i '/^$/d' file.txt` to remove empty lines prior to running script
from re import sub
f = open("questions.txt", "r")
w = open("questions.json", "a")

with open("questions.txt",'r+') as file:
  for line in file:
    if not line.isspace():
      file.write(line)

w = open("questions.json", "a")

for line in f:
  s = sub(r"(_|-)+", " ", line).title().replace(" ", "")
  key = ''.join([s[0].lower(), s[1:]])
  key = key.strip()
  line=line.strip()
  data = '"' + key + '"' +":" + '"' + line + '"' + "," + '\n'
  w.write(data)

w.close()
