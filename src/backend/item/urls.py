from django.urls import path
from .views import ItemViewSet

urlpatterns = [
    path('', ItemViewSet)
]