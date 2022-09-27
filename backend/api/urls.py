from django.contrib import admin
from django.urls import path, include
from store.views import ProductsViewSet, CategoriesViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register('products', ProductsViewSet, basename='products')
router.register('categories', CategoriesViewSet, basename='categories')

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", include(router.urls)),
]
