# 1 + 2
# 2 – 1
# 3 * 4
# 4 / 0

class Calculator:

    def __init__(self, first, second):
        self.first = first
        self.second = second

    def add(self):
        result = self.first + self.second
        return result
    def substract(self):
        result = self.first - self.second
        return result
    def multiply(self):
        result = self.first * self.second
        return result
    def divide(self):
        result = self.first / self.second
        return result

a =  Calculator(1, 2)
b = Calculator(2, 1)
c = Calculator(3, 4)
d = Calculator(4, 0)

try:
    print(a.add())
    print(b.substract())
    print(c.multiply())
    print(d.divide())

except ZeroDivisionError:
    print('0으로 나눌 수 없습니다.')

# 교수님 코드
class Calculator:
    def add(self, a, b):
        return a + b

    def subtract(self, a, b):
        return a - b

    def multiply(self, a, b):
        return a * b

    def divide(self, a, b):
        try:
            return a / b
        except ZeroDivisionError:
            return '0으로 나눌 수 없습니다.'


calc = Calculator()
print(calc.add(1, 2))
print(calc.subtract(2, 1))
print(calc.multiply(3, 4))
print(calc.divide(4, 0))