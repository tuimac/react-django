import logging
from .models import Item
from django.core import serializers
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.renderers import JSONRenderer

logger = logging.getLogger("django")

class ItemList(generics.ListAPIView):
    
    renderer_classes = [JSONRenderer]

    def get(self, request, format=None):
        queryset = Item.objects.all()
        response = serializers.serialize('json', queryset)
        return Response(response)

class ItemSearch(generics.ListAPIView):
    
    renderer_classes = [JSONRenderer]

    def get(self, request, *args, **kwargs):
        queryset = Item.objects.all()
        logger.info(request.GET.get('name'))
        response = serializers.serialize('json', queryset)
        return Response(response)