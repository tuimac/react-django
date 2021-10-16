from django.db import models

class Item(models.Model):
    itemid = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=255)
    volume = models.IntegerField()
    owner = models.CharField(max_length=255)
    class Meta:
        db_table = 'ITEMS'
        managed = False