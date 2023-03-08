# 22시가 지났고 졸리면 True, 졸리지 않다면 False인 코드
# 23시 이후이고, 잠이 오는 경우
hour = 23
status = 'sleepy'
print(hour >= 22 and status == 'sleepy')  # True

# 23시가 되었지만, 잠이 안오는 경우 
hour = 23
status = 'nice'
print(hour >= 22 and status == 'sleepy')  # False

# 논리연산자 주의할 점
print(not True)  # False
print(not 0)  # True
print(not 'hi')  # False
print(((not True) and False) or (not False))  # True

# 논리연산자 단축평가
print(3 and 5)  # 5
print(3 and 0)  # 0
print(0 and 3)  # 0
print(0 and 0)  # 0

print(5 or 3)  # 5
print(3 or 0)  # 3
print(0 or 3)  # 3
print(0 or 0)  # 0
