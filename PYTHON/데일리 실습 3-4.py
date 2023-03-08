blood_types = [ 'A','A','O', 'B', 'A', 'O', 'AB','O', 'A', 'B', 'O', 'B', 'AB']

blood_dict = {}

for blood in blood_types:
    blood_dict.setdefault(blood, 0)
    blood_dict[blood] += 1
print(blood_dict)

# 교수님 코드
dic ={}
for i in blood_types:
    if dic.get(i,0):
        dic[i]+=1
    else:
        dic[i]=1

print(dic)