from rest_framework.decorators import api_view
from rest_framework.response import Response
import random

@api_view(['GET', 'POST'])
def TicTacToeView(request):

    if request.method == 'GET':
        board = [" " for _ in range(9)]
        request.session['board'] = board
        return Response({"board": board})

    elif request.method == 'POST':
        board = request.session.get('board', [" " for _ in range(9)])
        index = request.data.get('index')

        if board[int(index)] == " ":
            board[int(index)] = 'X'

        request.session['board'] = board
        return Response({"board": board})
