# 'age' key의 value 합 구하기

infos = [{'name': 'kim', 'age': 12}, {'name': 'lee', 'age': 4}]

sum = 0
for i in infos:
    sum += i['age']

print(sum)