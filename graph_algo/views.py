from django.shortcuts import render

# Create your views here.
def bfs(request):
    return render(request,'graph_algo/BFS.html')

def dfs(request):
    return render(request,'graph_algo/DFS.html')

def kruskal(request):
    return render(request,'graph_algo/Kruskal.html')

def prim(request):
    return render(request,'graph_algo/Prim.html')

def floyd(request):
    return render(request,'graph_algo/Floyd.html')

def dijkstra(request):
    return render(request,'graph_algo/Dijkstra.html')