tmp = list(input().lower().split(','))

fruit_list = []

for fruit in tmp:
    if 'rotten' in fruit:
        fruit = fruit.replace('rotten', '')
    fruit_list.append(fruit)

print(fruit_list)