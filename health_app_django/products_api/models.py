from django.db import models
# from django.contrib.auth.models import User


class Product(models.Model):
    name = models.CharField(max_length=32)
    category = models.CharField(max_length=32)
    descr = models.CharField(max_length=500)
    # owner = models.ForeignKey(User, 
    # related_name="products", on_delete=models.CASCADE,
    # null=True)
