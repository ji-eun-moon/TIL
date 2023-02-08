# 선택 정렬
lst = [4, 7, 1, 8, 2]
N = 5
for i in range(N):
    for j in range(i+1, N):
        if lst[i] > lst[j]:
            lst[i], lst[j] = lst[j], lst[i]
print(lst)

# 삽입 정렬
a = [4, 7, 3, 1, 2]
result = []

for i in range(len(a)):
    result.append(a[i])
    for j in range(len(result)-1, 0, -1):  # for j in range(i, 0, -1):
        if result[j] < result[j-1]:
            result[j], result[j-1] = result[j-1], result[j]
print(result)

# 버블 정렬
a = [8, 3, 12, 10, 1, 5, 23, 17]

for i in range(len(a)-1):
    for j in range(len(a)-1):
        if a[j] > a[j+1]:
            a[j], a[j+1] = a[j+1], a[j]
print(a)

a = [8, 3, 12, 10, 1, 5, 23, 17]
for i in range(len(a)-1, 0, -1):  # 4 3 2 1
    for j in range(0, i):  # i가 4 일때 0123 / i가 3일 때 012
        if a[j] > a[j+1]:
            a[j], a[j+1] = a[j+1], a[j]
print(a)

# 버블 정렬
N = int(input())
arr = list(map(int, input().split()))

'''
for i : N-1 -> 1  # 각 구간의 끝
    for j : 0 -> i-1  # 비교할 왼쪽 원소
        if arr[j] > arr[j+1]
            arr[j] <-> arr[j+1]  # 큰 원소를 오른쪽으로
'''
for i in range(N-1, 0, -1):
    for j in range(i):
        if arr[j] > arr[j+1]:
            tmp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = tmp

print(arr)

# 리스트 b에 숫자 4개 입력받고 b 리스트 요소가 a에 몇개 존재하는지 출력하기

a = [3, 8, 5, 2, 5, 7, 2, 4]
b = list(map(int, input().split()))

# b 리스트 정렬하기
for i in range(len(b)-1):
    for j in range(len(b)-1):
        if b[j] > b[j+1]:
            b[j], b[j+1] = b[j+1], b[j]

# a 리스트에 몇개 있는지 확인
for i in range(len(b)):
    cnt = 0
    for j in range(len(a)):
        if b[i] == a[j]:
            cnt += 1
    print(f'{b[i]}:{cnt}개')

# DAT
a = [2, 5, 2, 5, 3, 1, 2, 3, 3, 3]
b = [1, 5, 3]

n = 10
bucket = [0]*10

for i in range(n):
    bucket[a[i]] += 1

for i in b:
    print(f'{i}가 {bucket[i]}개')

for i in range(len(bucket)):
    if bucket[i] > 0:
        print(f'{i}가 {bucket[i]}개')

# 누적합 정렬

lst = [4, 7, 1, 3, 7, 5, 1]

bucket = [0]*8

# DAT 등록
for a in lst:
    bucket[a] += 1
print(bucket)

# 누적합
for i in range(1, len(bucket)-1):
    bucket[i+1] += bucket[i]
print(bucket)

# 값 넣기
result = [0]*7
for a in lst:
    result[bucket[a]-1] = a
    bucket[a] -= 1

print(result)