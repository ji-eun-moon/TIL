from django.shortcuts import render, redirect
from .models import Question, Comment
from .forms import QuestionForm, CommentForm

# Create your views here.
def index(request):
    questions = Question.objects.all()
    context = {
        'questions':questions
    }
    return render(request, 'eithers/index.html', context)

def create(request):
    if request.method == 'POST':
        question_form = QuestionForm(request.POST)
        if question_form.is_valid():
            question = question_form.save()
            return redirect('eithers:index')
    else:
        question_form = QuestionForm()
    context = {
        'question_form' : question_form,
    }
    return render(request, 'eithers/create.html', context)

def random(request):
    import random

    pk_list = []
    for value in Question.objects.values('pk'):
        pk_list.append(value['pk'])
    random_pk=random.choice(pk_list)
    
    return redirect('eithers:detail', random_pk)


def detail(request, question_pk):
    question = Question.objects.get(pk=question_pk)

    comment_form = CommentForm()
    comments = question.comment_set.all()

    count_a = question.comment_set.filter(pick=False).count()
    count_b = question.comment_set.filter(pick=True).count()
    total_count = question.comment_set.count()

    per_a = 0
    per_b = 0
    if total_count:
        per_a = round(count_a / total_count * 100, 2)
        per_b = round(count_b / total_count * 100, 2)

    context = {
        'question':question,
        'comment_form':comment_form,
        'comments':comments,
        'count_a':count_a,
        'count_b':count_b,
        'per_a':per_a,
        'per_b':per_b
    }

    return render(request, 'eithers/detail.html', context)


def comment_create(request, question_pk):
    if request.method == 'POST':
        comment_form = CommentForm(request.POST)
        if comment_form.is_valid():
            comment = comment_form.save(commit=False)
            comment.question_id = question_pk
            comment.save()
    return redirect('eithers:detail', question_pk)

def update(request, question_pk):
    question = Question.objects.get(pk=question_pk)
    if request.method == 'POST':
        question_form = QuestionForm(request.POST, instance=question)
        if question_form.is_valid():
            question_form.save()
            return redirect('eithers:detail', question_pk)
    else:
        question_form = QuestionForm(instance=question)
    
    context = {
        'question_form':question_form,
        'question_pk': question_pk,
    }
    return render(request, 'eithers/update.html', context)

def delete(request, question_pk):
    question = Question.objects.get(pk=question_pk)
    if request.method == 'POST':
        question.delete()
    return redirect('eithers:index')

def comment_delete(request, question_pk, comment_pk):
    comment = Comment.objects.get(pk=comment_pk)
    if request.method == 'POST':
        comment.delete()
    
    return redirect('eithers:detail', question_pk)