from django.urls import path
from . import views

urlpatterns = [
    path('egyptian/',views.egyptian, name="egyptian"),
    path('fknapsack/',views.fknapsack, name="fknapsack"),
    path('huffman/',views.huffman, name="huffman"),
    path('jobscheduling/',views.jobscheduling, name="jobscheduling"),
    path('largestlexicographicarray/',views.largestlexicographicarray, name="largestlexicographicarray"),
    path('miceholes/',views.miceholes, name="miceholes"),
]