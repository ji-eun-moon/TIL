from rest_framework import serializers
from .models import Music, Comment


class MusicListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Music
        fields = ('id', 'title')


class MusicSerializer(serializers.ModelSerializer):

    comment_set = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    comment_count = serializers.IntegerField(source='comment_set.count', read_only=True)

    class Meta:
        model = Music
        fields = '__all__'
    
    def to_representation(self, instance):
        rep = super().to_representation(instance)
        rep['comments'] = rep.pop('comment_set', [])  
        return rep

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'
        read_only_fields = ('music',)