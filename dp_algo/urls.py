from django.urls import path
from . import views

urlpatterns = [
    path('kmp/',views.kmp, name="kmp"),
    path('knapsack/',views.knapsack, name="knapsack"),
    path('maxsumpath/',views.maxsumpath, name="maxsumpath"),
]