from django.db import models

class Item(models.Model):
    name = models.CharField(max_length=255)
    volume = models.IntegerField()
    owner = models.CharField(max_length=255)