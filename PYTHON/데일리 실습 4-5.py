test_status = {
    '김싸피': 'solving',
   	'이코딩': 'solving',
   	'최이썬': 'cheating',
   	'오디비': 'sleeping',
   	'임온실': 'cheating',
   	'조실습': 'solving',
   	'박장고': 'sleeping',
   	'염자바': 'cheating'
}

cheating_student = []

dc = {}

for student, status in test_status.items():
    if status == 'cheating':  # cheating 인 학생 이름 cheating_student에 append
        cheating_student.append(student)
    if status != 'cheating':  # cheating 아닌 경우만 따로 딕셔너리에 모으고
        dc[student] = status
        if status == 'sleeping':  # 상태가 sleeping 인 경우 solving으로 수정 
            dc[student] = 'solving'


print(sorted(cheating_student, key=lambda x:x))  # 오름차순 출력
print(dc)

'''
# 커닝 퇴출
dc={}
for i in test_status.items():  #아이템즈()하면 튜플로 key랑 value 반환하죠?
    if i[1]!='cheating':        # cheating이 아닌 것만 dc에 저장하기!!
        dc[i[0]]=i[1]
print(dc)

# 커닝하는 사람의 리스트를 오름차순으로 출력
lst=[]
for i in test_status.items():
    if i[1]=='cheating':        # cheating만 따로 lst에 담은후
        lst.append(i[0])
print(sorted(lst,key=lambda x:x))   # 오름차순으로 정렬해서 출력하기

# sleeping을 solving으로 바꾼 후 출력하기
for i in dc.items():
    if i[1]=='sleeping':        # value가 sleeping 이라고 적혀있는 것들은
        dc[i[0]]='solving'        # 해당 키의 값을 solving으로 바꾸기
print(dc)
'''