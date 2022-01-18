from django.http import JsonResponse
import json
import requests
import environ

env = environ.Env()
environ.Env.read_env()


def email_query_response(request):
    obj = json.loads(request.body)
    response = requests.post(
        "https://api.mailgun.net/v3/philburney.com/messages",
        auth=("api", str(env("MAILGUN_API_KEY"))),
        data={
            "from": "[IMPORTANT] <emailmessage@philburney.com>",
            "to": ["peburney@gmail.com"],
            "subject": str(obj["subject"]),
            "text": str(obj["message"])
            + "\nThis message came from: "
            + str(obj["email"]),
        },
    )

    returnThis = JsonResponse(obj)
    returnThis.status_code = response.status_code
    return returnThis
