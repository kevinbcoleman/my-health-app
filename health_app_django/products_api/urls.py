from django.urls import path 
from . import views



urlpatterns = [
    path('users/login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    
    path('users/register/', views.registerUser, name='register'),

    path('users/profile/', views.getUserProfile, name='user_profile'),

    path('products', views.ProductList.as_view(), name='product_list'),

    path('products/<int:pk>', views.ProductDetail.as_view(), name='product_detail'),
 ]