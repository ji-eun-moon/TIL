# Generated by Django 3.2.13 on 2022-10-05 13:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0004_comment_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comment',
            name='content',
            field=models.CharField(max_length=200),
        ),
    ]
