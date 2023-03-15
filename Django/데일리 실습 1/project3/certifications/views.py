from django.shortcuts import render
# import random

# Create your views here.
def certification1(request):
    age = range(25, 31)
    grade = ['a', 'b', 'c', 's']
    name = 'kim happy'

    context = {
        'name' : name,
        'age' : age,
        'grade': grade,
    }
    return render(request, 'certifications/certification1.html', context)

def certification2(request):
    age = range(25, 31)
    grade = ['a', 'b', 'c', 's']
    name = 'park happy'
    context = {
        'name':name,
        'age': age,
        'grade': grade,
    }
    return render(request, 'certifications/certification2.html', context)

def certification3(request):
    age = range(25, 31)
    grade = ['a', 'b', 'c', 's']
    name = 'lee happy'
    context = {
        'name':name,
        'age':age,
        'grade':grade,
    }
    return render(request, 'certifications/certification3.html', context)