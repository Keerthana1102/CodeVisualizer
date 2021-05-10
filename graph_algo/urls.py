from django.urls import path
from . import views

urlpatterns = [
    path('bfs/',views.bfs, name="bfs"),
    path('dfs/',views.dfs, name="dfs"),
    path('dijkstra/',views.dijkstra, name="dijkstra"),
    path('floyd/',views.floyd, name="floyd"),
    path('kruskal/',views.kruskal, name="kruskal"),
    path('prim/',views.prim, name="prim"),
]