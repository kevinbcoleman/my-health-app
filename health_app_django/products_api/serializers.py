from rest_framework import serializers
from products_api.models import Product

class ProductSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Product
        fields = '__all__'