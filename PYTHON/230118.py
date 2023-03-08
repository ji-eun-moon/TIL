# 함수의 실행 순서 예시
num1 = 0
num2 = 1

def func1(a,b):
    return a + b

def func2(a, b):
    return a - b

def func3(a, b):
    return func1(a, 5) + func2(5, b)

result = func3(num1, num2)
print(result)  # 9

# 값에 따른 함수의 종류
a = print('hello world')
b = float('3.14')

print(a)
print(b)

# 튜플을 활용하여 두 개 이상의 값 반환
def minus_and_product(x,y):
    return x - y, x * y

y = minus_and_product(4,5)
print(y)  # (-1, 20)
print(type(y))  # <class 'tuple'>

# Void function 예시
def void_product(x, y):
    print(f'{x} x {y} = {x * y}')

void_product(4, 5)  # 4 x 5 = 20
ans = void_product(4, 5)  # 4 x 5 = 20
print(ans)  # None

# Value returning fuction 예시
def value_returning_product(x, y):
    return x * y

value_returning_product(4, 5)
ans = value_returning_product(4, 5)
print(ans)  # 20

# 똑바로 읽어도 거꾸로 읽어도 같은 단어를 찾는 함수
word_list = ['우영우', '기러기', '별똥별', '파이썬']
def is_palindrome(word_list):
    palindrome_list = []
    for word in word_list:
        if word == word[::-1]:
            palindrome_list.append(word)
    return palindrome_list
print(is_palindrome(word_list))  # ['우영우', '기러기', '별똥별']

# LEGB
a = 0
b = 1
def enclosed():
    a = 10
    c = 3
    def local(c):
        print(a, b, c)  # 10 1 300
    local(300)
    print(a, b, c)  # 10 1 3
enclosed()  
print(a, b)  # 0 1

# 함수 내부에서 글로벌 변수 변경하기
a = 10
def func1():
    global a
    a = 3

print(a)  # 10
func1()
print(a)  # 3

# nonlocal 예시
x = 0
def func1():
    x = 1
    def func2():
        nonlocal x
        x = 2
    func2()
    print(x)  # 2
func1()
print(x)  # 0

# filter

# 리스트나 튜플과 같은 순회 가능한 데이터 구조 값들을 함수에 적용하는데
# 적용 후 값 중 True만 반환, filter라는 객체로 반환

# 리스트에서 짝수만
num = [1,2,3,4,5,6,7,8,9,10]

def get_even(t):
    return True if t % 2 == 0 else False

result = filter(get_even, num)

print(list(result))

# lambda
# 익명함수 ; 함수를 간략하게 적기 위해서 사용

# 숫자 2개 입력받고 getsum 함수로 전달
# get sum 함수에서 전달받은 두 수의 합을 리턴

def getsum(a, b):
    return a + b

ret = getsum(3,5)
print(ret)  # 8

result = (lambda a,b:a+b)(3,5)
print(result)  # 8

sum2 = (lambda a,b:a+b)
print(sum2(3,5))  # 8

lst1 = [1,2,3,4,5]
lst2 = [6,7,8,9,10]

# 두 리스트 값들의 합을 lst3에 람다 함수를 사용하여 값을 채운 후 출력

result = (lambda a,b:a+b)

lst3=list(map(result, lst1, lst2))
print(list(lst3))

lst3 = list(map(lambda a,b:a+b, lst1, lst2))
print(list(lst3))

lst = list(range(100))

# 리스트에서 짝수만 빼오기

def get_even(t):
    return True if t % 2 == 0 else False

result1 = list(filter(get_even, lst))
print(result1)

lst2 = filter(lambda even:even%2==0,lst)
print(list(lst2))

# 순환 가능한 구조에 일괄 적용 = map
# 데이터에 일괄적용하는데 True 값만 따로 저장 = filter
# 사용자 함수를 직접 적지 않고 간단하게 함수 사용 = lambda

# recursion 재귀(재귀호출)
# 함수가 하나 있는데 함수 자기가 자기 자신을 계속 호출

for i in range(1,11):
    print(i,end=' ')
for i in range(10,0,-1):
    print(i, end=' ')

print()

def abc(level):
    if level == 11:
        return
    print(level, end=' ')
    abc(level+1)

abc(1)

st = 'apple,banana,mango'

# 문자 'a'가 존재하는지 확인
index = st.find('le')  # 찾는 값의 인덱스 반환
print(index)  # 3
index = st.find('xx')  # 없으면 -1 값 반환
print(index)

alpha = st.index('p')  # 없으면 버그 
print(alpha)

# 대소문자 확인
print(st.isupper())  # False
print(st.islower())  # True
print(st.isalpha())  # False

