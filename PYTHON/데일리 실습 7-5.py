import random

class ClassHelper:

    def __init__(self, students):
        self.students = students
    
    def pick(self, n):
        return random.sample(self.students, n)

    def match_pair(self):
        match_lst = self.students[:]
        result = []
        while True:
            if len(match_lst)==3 or len(match_lst)==2:  # 리스트에 두명 또는 세명만 남았을 경우 그대로 리스트에 추가
                result.append(match_lst)
                return result
            temps = random.sample(match_lst, 2)  # 두 명 뽑고
            result.append(temps)  # 결과리스트에 추가
            for i in range(2):
                match_lst.remove(temps[i])  # 뽑은 두명 제거 
            

ch = ClassHelper(['김해피', '이해킹', '조민지', '박영수', '정민수'])

print(ch.pick(1))
print(ch.pick(1))
print(ch.pick(2))
print(ch.pick(3))
print(ch.pick(4))

print(ch.match_pair())

# 교수님 코드
import random
class ClassHelper:
    def __init__(self, students):
        self.students = students

    def pick(self, number):
        return random.sample(self.students, number)

    def match_pair(self):
        # self.students 값을 바꾸지 않기 위해 복사를 해서 쓴다.
        match_list = self.students[:]

        # shuffle은 반환 값 없이 원본 데이터를 변경한다.
        random.shuffle(match_list)

        # 결과값을 담을 리스트를 만들고
        result = []
        
        # while문을 돌린다.
        while match_list:
        
            # match_list의 길이가 3보다 크면 두 명을 pop하고
            if len(match_list) > 3:
                pair = [match_list.pop(0), match_list.pop(0)]
        
            # 3보다 작거나 같으면 걔네끼리 pair를 한다
            else:
                pair = match_list[:]
                # while 문의 종료 조건에 따라 clear()를 해준다
                match_list.clear()
        
            # 각각의 pair를 result에 추가하고 return
            result.append(pair)
        return result


    
ch = ClassHelper(['김해피', '이해킹', '조민지', '박영수', '정민수'])

print(ch.pick(1))
print(ch.pick(1))
print(ch.pick(2))
print(ch.pick(3))
print(ch.pick(4))

print(ch.match_pair())