'''
a = 3
print(a)
print(id(a))  # a의 값이 저장되어 있는 주소값 출력

b = a 
print(id(b))  # a의 주소와 같은 주소

# 변수
a = 3
b = 5
print(a,'+',b,'=',a+b,'입니다')
print(f'{a} + {b} = {a+b} 입니다')

# swap
a = 3
b = 5
temp = a 
a = b
b = temp
print(a,b)
# 파이썬에서는 a,b = b,a 가능

# 자료형
a = 3
print(type(a))  # int
a = 3.14
print(type(a))  # float
print(round(a,1))  # 소수점 첫째자리까지만 출력
print(f'{a:.1f}')  # 소수점 첫째자리까지만 출력

a = 5
a = str(a)  #'5'
print(a)
print(type(a))

print(f'오늘은 \"100%\" 입니다')

# slicing
s = 'abcdefg'
print(s[:3])  # abc
print(s[3:])  # defg
print(s[2:5])  # cde
print(s[5:2:-1]) # 5번부터 -1씩 감소  # fed
print(s[1:5:2])  # 1번부터 2씩 증가  # bd

# boolean
a, b = 0, -1
a, b = bool(a), bool(b)
print(a,b)

# 리스트
lst = [1, 2, 3, 4, 5]
print(lst)
print(type(lst))
print(lst[1])  # 2
print(len(lst))  # 리스트 길이 5
print(lst[-1])  # 뒤에서부터 5

# 튜플
tp = (1, 2, 3, 4, 5)
print(tp)
print(type(tp))
print(len(tp))
print(tp[-1])

# range
print(list(range(3)))
print(list(range(1,5)))

# set - 중복된 것 제거
lst = [2,2,6,3,6,2,4,1,2]
lst = list(set(lst))
print(lst)

# 리스트의 생성과 접근
boxes = ['A', 'B', ['apple', 'banana', 'cherry']]
print(len(boxes))  # 3
print(boxes[2])  # ['apple', 'banana', 'cherry']
print(boxes[2][-1])  # cherry
print(boxes[-1][1][0])  # b

my_list = []
another_list = list()
print(type(my_list))  # <class 'list'>
print(type(another_list))  # <class 'list'>


# 튜플의 생성과 접근
a = (1,2,3,1)
print(a[1])  # 2
a[1] = '3'  # 값 변경 불가능 
# TypeError: 'tuple' object does not support item assignment


# 튜플 생성 주의사항
tuple_a = (1,)
print(tuple_a)  # (1,)
print(type(tuple_a))  # <class 'tuple'>
tuple_b = (1,2,3,)
print(tuple_b)  # (1, 2, 3)
print(type(tuple_b))  # <class 'tuple'>

a = 1,
print(a)  # (1,)
print(type(a))  # <class 'tuple'>
b= 1, 2, 3
print(b)  # (1, 2, 3)
print(type(b))  # <class 'tuple'>


# 데일리 실습 1-2
a = int(input('게시글의 총 갯수를 입력하세요 : '))
b = int(input('한 페이지에 필요한 게시글 수를 입력하세요 : '))
result = (a//b + bool(a%b))
print(result)
# a//b : 32 나누기 5를 한 후 몫
# a%b : 나머지
# 나누고 난 후의 나머지가 0일 경우 bool은 false(0)
# 나누고 난 후의 나머지가 0이 아닐 경우 bool은 Trud(1)

# 데일리 실습 1-3
person1 = input("첫 번째 사람의 이름을 입력하시오: ")
person2 = input("두 번째 사람의 이름을 입력하시오: ")
print(f'{person1}\n\n\n{person2}')
# 교수님 코드
# result = person1 + "\n\n\n" + person2
# print(result)

# 데일리 실습 1-4
sum = 0
for i in range(1000):
    if i % 2 == 0 or i % 7 == 0:
        sum = sum + i
print(sum)
# 교수님 코드
set2 = set(range(2, 1000, 2))
set7 = set(range(7, 1000, 7))
lst=(set2|set7
print(sum(lst)))

# set(중복을 혀용하지 않는 데이터들의 묶음)
# 값 추가
s = {1,2,3,4,5}
s.add(6)  # 1개 추가
s.update([11,12,8,7,6])  # 여러개 추가

# 값 삭제
s.remove(6)  # 삭제하는 값이 없으면 에러
print(s)
s.discard(12)  # 삭제할 값 없어도 에러 x
print(s)
s.clear()  # 전부 삭제
print(s)

# 집합
s1 = [1,2,3,4,5]
s2 = [2,4,6,8]

# 교집합
s1, s2 = set(s1), set(s2)
print(s1&s2)

# 합집합
print(s1|s2)
print(s1.union(s2))  # union 함수 이용하는 법도 있음

# 차집합
print(s1-s2)
'''
# 데일리 실습 1-5
m = 5  # 세로
n = 4  # 가로
for i in range(m):
    for j in range(n):
        print('*', end='')
    print()
# 교수님 코드
print((('*'*n)+'\n')*m)

# 데일리 과제 1-2
score = {
    'python': 80,
    'django': 89,
    'web': 83
}
score['algorithm'] = 90
score['python'] = 85
sum = 0
for key, value in score.items():
    sum = sum + value

result = sum / len(score)
print(result)

# 데일리 과제 1-4
s = input('숫자를 입력해주세요 : ')
sum = 0
for i in range(len(s)):
    sum = sum + int(s[i])
print(sum)
