
# 조건문 예시
a = 5
if a > 5:
    print('5 초과')
else:
    print('5 이하')
print(a)

# 조건문 실습
# 조건문을 통해 변수 num의 값이 홀수/짝수 여부를 출력하시오.
# 이때 num은 input을 통해 사용자로부터 입력 받으시오.
num = int(input())
if num % 2 == 0:
    print('짝수')
else:
    print('홀수')
# 교수님 코드
if num % 2:  # if num % 2 == 1
    print('홀수입니다.')
else:
    print('짝수입니다.')

# 복수 조건문 실습 문제
# 미세먼지 농도에 따른 위험 등급 출력
dust = 80
if dust > 150:
    print('매우 나쁨')
elif dust > 80:
    print('나쁨')
elif dust > 30:
    print('좋음')
else:
    print('좋음')
print('미세먼지 확인 완료!')

# 중첩 조건문
# 미세먼지 농도에 따른 위험 등급 출력
dust = 500
if dust > 150:
    print('매우 나쁨')
    if dust > 300:
        print('실외 활동을 자제하세요.')
elif dust > 80:
    print('나쁨')
elif dust > 30:
    print('좋음')
elif dust >= 0:
    print('좋음')
else:
    print('값이 잘못되었습니다.')

# for 문을 이용한 문자열 순회
chars = input()
for char in chars:
    print(char)
# range 활용
for idx in range(len(chars)):
    print(chars[idx])

# 딕셔너리 순회
grades = {'john' : 80, 'eric' : 90}
for student in grades:
    print(student)
'''
john
eric 
'''
for student in grades:
    print(student, grades[student])
'''
john 80
eric 90
'''
# enumerate 순회
members = ['민수', '영희', '철수']

for idx, number in enumerate(members):
    print(idx, number)
'''
0 민수
1 영희
2 철수
'''

enumerate(members)
print(list(enumerate(members))) # [(0, '민수'), (1, '영희'), (2, '철수')]
print(list(enumerate(members, start=1)))  # 인덱스 1부터 시작 [(1, '민수'), (2, '영희'), (3, '철수')]

# 1~3의 세제곱 리스트 만들기
cubic_list = []
for number in range(1,4):
    cubic_list.append(number ** 3)
print(cubic_list)
# [1, 8, 27]
cubic_list = [number ** 3 for number in range(1,4)]
print(cubic_list)
# [1, 8, 27]

# break
n = 0
while True:
    if n == 3:
        break
    print(n)
    n += 1
'''
0
1
2
'''
# 실습
# 숫자 2개 입력 받은 후 둘 중 큰 수를 출력해 주세요

a = int(input())
b = int(input())

if a > b:
    print(a)
elif a < b:
    print(b)
    
# 조건 표현식
result = a if a > b else b
print(result)

# 1 ~ 100 까지 for문으로 출력
for i in range(1,101):
    print(i, end=' ')

i = 1
while i <= 100:
    print(i, end=' ')
    i += 1

# # 100번 출력
for i in range(100):
    print('#', end=' ')

i = 0
while i < 100:
    print('#', end=' ')
    i += 1

# for문 이용하여 리스트 출력

lst = [[1,2,3],[4,5,6]]

for i in lst:
    for j in i:
        print(j, end=' ')
    print()

for i in range(2):
    for j in range(3):
        print(lst[i][j], end = ' ')
    print()

# 빈 리스트를 만든 후 lst의 값을 제곱 값으로 채우기
# 새로 만들어진 리스트 출력

lst = [[1,2,3],[4,5,6]]
multi = []
# multi = 1차원 리스트
for i in range(2):
    for j in range(3):
        multi.append((lst[i][j])**2)
        
print(multi)

for i in multi:
    print(i, end=' ')
print()
print(*multi)
# multi = 2차원 리스트
for i in range(2):
    temp = []
    for j in range(3):
        temp.append(lst[i][j]**2)
    multi.append(temp)
print(multi)

# 딕셔너리

di = {'kevin':1, 'john':2, 'bob':3}

print(di)

for i in di:
    print(i, di[i])

for i,j in di.items():
    print(i, j)

for i in di.keys():
    print(i)

for j in di.values():
    print(j)

print(di.items())
print(di.keys())
print(di.values())

# break : 반복문을 중간에 멈추고 싶을 때
lst = [10, 20, 30, 40, 50, 60, 70]
for i in lst:
    if i == 50:
        break
    print(i, end=' ')

lst = [[1,2,3], [1,2,3], [1,2,3]]

for i in range(3):
    for j in range(3):
        if lst[i][j]==3:
            break   # 가장 가까운 반복문 하나만 종료
        print(lst[i][j], end=' ')

flag = 0
for i in range(3):
    for j in range(4):
        if lst[i][j]==3:
            flag = 1  # 모든 반복문 종료
            break   
        print(lst[i][j], end=' ')
    if flag:
        break

# continue
lst = [1,2,3,4,5,6,7]
for i in lst:
    if i == 5:
        continue  # 아래 코드 실행하지 않고 반복문의 맨 위로 다시 올라감
    print(i, end=' ')
# 1 2 3 4 6 7

lst = [[1,2,3], [1,2,3], [1,2,3]]
for i in range(3):
    for j in range(3):
        if lst[i][j]==2:
            continue  # 가장 가까운 반복문으로 올라감 
        print(lst[i][j], end=' ')
# 1 3 1 3 1 3

# 아스키 코드
a = '2'
print(ord(a)-ord('0')+10)

# 내장함수
a = -3
print(abs(a))  # 절대값
print(id(a))  # 주소값
print(pow(3,2))  # 3의 2제곱

# 외장함수
import random
a = [1,2,3,4,5,6]
print(random.sample(a,2))

# 두 숫자를 전달받고 합을 돌려주는 (반환하는) 함수를 만들도록

# 튜플을 이용하여 값 2개를 반환받은 후 출력하기
# 전역변수를 이용하여 출력하기

#값 2개 반환 (튜플)
def getsum(a,b):    
    return a+b,a*b

ret=getsum(5,6)
print(ret)
print(type(ret))

#값 2개 반환 (전역변수)

sum1=0
gop1=0

def getsum2(a,b):
    global sum1,gop1
    sum1=a+b
    gop1=a*b

getsum2(5,6)
print(sum1,gop1)

gop2=0

def getsum3(a,b):
    global gop2
    gop2=a*b
    return a+b

ret=getsum3(5,6)
print(ret,gop2)

# 패킹 : 값들을 묶어서 하나의 변수로 할당
num = [1,2,3,4,5]
num2 = (1,2,3,4,5)
print(num, num2)

# 패킹 : 값들을 묶어서 하나의 변수로 할당
num = [1,2,3,4,5]
num2 = (1,2,3,4,5)
print(num, num2)

# 언패킹
a, b, c, d, e = num
print(a)

# 언패킹 시 남는 값을 *을 사용하여 리스트에 담을 수 있다.
a, b, *c = num
print(a, b, c)

def getsum(*a):  # 가변인자
    sum = 0
    print(a)
    for i in a:
        sum += i
    return sum

result = getsum(1,2,3)
print(result)

# 딕셔너리
def print_info(**args):
    print(args)
    for i, j in args.items():
        print(i, j)

print_info(kevin=1, john=2, bob=3)

# map - 리스트나 튜플같은 수회 가능한 데이터 구조 값들에 함수를 일광적으로 적용하고 적용한 값을 map이라는 객체로 반환
# 사용법 map(함수, iterable)
lst1 = [1,2,3]
lst2 = [4,5,6]

def func(a,b):
    return a+b

lst3=list(map(func, lst1, lst2))
print(lst3)
