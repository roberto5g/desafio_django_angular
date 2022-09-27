from rest_framework import serializers
from store.models import Product


class ProductSerializer(serializers.ModelSerializer):
    category_name = serializers.CharField(read_only=True, source='category.name')

    class Meta:
        model = Product
        fields = ['id', 'name', 'price', 'description', 'created', 'category', 'category_name']
