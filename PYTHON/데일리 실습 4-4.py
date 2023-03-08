word1 = input('첫 번째 이름을 입력하세요 : ')
word2  = input('두 번째 이름을 입력하세요 : ')

word1_ord = 0
word2_ord = 0

for char in word1:
    word1_ord += ord(char)

for char in word2:
    word2_ord += ord(char)

print(word1 if word1_ord > word2_ord else word2)