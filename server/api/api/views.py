from django.http import HttpResponse
import json

def email_query_response(request):
    print(request.body)
    obj = json.loads(request.body)
    print(obj['email'])
    response = HttpResponse(request)
    return response