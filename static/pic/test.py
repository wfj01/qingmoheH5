# -*- coding: utf-8 -*-
f=open(u"D:/找图片/static/pic/list.txt",'r+')
li = f.readlines()
f.close()
index = 0
for i in li:
    picName = u"D:/找图片/static/pic/bak/"+str(index)+".jpg"
    pic = open(picName,'wb')
    text = open(str(i).strip(),'rb').read()
    pic.write(text)
    pic.close()
    index = index +1
    
