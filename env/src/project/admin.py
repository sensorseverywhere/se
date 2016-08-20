from django.contrib import admin

from .models import Project

# Register your models here.
class ProjectAdmin(admin.ModelAdmin):
    class Meta:
        model = Project
    list_display = ('name',)
    search_fields = ['name']

admin.site.register(Project, ProjectAdmin)
