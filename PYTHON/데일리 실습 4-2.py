students = [
    '박해피',
    '이영희',
    '조민지',
    '조민지',
    '김철수',
    '이영희',
    '이영희',
    '김해킹',
    '박해피',
    '김철수',
    '한케이',
    '강디티',
    '조민지',
    '박해피',
    '김철수',
    '이영희',
    '박해피',
    '김해킹',
    '박해피',
    '한케이',
    '강디티',
]

dic = {}

for student in students:
    dic.setdefault(student, 0)
    dic[student] += 1

dic = sorted(dic.items(), key = lambda item:item[1], reverse=True)
print(dic)

# 교수님 코드
dc = {}
for i in students:
    if i not in dc.keys():  # i가 dc.keys()에 없으면
        dc[i] = 0           # dc dictionary에 값 추가하고
    dc[i] += 1              # dc 딕셔너리에서 키에 해당하는 값을 1추가 하기

print(dc)

ret=dict(sorted(dc.items(),key=lambda x: x[1],reverse=True)) # 득표가 많은 순으로 정렬
print(ret)
