words = ["round" , "dream", "magnet" , "tweet" , "tweet", "trick", "kiwi"]
tmp = []
i = 0
while True:
    if words[i] == words[-1]:
        print('모두 성공!')
        break
    elif words[i][-1] == words[i+1][0]:
        if words[i] in tmp:
            print(f'{i+1}번째 사람 탈락')
            break
        tmp.append(words[i])
        i += 1
    else:
        print(f'{i+2}번째 사람 탈락')
        break
