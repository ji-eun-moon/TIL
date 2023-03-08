# A. 입력예시
# print(de_identify('970103-1234567'))
# print(de_identify('8611232345678'))

# B. 출력예시
# 970103*******
# 861123******* 

a = input()
num = ''

def de_identify(a):
    if '-' in a:
        lst = a.split('-')
        lst[1] = '*******'
        num = lst[0] + lst[1]
        return num
    else:
        lst = [a[0:6], a[6:]]
        lst[1] = '*******'
        num = lst[0] + lst[1]
        return num

print(de_identify(a))