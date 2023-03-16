from django.shortcuts import render

# Create your views here.
def price(request, product, num):
    product_price = {"라면":980,"홈런볼":1500,"칙촉":2300, "식빵":1800}
    
    if product_price.get(product):
        price = product_price[product]*num
    else:
        price = None
        
    context = {
        'product': product,
        'product_price' : product_price,
        'num' : num,
        'price' : price,
        }
    return render(request, 'prices/price.html', context)