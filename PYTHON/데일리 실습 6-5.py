num = int(input())

# 반복문 활용 x
def sum_of_digit(num):
    lst = map(int, list(str(num)))
    result = sum(lst)
    return result


# 반복문 활용
def sum_of_digit(num):
    lst = list(str(num))
    sum = 0
    for i in range(len(lst)):
        sum += int(lst[i])
    return sum

print(sum_of_digit(num))