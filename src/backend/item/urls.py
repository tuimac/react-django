from django.urls import path
from .views import ItemList
from .views import ItemSearch

urlpatterns = [
    path('list', ItemList.as_view()),
    path('search&<str:name>', ItemSearch.as_view())
]