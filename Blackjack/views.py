from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET', 'POST'])
def BlackjackView(request):
    if request.method == 'POST':
        return Response({"message": "POST request received"})
    return Response({"message": "Success!"})
