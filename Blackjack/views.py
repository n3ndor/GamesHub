from rest_framework.decorators import api_view
from rest_framework.response import Response
import random


@api_view(['GET', 'POST'])
def BlackjackView(request):
    if request.method == 'POST':
        suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
        ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace']
        suit = random.choice(suits)
        rank = random.choice(ranks)
        card = f"{rank} of {suit}"
        return Response({"card": card})
    return Response({"message": "POST request to get a random card."})
