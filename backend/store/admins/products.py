from django.contrib import admin
from store.models import Product


class Products(admin.ModelAdmin):
    list_display = ('id', 'name', 'category',)
    list_display_links = ('id', 'name')
    search_fields = ('name', )
    list_per_page = 20


admin.site.register(Product, Products)
