from django.shortcuts import render

# Create your views here.
def miceholes(request):
    return render(request,'greedy_algo/miceholes.html')

def fknapsack(request):
    return render(request,'greedy_algo/fknapsack.html')

def huffman(request):
    return render(request,'greedy_algo/huffman.html')

def jobscheduling(request):
    return render(request,'greedy_algo/jobscheduling.html')

def egyptian(request):
    return render(request,'greedy_algo/egyptian.html')

def largestlexicographicarray(request):
    return render(request,'greedy_algo/largestlexicographicarray.html')