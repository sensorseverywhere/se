# -*- coding: utf-8 -*-
# Generated by Django 1.9.8 on 2016-08-14 13:40
from __future__ import unicode_literals

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('project', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='date_added',
            field=models.DateField(default=datetime.datetime(2016, 8, 14, 13, 40, 44, 415257)),
        ),
        migrations.AddField(
            model_name='project',
            name='image',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='project',
            name='description',
            field=models.TextField(blank=True, max_length=2500, null=True),
        ),
        migrations.AlterField(
            model_name='project',
            name='name',
            field=models.CharField(max_length=250, unique=True),
        ),
    ]
