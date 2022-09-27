from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=250, blank=False, null=False)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['created']
        app_label = 'store'
