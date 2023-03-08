# 끝말잇기

str_lst = input('문자열을 입력하세요. : ')
str_list = list(str_lst.lower().split())

a = 0
for i in range(1,len(str_list)):
    if str_list[i-1][-1] == str_list[i][0]:
        a += 1
    else:
        break

if a == (len(str_list)-1):
    print("Pass")
else:
    print("Fail")

# 교수님 코드
str_lst = input().lower().split()

ret = ((str_lst[0][-1] == str_lst[1][0]) and (str_lst[1][-1] == str_lst[-1][0]))

if ret:
    print('Pass')
else:
    print('Fail')