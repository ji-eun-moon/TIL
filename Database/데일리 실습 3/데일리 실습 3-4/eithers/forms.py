from django import forms
from .models import Question, Comment

class QuestionForm(forms.ModelForm):
    issue_a = forms.CharField(label="RED TEAM")
    issue_b = forms.CharField(label="BLUE TEAM")
    class Meta:
        model = Question
        fields = '__all__'

class CommentForm(forms.ModelForm):
    PICK_A = False
    PICK_B = True
    PICKS = [
        (PICK_A, 'RED_TEAM'),
        (PICK_B, 'BLUE_TEAM'),
    ]
    pick = forms.ChoiceField(choices=PICKS, widget=forms.Select())
    
    class Meta:
        model = Comment
        exclude = ('question',)