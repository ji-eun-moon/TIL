class fee:
    def __init__(self, time, distance):
        self.time = time
        self.distance = distance
    
    def total_fee(self):
        time_fee = ((self.time//10) + bool(self.time%10)) * 1200

        insurance_fee = ((self.time//30) + bool(self.time%30)) * 525

        if self.distance <= 100:
            distance_fee = self.distance * 170
        elif self.distance > 100:
            distance_fee = 170*100 + 85*(self.distance-100)
        
        total = time_fee + insurance_fee + distance_fee

        return total


a = fee(600,50)
print(a.total_fee())

b = fee(600, 110)
print(b.total_fee())

# 교수님 코드

import math

# 대여료 10분당 1200원
# 보험료 30분당 525 (50분->1시간)
# 주행요금 km당 170 (100km 초과시 50% 할인)

def fee(minute, distance):

    #대여료+보험료
    result = math.ceil(minute / 10) * 1200 + math.ceil(minute / 30) * 525

    #주행요금
    if distance > 100:
        result += ((170*100) + (85 * (distance - 100)))
    else:
        result += 170 * distance
    return f'{result:,}'

print(fee(600, 50))
print(fee(600, 110))

