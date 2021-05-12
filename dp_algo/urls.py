from django.urls import path
from . import views

urlpatterns = [
    path('integerpartition/',views.integerpartition, name="integerpartition"),
    path('longestpallindrome/',views.longestpallindrome,name="longestpallindrome"),
    path('shortestcommonsuperseq/',views.shortestcommonsuperseq,name="shortestcommonsuperseq"),
    path('kmp/',views.kmp, name="kmp"),
    path('knapsack/',views.knapsack, name="knapsack"),
    path('maxsumpath/',views.maxsumpath, name="maxsumpath"),
]