from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.front, name="front"),
    path('sorting_algo/',include('sorting_algo.urls')),
    path('greedy_algo/',include('greedy_algo.urls')),
    path('graph_algo/',include('graph_algo.urls')),
    path('dp_algo/',include('dp_algo.urls')),
]