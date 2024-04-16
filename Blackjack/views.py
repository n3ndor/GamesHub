from rest_framework.decorators import api_view
from rest_framework.response import Response
import random

def get_random_card():
    suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
    ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace']
    suit = random.choice(suits)
    rank = random.choice(ranks)
    return f"{rank} of {suit}"


@api_view(['GET', 'POST'])
def BlackjackView(request):
    if request.method == 'POST':
        card_one = get_random_card()
        card_two = get_random_card()
        return Response({"card": [card_one, card_two]})
    return Response({"message": "POST request to get a random card."})
