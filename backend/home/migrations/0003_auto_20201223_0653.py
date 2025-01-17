# Generated by Django 2.2.17 on 2020-12-23 06:53

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ("home", "0002_load_initial_data"),
    ]

    operations = [
        migrations.AddField(
            model_name="customtext",
            name="ghfghfgh",
            field=models.OneToOneField(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.SET_NULL,
                related_name="customtext_ghfghfgh",
                to=settings.AUTH_USER_MODEL,
            ),
        ),
        migrations.AddField(
            model_name="customtext",
            name="hg",
            field=models.GenericIPAddressField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name="customtext",
            name="title",
            field=models.CharField(blank=True, max_length=150),
        ),
    ]
