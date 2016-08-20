from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns

from . import views

urlpatterns = [
    url(r'^create-project/', views.create_project, name="create_project"),
    url(r'^(?P<project_id>\d+)/$', views.project_single, name="project_single"),
    url(r'^projects-all/', views.projects_all, name="projects_all"),
    url(r'^api/(?P<pk>[0-9]+)/$', views.ProjectJson.as_view(), name="project_json"),
]

urlpatterns = format_suffix_patterns(urlpatterns)
