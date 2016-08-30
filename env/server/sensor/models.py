from django.contrib.gis.db import models

# Create your models here.
class Sensor(models.Model):
    sensor_type = models.CharField(max_length=50)
    is_active = models.BooleanField(default=False)
    description = models.TextField()

    pt = models.PointField()

    objects = models.GeoManager()

    def __unicode__(self):
        return self.description
