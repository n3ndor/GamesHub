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
        index = request.data.get('index', None)

        if index is not None and board[int(index)] == " ":
            board[int(index)] = 'X'

            empty_indices = [i for i, x in enumerate(board) if x == " "]
            if empty_indices:
                opponent_index = random.choice(empty_indices)
                board[opponent_index] = 'O'

        request.session['board'] = board
        return Response({"board": board})
