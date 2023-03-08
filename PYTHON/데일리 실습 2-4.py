#출력 결과 예시
# 스테이크   50,000
# + VAT     7,500
# 총계 ₩    57,500

steak = 50000
VAT = int(steak * 0.15)

print(f'스테이크{steak:>8,}') #스테이크가격을 우측에 정렬 후 , 넣기 
print(f'+ VAT{VAT:>10,}')
print(f'총계 ₩{(steak+VAT):>10,}')
