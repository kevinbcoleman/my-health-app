from rest_framework import serializers
from products_api.models import Product
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken

class ProductSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Product
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    ##MR
    name = serializers.SerializerMethodField(read_only=True)
    _id = serializers.SerializerMethodField(read_only=True)
    class Meta: 
        model = User
        fields = ['id', '_id', 'username', 'email', 'name',]

    def get__id(self, obj):
        return obj.id
    
    def get_name(self, obj):
        name = obj.first_name
        ##MR
        if name == '':
            name = obj.email
        return name

class UserSerializerWithToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = User
        fields = ['id', '_id', 'username', 'email', 'name', 'token']
    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)
    