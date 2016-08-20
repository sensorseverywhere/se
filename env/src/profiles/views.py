from django.http import HttpResponse
from django.conf import settings
from django.shortcuts import render
from django.contrib.auth.models import Group
from django.contrib.auth.decorators import login_required

def index(request):
    print(settings.MEDIA_ROOT)
    context = {}
    template = 'profiles/index.html'
    return render(request, template, context)

@login_required
def dashboard(request):
    user = request.user
    context = {'user': user}
    template = 'profiles/dashboard.html'
    # if:
    #     g = Group.objects.get(name='activist')
    #     g.user_set.add(user)
    # else:
    #     g = Group.objects.get(name='sponsor')
    #     g.user_set.add(user)
    return render(request, template, context)

@login_required
def userProfile(request):
    user = request.user
    context = {'user': user}
    template = 'profiles/user-profile.html'
    return render(request, template, context)

# @login_required
# def profileActivist(request):
#     user = request.user
#     context = {'user': user}
#     template = 'profiles/activist.html'
#     return render(request, template, context)


# @login_required
# def profileSponsor(request):
#     user = request.user
#     context = {'user': user}
#     template = 'profiles/sponsor.html'
#     return render(request, template, context)
