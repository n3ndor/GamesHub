from django.urls import get_resolver
from rest_framework.views import APIView
from rest_framework.response import Response

class GamesListView(APIView):
    def get(self, request):
        games = []
        for urlpattern in get_resolver().url_patterns:
            if hasattr(urlpattern, 'name') and urlpattern.name:
                games.append({"name": urlpattern.name, "url": "/" + urlpattern.pattern._route})
        return Response(games)
