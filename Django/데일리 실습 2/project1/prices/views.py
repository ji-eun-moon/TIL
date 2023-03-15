from django.shortcuts import render

# Create your views here.
def price(request, product, num):
    product_price = {"라면":980,"홈런볼":1500,"칙촉":2300, "식빵":1800}
    product_list = ["라면", "홈런볼", "칙촉", "식빵"]
    
    context = {
        'product': product,
        'product_list' : product_list,
        'num' : num,
        'price' : product_price[product]*num
        }
    return render(request, 'prices/price.html', context)