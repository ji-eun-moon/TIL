orders = '아이스아메리카노,카라멜마키야또,에스프레소,아메리카노,아메리카노,아이스라떼,핫초코,아이스아메리카노,아메리카노,아이스카라멜마키야또,아이스라떼,라떼마키야또,카푸치노,라떼마키야또'

order_list = list(orders.split(','))
print(f'주문수 : {len(order_list)}')

order_list = list(set(order_list))
order_list.sort(reverse=True)  # 내림차순 정렬
print(f'주문목록 : {order_list}')