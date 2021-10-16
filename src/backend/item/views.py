from .models import Item
from rest_framework import viewsets
from rest_framework import permissions
from .serializers import ItemSerializer

class ItemViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer