from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^single/', views.single, name='single'),
    url(r'^subscription/', views.subscription, name='subscription'),
]
