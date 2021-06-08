from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=32)
    category = models.CharField(max_length=32)
    descr = models.CharField(max_length=500)
