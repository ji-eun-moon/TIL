orders = '아이스아메리카노,카라멜마키야또,에스프레소,아메리카노,아메리카노,아이스라떼,핫초코,아이스아메리카노,아메리카노,아이스카라멜마키야또,아이스라떼,라떼마키야또,카푸치노,라떼마키야또'

order_list = list(orders.split(','))
ice_order = []

for drink in order_list:
    if '아이스' in drink:
        ice_order.append(drink)

print(f'아이스 음료 주문 수 : {len(ice_order)}')

menu = list(set(order_list))

for drink in menu:
    print(f'{drink} 주문 수 : {order_list.count(drink)}')



# 교수님 코드
orders = '아이스아메리카노,카라멜마키야또,에스프레소,아메리카노,아메리카노,아이스라떼,핫초코,아이스아메리카노,아메리카노,아이스카라멜마키야또,아이스라떼,라떼마키야또,카푸치노,라떼마키야또'

# 1.
print(orders.count('아이스'))
# 2.
order_lst = orders.split(',')
order_dict = {}
for order in order_lst:
    if order not in order_dict.keys():
        order_dict[order] = 0
    else:
        pass
    order_dict[order] += 1
print(order_dict)

# setdefault 메소드 사용
orders = '아이스아메리카노,카라멜마키야또,에스프레소,아메리카노,아메리카노,아이스라떼,핫초코,아이스아메리카노,아메리카노,아이스카라멜마키야또,아이스라떼,라떼마키야또,카푸치노,라떼마키야또'
print(orders.count('아이스'))
order_dict = {}
order_lst = orders.split(',')
for order in order_lst:
    order_dict.setdefault(order, 0)  # setdefault 메소드를 이용하여, key에 order가 없을 경우, value를 0으로 할당함
    order_dict[order] += 1  # order를 key로 가지는 value에 1씩 더함
print(order_dict)
