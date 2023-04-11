from django import forms
from .models import Article, Comment

# class ArticleForm(forms.Form):
#     title = forms.CharField(max_length=30)
#     content = forms.CharField(widget=forms.Textarea)


class ArticleForm(forms.ModelForm):
    class Meta:
        model = Article
        fields = ('title', 'content',)

# class CommentForm(forms.ModelForm):
#     class Meta:
#         model = Comment
#         fields = '__all__'

# 외래 키 필드 출력에서 제외
class CommentForm(forms.ModelForm):
    class Meta:
        model = Comment
        exclude = ('article',)