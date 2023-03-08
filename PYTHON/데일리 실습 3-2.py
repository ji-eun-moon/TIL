# 문자열을 전달 받아 정중앙 문자 출력하기
word=input('문자열을 입력받아 주세요:')
num=len(word)//2    #문자열의 길이를 구한후 절반찾기
if len(word)%2:    #문자열의 길이가 홀수 일때!!
    mid=word[num]  # 가운데 글자 출력
else:
    mid=word[num-1:num+1]
print(mid)