from django.shortcuts import render
from rest_framework import generics, permissions ##mr
from .serializers import ProductSerializer
from .models import Product
# Create your views here.

class ProductList(generics.ListCreateAPIView):
    queryset = Product.objects.all().order_by('id')
    serializer_class = ProductSerializer
    ##maybe remove
    permission_classes = [
      permissions.AllowAny
    ]

class ProductDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all().order_by('id')
    serializer_class = ProductSerializer
    permission_classes = [
      permissions.AllowAny
    ]
