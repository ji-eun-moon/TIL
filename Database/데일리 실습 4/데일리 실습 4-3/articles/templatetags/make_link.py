# articles/templatetags/make_link.py

from django import template

register = template.Library()

@register.filter 
def hashtag_link(word):
    content = word.content + ' '
    hashtags = word.hashtags.all()
    for hashtag in hashtags:
        content = content.replace(hashtag.content + ' ', f'<a href="/articles/{hashtag.pk}/hashtag/">{hashtag.content}</a>' )
    return content  # 원하는 문자열로 치환이 완료된 content 리턴