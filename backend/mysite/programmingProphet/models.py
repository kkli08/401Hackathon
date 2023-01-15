from django.db import models
from email.policy import default
# Create your models here.


def default_list():
    return []
    
class Attraction(models.Model):
    type = 'Attraction'

    title = models.CharField(max_length=255, default='')
    name = models.CharField(max_length=255, default='')
    descriptions = models.CharField(max_length=255, default='')
    location = models.CharField(max_length=255, default='')
    comments = models.JSONField(default=default_list)
    avgrate = models.IntegerField()
    type = models.CharField(max_length=255, default='')


class AttractionImage(models.Model):
    type = 'AttractionImage'

    attractionTitle = models.CharField(max_length=255, default='')
    image = models.ImageField(null=True, blank=True)


class Comment(models.Model):
    type = 'Comment'
    attractionTitle = models.CharField(max_length=255, default='')
    commentTitle = models.CharField(max_length=255, default='')
    comment = models.CharField(max_length=255, default='')


class Rate(models.Model):
    type = 'Rate'
    attractionTitle = models.CharField(max_length=255, default='')
    rate = models.IntegerField()
