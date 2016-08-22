import datetime
from django.db import models
from django.contrib.gis.geos import Point
from django.contrib.gis.db import models
from django.contrib.gis.db import models as gismodels

# Create your models here.
class Project(models.Model):
    name = models.CharField(max_length=250, null=False, blank=False, unique=True)
    date_added = models.DateField(auto_now_add=True)
    description = models.TextField(max_length=2500, null=True, blank=True)
    image = models.CharField(max_length=250, null=True, blank=True)
    location = models.PointField(null=True)


    def __unicode__(self):
        return self.name
