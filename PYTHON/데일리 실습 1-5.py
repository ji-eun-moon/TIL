# 두 개의 정수 n과 m이 주어졌을 때, 
# 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 별(*) 문자를 이용하여 출력하여라

n = 3 
m = 4

for i in range(m):
    for j in range(n):
        print('*', end='')
    print()

# 교수님 코드
m = 5
n = 4
print((('*' * n) + '\n') * m)

print()

for i in range(m):
    print('*' * n)  # 가로 n짜리 print를 m번 반복하여 원하는 값을 얻어낸다.