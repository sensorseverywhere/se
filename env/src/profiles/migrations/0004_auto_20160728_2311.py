# -*- coding: utf-8 -*-
# Generated by Django 1.9.8 on 2016-07-28 23:11
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0003_profiles_role'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Profiles',
            new_name='Profile',
        ),
    ]
