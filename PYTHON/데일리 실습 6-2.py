# 가장 높은 가격을 가지고 있는 작물의 이름 출력하기

grain_lst = [('고구마',3000), ('감자',2000), ('옥수수',4500),('토란',1300)]

# 가격 순으로 내림차순 정렬
grain_lst.sort(key=lambda x:x[1], reverse=True)

# 제일 첫번째 작물 이름 출력
print(grain_lst[0][0])