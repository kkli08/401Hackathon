from django.contrib import admin
from .models import *

# Register your models here.
admin.site.register(Attraction)
admin.site.register(Comment)
admin.site.register(AttractionImage)
admin.site.register(Rate)