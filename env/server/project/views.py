from django.contrib.auth.models import Group
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse
from django.shortcuts import render

from django.contrib.gis.geos import Polygon

from rest_framework import generics
from rest_framework import permissions
# from rest_framework.permissions import IsAuthenticated

import json

from .models import Project
from .serializers import ProjectSerializer

from profiles import views

#api methods
class ProjectList(generics.ListCreateAPIView):
    #permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class ProjectDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

def index(request):
    projects = Project.objects.all()
    context = {'projects': projects}
    template = 'project/index.html'
    return render(request, template, context)

def dashboard(request):
    projects = Project.objects.all()
    user = request.user
    context = {'user': user, 'projects': projects}
    template = 'profiles/dashboard.html'
    return render(request, template, context)


@login_required
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
