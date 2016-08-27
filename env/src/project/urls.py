from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns

from . import views

urlpatterns = [
    url(r'^projects-all/', views.projects_all, name="projects_all"),
    url(r'^projects/$', views.ProjectList.as_view()),
    url(r'^project/(?P<pk>[0-9]+)/$', views.ProjectDetail.as_view()),

]

urlpatterns = format_suffix_patterns(urlpatterns)
