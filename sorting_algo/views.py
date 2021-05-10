from django.shortcuts import render

# Create your views here.
def bucketsort(request):
    return render(request, 'sorting_algo/bucketsort.html')

def radixsort(request):
    return render(request, 'sorting_algo/Radixsort.html')

def quicksort(request):
    return render(request, 'sorting_algo/QuickSortAlgorithm.html')

def insertionsort(request):
    return render(request, 'sorting_algo/Insertionsort.html')

def selectionsort(request):
    return render(request, 'sorting_algo/selection_sort.html')