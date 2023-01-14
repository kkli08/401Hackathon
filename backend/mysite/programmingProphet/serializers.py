from dataclasses import field
from rest_framework import serializers
from .models import *


class AttractionSerializers(serializers.ModelSerializer):
    class Meta:
        model = Attraction
        fields = ['type', 'title', 'descriptions', 'location', 'comments', 'avgrate']


class AttractionImageSerializers(serializers.ModelSerializer):
    class Meta:
        model = AttractionImage
        fields = ['title', 'image']


class CommentSerializers(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['type', 'attractionTitle', 'comment']


class RateSerializers(serializers.ModelSerializer):
    class Meta:
        model = Rate
        fields = ['type', 'attractionTitle', 'rate']
