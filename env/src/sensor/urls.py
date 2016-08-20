from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^list-sensors/', views.sensor_list, name="sensor_list")
]
