from django.shortcuts import render, redirect
from django.views.decorators.http import require_POST, require_safe, require_http_methods
from .models import Todo
from .forms import TodoForm

# Create your views here.
@require_safe
def index(request):
    todos = request.user.todo_set.all()
    context = {'todos':todos}
    return render(request, 'todos/index.html', context)

@require_http_methods(['GET', 'POST'])
def create(request):
    if not request.user.is_authenticated:
        return redirect('accounts:login')
    
    if request.method == 'POST':
        form = TodoForm(request.POST)
        if form.is_valid():
            todo = form.save(commit=False)
            todo.author = request.user
            todo.save()
            return redirect('todos:index')
    else:
        form = TodoForm()
    context = {'form':form}
    return render(request, 'todos/create.html', context)

@require_POST
def toggle(request, todo_pk):
    if not request.user.is_authenticated:
        return redirect('accounts:login')

    todo = Todo.objects.get(pk=todo_pk)
    if request.user == todo.author:
        todo.completed = not todo.completed
        todo.save()

    return redirect('todos:index')


@require_POST
def delete(request, todo_pk):
    if not request.user.is_authenticated:
        return redirect('accounts:login')
    
    todo = Todo.objects.get(pk=todo_pk)
    if request.user == todo.author:
        todo.delete()

    return redirect('todos:index')