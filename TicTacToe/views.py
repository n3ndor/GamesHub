from rest_framework.decorators import api_view
from rest_framework.response import Response
import random


def check_winner(board, player):

    win_positions = [                   # this will check:
        (0, 1, 2), (3, 4, 5), (6, 7, 8),  # check horizontal
        (0, 3, 6), (1, 4, 7), (2, 5, 8),  # vertical
        (0, 4, 8), (2, 4, 6)              # diagonals
    ]

    for combo in win_positions:
        if all(board[pos] == player for pos in combo):
            return True
    return False


@api_view(['GET', 'POST'])
def TicTacToeView(request):
    if request.method == 'GET':
        board = [" " for _ in range(9)]
        request.session['board'] = board
        return Response({"board": board, "winner": None})

    elif request.method == 'POST':
        board = request.session.get('board', [" " for _ in range(9)])
        index = request.data.get('index', None)
        winner = None

        if index is not None and board[int(index)] == " ":
            board[int(index)] = 'X'
            if check_winner(board, 'X'):
                winner = 'X'
            else:
                empty_indices = [i for i, x in enumerate(board) if x == " "]
                if empty_indices:
                    opponent_index = random.choice(empty_indices)
                    board[opponent_index] = 'O'
                    if check_winner(board, 'O'):
                        winner = 'O'

        request.session['board'] = board
        return Response({"board": board, "winner": winner})
