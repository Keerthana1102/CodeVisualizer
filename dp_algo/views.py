from django.shortcuts import render

# Create your views here.
def integerpartition(request):
    return render(request,'dp_algo/IntegerPartition.html')

def longestpallindrome(request):
    return render(request,'dp_algo/LongestPalindromeSubsq.html')

def shortestcommonsuperseq(request):
    return render(request,'dp_algo/ShortestCommonSupersequence.html')

def kmp(request):
    return render(request,'dp_algo/KMP.html')

def knapsack(request):
    return render(request,'dp_algo/Knapsack.html')

def maxsumpath(request):
    return render(request,'dp_algo/MaxSumPath.html')