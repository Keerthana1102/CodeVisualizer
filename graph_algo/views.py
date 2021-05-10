from django.shortcuts import render

# Create your views here.
def bfs(request):
    return render(request,'graph_algo/bfs.html')

def dfs(request):
    return render(request,'graph_algo/dfs.html')

def kruskal(request):
    return render(request,'graph_algo/kruskal.html')

def prim(request):
    return render(request,'graph_algo/prim.html')

def floyd(request):
    return render(request,'graph_algo/floyd.html')

def dijkstra(request):
    return render(request,'graph_algo/dijkstra.html')