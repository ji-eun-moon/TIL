numbers = [1, 1, 3, 3, 0, 1, 1]

result = [numbers[0]]  # 첫번째 값을 리스트에 먼저 넣어 놓는다.

for number in numbers:
    if result[-1] != number:  # num이 result의 가장 마지막에 들어온 값과 같지 않은 경우 append
        result.append(number)

print(result)
