password = 1234
i = 0
while True:
    num = int(input(f'비밀번호를 입력하세요 : '))
    if i >= 2:
        print('비밀번호 3회 이상 틀림')
        break
    if num != password:
        print('비밀번호가 틀렸습니다.')
        i += 1
        continue
    elif num == password:
        print('통과!')
        break

# 교수님 코드
pwd = "asdf" #아무의미 없는 값 넣고 변수 만들어 놓았습니다.
count = 1    # while문을 돌리기 위한 count

while pwd != "1234":
    pwd = input("비밀번호 무엇?: ")
    count += 1
    if pwd == "1234":
        print("비밀번호가 맞음!")
    elif count > 3:
        print("비밀번호 입력 오류가 3번 발생, 끝입니다~~")
        break