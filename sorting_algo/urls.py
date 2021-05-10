from django.urls import path
from . import views

urlpatterns = [
    path('bucketsort/',views.bucketsort, name="bucketsort"),
    path('insertionsort/',views.insertionsort, name="insertionsort"),
    path('quicksort/',views.quicksort, name="quicksort"),
    path('radixsort/',views.radixsort, name="radixsort"),
    path('selectionsort/',views.selectionsort, name="selectionsort"),
]