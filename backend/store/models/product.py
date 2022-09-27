from django.db import models
from store.models.category import Category


class Product(models.Model):
    name = models.CharField(max_length=250, blank=False, null=False)
    description = models.TextField(blank=False, null=False)
    created = models.DateTimeField(auto_now_add=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['created']
        app_label = 'store'

