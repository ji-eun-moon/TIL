# 각 자리수를 더해 출력하는 코드
s = input('숫자를 입력해주세요 : ')

sum = 0
for i in range(len(s)):
    sum = sum + int(s[i])
print(sum)