# 메서드 - 인스턴스 메서드 / 클래스 메서드 / 스태틱 메서드

###############################################################################################
# 인스턴스 메서드
# 두 수의 더한 값과 뺀 값을 돌려주는 클래스를 만들어 보자. 
# 1. 생성자 함수 없이 만들기

class plus_minus:
    def data(self, first, second):  # 인자값으로 객체a, 3, 5을 각각 뜻한다
        self.first = first
        self.second = second
    
    def plus(self):  # 두 수의 합을 반환하는 메서드
        result = self.first + self.second
        return result

    def minus(self):  # 두 수의 차를 반환하는 메서드
        result = self.first - self.second
        return result

a = plus_minus()
a.data(3,5)
print(a.plus())  # 8
print(a.minus())  # -2

b = plus_minus()
b.data(2,7)
print(b.plus())  # 9
print(b.minus())  # -5

print(a.first, b.second)  # 3 7  # 객체 a와 b는 각각 독립적

# data가 인스턴스 메서드이고 인스턴스 메서드는 self를 항상 첫번째 parameter로 사용
# 이름이 self일 필요는 없으나 관례적으로 self 사용

# 2. 생성자 함수 사용하여 만들기

class plus_minus:

    def __init__(self, first, second):  # 생성자 함수
        self.first = first
        self.second = second

    def data(self, first, second):  # 인자값으로 객체a, 3, 5을 각각 뜻한다
        self.first = first
        self.second = second
    
    def plus(self):  # 두 수의 합을 반환하는 메서드
        result = self.first + self.second
        return result

    def minus(self):  # 두 수의 차를 반환하는 메서드
        result = self.first - self.second
        return result

a = plus_minus(3,5)
print(a.plus())
print(a.minus())

###############################################################################################
# 매직 메서드 - 인스턴스 생성하자마자 자동 실행

# 자동차를 생성하는 클래스를 만들고 자동차 가격의 합을 사용자가 쉽게 출력할 수 있도록 해보자.

# __add__
class car:
    def __init__(self, name, price):
        self.name = name
        self.price = price
    def __add__(self, another):
        return self.price + another.price

kia = car('k8', 300)
bmw = car('m5', 500)
# print(kia.price + bmw.price)  # 매직메서드(__add__) 커스터마이징 안했을 때
print( kia + bmw )  # 800

# __str__ - 문자열을 반환해 주는 메서드
# 차 이름과 가격을 동시에 출력 하고 싶다면
print(f'{kia.name}의 가격은 {kia.price}입니다.')

class car:
    def __init__(self, name, price):
        self.name = name
        self.price = price

    def __add__(self, another):
        return self.price + another.price

    def __str__(self):
        return (f'{self.name}의 가격은 {self.price}입니다.')

kia = car('k8', 300)
print(kia)

del kia  # 인스턴스 삭제

###############################################################################################
# 데코레이터 - 함수를 하나 만드는데 그 함수를 직접 수정하지 않고 함수에 기능을 추가하고자 할 때 사용

# 이름과 나이를 출력하는 함수
# 1. 데코레이터 사용 x

def call_name(name):
    print('반짝'*5)
    print(name)
    print('샤방'*5)

def call_age(age):
    print('반짝'*5)
    print(age)
    print('샤방'*5)

call_name('문지은')
call_age(27)

#2. 데코레이터 사용
def deco(func):
    def wrapping(value):
        print('반짝'*5)
        func(value)
        print('샤방'*5)
    return wrapping

@deco
def call_name(name):
    print(name)

@deco
def call_age(age):
    print(age)

call_name('문지은')
call_age(27)

###############################################################################################
# 정적 메서드

# 정적 메서드를 호출할 때는 클래스에서 바로 메서드 호출
# 클래스의 인스턴스가 없어도 문제 될 것 없음
# 함수의 기능하는 메서드를 클래스에 정의할 때 사용
# 클래스의 인스턴스에 어떠한 변화도 일으키지 않는 함수라는 의미를 암시할 때 사용
# 참고 - 파이썬에서는 인스턴스가 있다면 인스턴스로도 static method에 접근 가능 (잘 사용x)

class car:
    @staticmethod  # 정적 메서드
    def add_price(one, another):  # 정적 메서드는 self 사용 x
        print(one+another)
    
car.add_price(400, 800)

###############################################################################################
# 클래스 메서드
class make_pie:
    cnt = 0
    def __init__(self, name):
        self.name = name
        make_pie.cnt += 1

    @classmethod
    def number_of_pies(cls):  # 호출시 첫번째 인자로 항상 cls를 사용하고 cls는 클래스 자체(make_pies)를 의미
        print(f'파이를 {cls.cnt}명이 만들고 있습니다.')
    
    @classmethod
    def create(cls,name):  # 클래스 내부에서 클래스 안에 있는 메소드를 호출하는 함수
        p = cls(name)
        return p
    

a = make_pie('kevin')
b = make_pie('jane')
c = make_pie('john')

make_pie.number_of_pies()  # 파이를 3명이 만들고 있습니다.

make_pie.create('tom')
make_pie.create('bob')

make_pie.number_of_pies()  # 파이를 5명이 만들고 있습니다.
###############################################################################################
'''
결론

인스턴스 메서드 - 첫 매개변수로 self 사용
정적 메서드 - 매개변수 self x , cls x
클래스 메서드 - 첫 매개변수 cls

# 인스턴스 메서드
- 클래스 자체에서 메서드 호출 불가. 인스턴스 변수를 통해 메서드 호출

# 정적 메서드 
- 인스턴스 객체를 생성하지 않고도 클래스를 이용하여 직접 호출할 수 있는 메서드
- 첫 인수로 self, cls 받지 않음
- 메서드 앞에 @staticmethod

# 클래스 메서드
- 메서드 앞에 @classmethod
- 호출시 첫번째 인자로 cls 사용
'''
