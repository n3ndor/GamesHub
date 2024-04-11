from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def TicTacToeView(request):
    if request.method == 'GET':
        board = [" " for _ in range(9)]
        return Response({"board": board})
