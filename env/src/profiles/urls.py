from django.conf.urls import url

from . import views

urlpatterns = [
    # ex: /polls/
    url(r'^$', views.index, name='home'),
    url(r'^dashboard/', views.dashboard, name='dashboard'),
    url(r'^user-profile/', views.userProfile, name='user-profile'),
    # url(r'^activist/', views.profileActivist, name='activist'),
    # url(r'^user-profile/', views.profileSponsor, name="sponsor"),

]
