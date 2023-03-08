'''
1000 미만의 자연수에서 2, 7 배수의 총합을 구하여라
'''
result = 0
for i in range(1000):
    if i % 2 == 0 or i % 7 == 0:
        result = result + i

print(result)

# 교수님 코드
set2 = set(range(2, 1000, 2))
set7 = set(range(7, 1000, 7))
lst=(set2|set7)
print(sum(lst))


ans_lst = []  # 빈 리스트를 생성
for i in range(1000):  # for : 0부터 1000까지 반복문하여 i에 할당
    if i % 2 == 0 or i % 7 == 0:  # if : 만일 i를 2로 나누었을 때 0 즉, 2의 배수거나 7의 배수면
        ans_lst.append(i)  # append 메소드를 통해 ans_lst에 i를 넣어라
print(sum(ans_lst))  # 이를 합하면, 1000미만의 자연수에서 2,7의 배수의 총합을 구할 수 있다.

sum2=0
for i in ans_lst:
    sum2+=i
print(sum2)