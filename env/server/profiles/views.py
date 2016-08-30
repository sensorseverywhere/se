from django.http import HttpResponse
from django.conf import settings
from django.shortcuts import render
from django.contrib.auth.models import Group
from django.contrib.auth.decorators import login_required

from project.models import Project

@login_required
def dashboard(request):
    projects = Project.objects.all()
    user = request.user
    context = {'user': user, 'projects': projects}
    template = 'profiles/dashboard.html'
    # if:
    #     g = Group.objects.get(name='activist')
    #     g.user_set.add(user)
    # else:
    #     g = Group.objects.get(name='sponsor')
    #     g.user_set.add(user)
    return render(request, template, context)

# @login_required
# def userProfile(request):
#     user = request.user
#     context = {'user': user}
#     template = 'profiles/user-profile.html'
#     return render(request, template, context)
