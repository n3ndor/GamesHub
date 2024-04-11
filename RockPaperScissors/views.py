from rest_framework.decorators import api_view
from rest_framework.response import Response
import random

@api_view(['POST'])
def RockPaperScissorsView(request):
    choices = ["rock", "paper", "scissors"]
    user_choice = request.data.get("user_choice")
    server_choice = random.choice(choices)

    if user_choice not in choices:
        return Response({"error": "Invalid choice."}, status=400)

    if user_choice == server_choice:
        result = "Try again, it's draw!"
    elif (user_choice == "rock" and server_choice == "scissors") or \
        (user_choice == "paper" and server_choice == "rock") or \
        (user_choice == "scissors" and server_choice == "paper"):
        result = "You are the winner! Congratulation."
    else:
        result = "You lost this time, try again!"
    return Response({
        "message": "Welcome to Rock Paper Scissors Game!",
        "your_choice": user_choice,
        "server_choice": server_choice,
        "result": result
    })
