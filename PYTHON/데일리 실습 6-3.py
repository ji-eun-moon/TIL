# 문자열의 모음 개수 출력하는 함수 생성

def count_vowels(word):
    result = word.count('a') + word.count('e') + word.count('i') + word.count('o') + word.count('u')
    return result


