score = {
    'python': 80,
    'django': 89,
    'web': 83
}
score['algorithm'] = 90  # 딕셔너리 요소 추가
score['python'] = 85  # 딕셔너리 수정

sum = 0
for key, value in score.items():
    sum = sum + value

result = sum / len(score)
print(result)