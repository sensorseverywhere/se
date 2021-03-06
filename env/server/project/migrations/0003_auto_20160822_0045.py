# -*- coding: utf-8 -*-
# Generated by Django 1.9.8 on 2016-08-22 00:45
from __future__ import unicode_literals

import django.contrib.gis.db.models.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('project', '0002_auto_20160814_1340'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='location',
            field=django.contrib.gis.db.models.fields.PointField(null=True, srid=4326),
        ),
        migrations.AlterField(
            model_name='project',
            name='date_added',
            field=models.DateField(auto_now_add=True),
        ),
    ]
