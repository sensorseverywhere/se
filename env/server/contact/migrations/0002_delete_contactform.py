# -*- coding: utf-8 -*-
# Generated by Django 1.9.8 on 2016-07-29 01:21
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('contact', '0001_initial'),
    ]

    operations = [
        migrations.DeleteModel(
            name='ContactForm',
        ),
    ]
