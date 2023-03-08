# 입력 예시
# <p>취업 준비생에게 SW 역량 향상 교육 및 다양한 취업지원 서비스를 제공하여 취업에 성공하도록 돕는 프로그램입니다.</p>

# 출력 예시
# 취업 준비생에게 SW 역량 향상 교육 및 다양한 취업지원 서비스를 제공하여 취업에 성공하도록 돕는 프로그램입니다.

html_txt = input()
result = html_txt[3:-4]
print(result)

# 교수님 코드
st="<div>오늘은 기분이 좋아</div>"
st=st[5:-6]
print(st)

st="<div>오늘은 기분이 좋아</div>"
st=st[st.find('>')+1:st.find('<',1)]