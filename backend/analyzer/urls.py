from django.urls import path
from .views import analyze_tweet

urlpatterns = [
    path('analyze/', analyze_tweet, name='analyze_tweet'),
]
