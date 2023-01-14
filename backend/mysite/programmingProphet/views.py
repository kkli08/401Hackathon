from django.shortcuts import render
from .models import *
from email.policy import default
from urllib import response
from rest_framework import viewsets
from rest_framework.response import Response
from .serializers import *
# Create your views here.


class AttractionViewSet(viewsets.ModelViewSet):
    def get_serializer_class(self):
        return AttractionSerializers

    # get all attractions
    def list_all(self, request, *args, **kwargs):
        attractions = Attraction.objects.all()
        serial_attractions = AttractionSerializers(attractions, many=True)
        attractions_response = {'type': 'attractions',
                                'items': serial_attractions.data}

        return Response(attractions_response)

    # get single attraction
    # attraction/<str:attractionTitle>/
    def get_attraction(self, request, *args, **kwargs):
        attraction_title = request.build_absolute_uri().split('/', -1)[-2]
        attraction = Attraction.objects.get(title=attraction_title)
        attraction_info = AttractionSerializers(attraction)
        return Response(attraction_info.data)


class AttractionImageViewSet(viewsets.ModelViewSet):
    def get_serializer_class(self):
        return AttractionImageSerializers

    # attraction/<str:title>/image/
    def get(self, request, *args, **kwargs):
        attraction_title = request.build_absolute_uri().split('/', -1)[-3]
        attimage = AttractionImage.objects.filter(
            attractionTitle=attraction_title)
        return (AttractionImageSerializers(attimage).data)


class CommentViewSet(viewsets.ModelViewSet):
    def get_serializer_class(self):
        return CommentSerializers

    # all comment
    # comments/<str:title>/
    def get_all_comments(self, request, *args, **kwargs):
        attraction_title = request.build_absolute_uri().split('/', -1)[-2]
        comments = Comment.objects.get(attractionTitle=attraction_title)
        serial_comments = CommentSerializers(comments, many=True)
        comments_response = {'type': 'comments',
                             'items': serial_comments.data}

        return Response(comments_response)

    # comment/<str:commentTitle>/<str:title>/
    def get(self, request, *args, **kwargs):
        pass

    # comment/<str:commentTitle>/<str:title>/
    def post(self, request, *args, **kwargs):
        pass


class RateViewSet(viewsets.ModelViewSet):
    def get_serializer_class(self):
        return RateSerializers

    def get(self, request):
        pass

    def post(self, request):
        pass
