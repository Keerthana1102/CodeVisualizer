from django.shortcuts import render

# Create your views here.
def kmp(request):
    return render(request,'dp_algo/KMP.html')

def knapsack(request):
    return render(request,'dp_algo/Knapsack.html')

def maxsumpath(request):
    return render(request,'dp_algo/MaxSumPath.html')