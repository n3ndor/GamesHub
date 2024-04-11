from rest_framework.decorators import api_view
from rest_framework.response import Response
import random
import logging

logger = logging.getLogger(__name__)

@api_view(['POST', 'GET'])
def GuessNumberView(request):
    logger.debug(f"Session Key: {request.session.session_key}")
    if request.method == 'GET':
        number = request.session.get('number', None)
        if not number:
            number = random.randint(1, 100)
            request.session['number'] = number
        return Response({"message": "Guess a number between 1 and 100."})

    if request.method == 'POST':
        user_guess = int(request.data.get("guess"))
        if 'number' not in request.session:
            request.session['number'] = random.randint(1, 100)
        answer = request.session['number']

        logger.debug(f"answer: {answer}")
        if user_guess < answer:
            return Response({"hint": "higher"})
        elif user_guess > answer:
            return Response({"hint": "lower"})
        else:
            request.session.pop('number', None)
            return Response({"hint": f"Correct! The number was {answer}. Start a new game!"})
