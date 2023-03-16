from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'articles/index.html')


def throw(request):
		return render(request, 'throw.html')


def catch(request):
		print(request)
		print(type(request))
		print(request.GET)
		print(request.GET.get('message'))
		return render(request, 'catch.html')
