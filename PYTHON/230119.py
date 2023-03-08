# map
numbers = [1, 2, 3]
result = map(str, numbers)
print(result, type(result))  # <map object at 0x000001BD8ED403D0> <class 'map'>
print(list(result))  # ['1', '2', '3']

# map의 활용 1
n, m = map(int, input().split())  # 3, 5를 입력하면
print(n, m)  # 3 5
print(type(n), type(m))  # <class 'int'> <class 'int'>

# map의 활용 2
def my_magic_func(n):
    return n * 10

my_list = [1, 2, 3, 4, 5]

result = list(map(my_magic_func, my_list))

print(result)  # [10, 20, 30, 40, 50]

# filter
def odd(n):
    return n % 2

numbers = [1, 2, 3]
result = filter(odd, numbers)

print(result, type(result))  
# <filter object at 0x00000206A9AF03D0> <class 'filter'>
print(list(result))  # [1, 3]

# zip
girls = ['jane', 'ashley']
boys = ['justin', 'eric']
pair = zip(girls, boys)
print(pair, type(pair))
# <zip object at 0x000001B9DCDF60C0> <class 'zip'>
print(list(pair))
# [('jane', 'justin'), ('ashley', 'eric')]

# lambda 함수

# 삼각형의 넓이를 구하는 공식 - def
def triangle_area(b,h):
    return 0.5 * b * h
print(triangle_area(5,6))  # 15.0

# 삼각형의 넓이를 구하는 공식 - lambda
triangle = lambda b, h : 0.5 * b * h
print(triangle_area(5,6))  # 15.0

my_list = [1, 2, 3, 4, 5]
result = map(lambda n: n * 10, my_list)
print(list(result))  # [10, 20, 30, 40, 50]

# 재귀 함수
def factorial(n):
    if n == 0 or n == 1:
        return 1
    else:
        return n * factorial(n-1)

print(factorial(4))


# 언패킹
def multiply(x, y, z):
    return x * y * z

numbers = [1, 2, 3]
result1 = multiply(numbers[0], numbers[1], numbers[2])
result2 = multiply(*numbers)  # 언패킹 사용할 경우 

print(result1)  # 6
print(result2)  # 6

# 가변인자
def test(*args):
    for arg in args:
        print(arg)

test(1)
test(1, 2)
test(1, 2, 3, 4)

def my_sum(*args):
    rlt = 0
    for arg in args:
        rlt += arg
    return rlt

print(my_sum())  # 0
print(my_sum(1, 2, 3))  # 6