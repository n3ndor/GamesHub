"""
URL configuration for GamesHub project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path

from .view import GamesListView
from RockPaperScissors.views import RockPaperScissorsView
from GuessNumber.views import GuessNumberView
from TicTacToe.views import TicTacToeView


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/games/', GamesListView.as_view()),
    path('rockpaperscissors/', RockPaperScissorsView, name='Rock Paper Scissors'),
    path('guessnumber/', GuessNumberView, name='Guess Number'),
    path('tictactoe/', TicTacToeView, name='Tic Tac Toe'),
]