print(st.count('a'))  # 5

# join (합치기)
st = ['a', 'p', 'p', 'l', 'e']
str2 = ''.join(st)
print(str2)
str2=','.join(st)
print(str2)

st = ['apple', 'banana', 'mango']
str2=','.join(st)
print(str2)

# 모두 대문자로 바꾸기 
st = 'apple, banana, mango'
str2 = st.upper()
print(str2)

# 공백 지우기
st = '    apple'
print(st)
str2 = st.lstrip()  # 오른쪽 공백 지우기는 rstip(), 양쪽 공백 지우기는 strip()
print(str2)

# 교체 replace
st = 'apple'
str2 = st.replace('ap', 'mp')
print(str2)

# 리스트 값 추가
lst = ['apple', 'banana', 'mango']
lst.append('orange') 
print(lst)  # ['apple', 'banana', 'mango', 'orange']
lst.insert(1,'orange')  # 리스트 값을 중간 또는 맨 앞에 추가할 때 사용
print(lst)  # ['apple', 'orange', 'banana', 'mango', 'orange']

st = [1,2,3]
str2 = [4,5]
st.append(str2)  # 리스트 추가
print(st)  # [1, 2, 3, [4, 5]]

st = [1,2,3]
str2 = [4,5]
st.extend(str2)  # 리스트 요소 추가
print(st)  # [1, 2, 3, 4, 5]

# 리스트 값 지우기
st.pop()  
print(st)  # [1, 2, 3, 4]

st = [1,2,3,4,1,2,3,4]
st.remove(4)
print(st)  # [1, 2, 3, 1, 2, 3, 4]

st = [1,2,3,4,1,2,3,4]
del st[3:]
print(st)  # [1, 2, 3]

st = [1,2,3,4,1,2,3,4]
st.reverse()
print(st)  # [4, 3, 2, 1, 4, 3, 2, 1]
print(st[::-1])  # [4, 3, 2, 1, 4, 3, 2, 1]

# sort
a1 = [6,3,9]
print(a1)  # [6, 3, 9]
a1.sort()  # 오름차순 정렬
print(a1)  # [3, 6, 9]
a1.sort(reverse=True) # 내림차순 정렬
print(a1)  # [9, 6, 3]

a1 = [6,3,9]
ret = sorted(a1)  # 원본 데이터 값 유지 (sort와 다른점)
print(a1, ret)  # [6, 3, 9] [3, 6, 9]
ret = sorted(a1, reverse=True)
print(a1, ret)  # [6, 3, 9] [9, 6, 3]

# lambda를 이용한 sort
lst = list(range(10))
print(lst)  # [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
ret=sorted(lst, key=lambda x:x)  # ret = sorted(lst)
print(ret)  # [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
ret=sorted(lst, key=lambda x:x, reverse=True)  # 내림차순(문자, 숫자 모두 가능)
print(ret)  # [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
ret=sorted(lst, key=lambda x:-x)  # 내림차순(문자는 정렬 안됨)
print(ret)  # [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]

lst = [(3, 'banana'), (2,'apple'), (1, 'carrot')]
ret = sorted(lst, key=lambda s:s[1])
print(ret)  # [(2, 'apple'), (3, 'banana'), (1, 'carrot')]
ret = sorted(lst, key=lambda s:s[0])
print(ret)  # [(1, 'carrot'), (2, 'apple'), (3, 'banana')]

# 딕셔너리 
st={'kevin':1, 'john':2, 'bob':3}

# 딕셔너리 요소 추가
st['kate'] = 'hi'
print(st)  # {'kevin': 1, 'john': 2, 'bob': 3, 'kate': 'hi'}

st['kevin']=11  # 수정
print(st)  # {'kevin': 11, 'john': 2, 'bob': 3, 'kate': 'hi'}

del st['kate']  # 삭제
print(st)  # {'kevin': 11, 'john': 2, 'bob': 3}

lst = st.keys()  # key 값만 반환
print(list(lst))  # ['kevin', 'john', 'bob']

lst=st.values()  # value 값만 반환
print(list(lst))  # [11, 2, 3]

lst=st.items()  # (key, value) 튜플 형태로 반환
print(list(lst))  # [('kevin', 11), ('john', 2), ('bob', 3)]

# 딕셔너리 값 출력
st={'kevin':1, 'john':2, 'bob':[1,2,3]}
#  print(st['keevin'])  # 없으면 에러
print(st.get('keccin', '값 없음'))

# 딕셔너리 값 정렬
st = {'kevin':27, 'john':22, 'bob':35}
ret = dict(sorted(st.items(), key=lambda x:x[1]))
print(ret)  # {'john': 22, 'kevin': 27, 'bob': 35}