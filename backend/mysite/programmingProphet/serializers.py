from dataclasses import field
from rest_framework import serializers
from .models import *


class AttractionSerializers(serializers.ModelSerializer):
    class Meta:
        model = Attraction
        field = ['type', 'title', 'descriptions', 'location', 'comments', 'avgrate']


class AttractionImageSerializers(serializers.ModelSerializer):
    class Meta:
        model = AttractionImage
        field = ['title', 'image']


class CommentSerializers(serializers.ModelSerializer):
    class Meta:
        model = Comment
        field = ['type', 'attractionTitle', 'comment']


class RateSerializers(serializers.ModelSerializer):
    class Meta:
        model = Rate
        field = ['type', 'attractionTitle', 'rate']
