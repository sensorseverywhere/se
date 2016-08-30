from django.contrib.gis.geos import Polygon
from django.http import HttpResponse
from django.shortcuts import render

from .models import Sensor

# Create your views here.
def sensor_list(request):
    #work out what the bounding box is
    #/sensor.json?bbox=37.131,-121.4831,37.5,-120.4843
    bounding_box = request.GET['bbox'].split(',')
    poly = Polygon.from_bbox(bounding_box)
    #fetch the sensors
    sensors = Sensor.objects.filter(pt__within=poly)
    #convert to geojson
    geojson_dict = {
        "type": "FeatureCollection",
        "features": [sensor_to_geojson(sensor) for sensor in sensors],
    }
    #return response
    return HttpResponse(json.dumps(geojson_dict), content_type='application/json')

def sensor_to_geojson(sensor):
    return {
        "type": "feature",
        "geometry": {
            "type": "Point",
            "coordinates": [sensor.pt.x, sensor.pt.y],
        },
        "properties": {
            "description": sensor.description,
        }
    }
