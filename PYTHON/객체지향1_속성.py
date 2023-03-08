# 객체 지향 프로그래밍 (Object Oriented Programming, OOP)

# 클래스 속성 - 클래스 변수 / 인스턴스 변수

class calculator():
    numberOfCalcul = 0  # 클래스 변수 - 한 클래스의 모든 인스턴스가 공유하는 속성

    def __init__(self):  # 생성자 함수(Constructor)
        self.result = 0  # 인스턴스 변수 - 인스턴스가 개인적으로 가지고 있는 속성(Attribute)
        calculator.numberOfCalcul += 1  # 인스턴스 생성될 때마다 1씩 증가
    
    def getsum(self, value):
        self.result += value
        return self.result

cal1 = calculator()
print(cal1.getsum(3))  # 3
print(cal1.getsum(4))  # 7
print(cal1.getsum(5))  # 12

print(cal1.numberOfCalcul)  # 1

cal2 = calculator()
print(cal2.getsum(6))  # 6
print(cal2.getsum(7))  # 13
print(cal2.getsum(1))  # 14

print(cal2.numberOfCalcul)  # 2
print(calculator.numberOfCalcul)  # 2

# 주의 - 클래스 변수 값을 변경 시 무조건 항상 클래스.클래스변수 형식으로 변경해야 함!
calculator.numberOfCalcul = 6
print(cal1.numberOfCalcul)
print(cal2.numberOfCalcul)

cal3 = calculator()
print(cal3.getsum(5))  # 5
print(cal3.getsum(4))  # 9
print(cal3.getsum(1))  # 10

print(calculator.numberOfCalcul)  # 7

# 클래스 변수는 모든 인스턴스가 공통으로 쓰는 값이므로 인스턴스로 접근해서 마음대로 값을 바꾸면 안됨

cal1.numberOfCalcul = 10  # 새로운 인스턴스 변수가 만들어짐
print(cal2.numberOfCalcul)  # 7

calculator.numberOfCalcul = 20  # 클래스 변수의 값을 바꿔도 cal1은 바뀌지 않음
print(cal1.numberOfCalcul)  # 10
print(cal2.numberOfCalcul)  # 20

# 결론
# 클래스 변수 : 모든 인스턴스가 공유. 인스턴스 전체가 사용해야하는 값을 저장할 때 사용
# 인스턴스 변수 : 인스턴스 별로 독리되어 있음. 각 인스턴스가 값을 따로 저장해야할 때 사용
