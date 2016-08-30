from rest_framework import serializers
from .models import Project

#model serializer
class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ('id', 'name', 'date_added', 'description', 'location')

    # create the project
    def create(self, validated_data):
        name = validated_data.get('name', None)
        #user info comes from authenticated user
        date_added = validated_data.get('date_added', None)
        description = validated_data.get('description', None)
        return Project.objects.create(name=name, date_added=date_added, description=description)
