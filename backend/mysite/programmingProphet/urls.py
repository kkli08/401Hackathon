from views import *
from django.urls import path

urlpatterns = [
    # attractions
    path('attractions/', AttractionViewSet.as_view({'get': 'list_all'})),
    path('attraction/<str:title>/',
         AttractionViewSet.as_view({'get': 'get_attraction'})),
    # attraction image
    path('attraction/<str:title>/image/',
         AttractionImageViewSet.as_view({'get': 'get'})),
    # comment
    path('comment/<str:commentTitle>/<str:title>/',
         CommentViewSet.as_view({'get': 'get', 'post': 'post'})),
    path('comments/<str:title>/',
         CommentViewSet.as_view({'get': 'get_all_comments'})),
    # rate
    path('rate/'),
]
