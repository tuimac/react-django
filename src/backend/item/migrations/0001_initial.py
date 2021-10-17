# Generated by Django 3.2.8 on 2021-10-16 08:03

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Item',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=255)),
                ('volume', models.IntegerField()),
                ('owner', models.CharField(max_length=255)),
            ],
            options={
                'db_table': 'ITEMS',
            },
        ),
    ]