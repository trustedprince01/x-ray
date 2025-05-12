from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
import requests
import json

# Replace these with your actual values
APIFY_API_KEY = "apify_api_2ImNdCoNuYYIiUCRE7OpcIp2wo0JOW0fBuct"
ACTOR_ID = "quacker/twitter-scraper"

@csrf_exempt
def analyze_tweet(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            tweet_url = data.get("tweetUrl")
        except json.JSONDecodeError:
            return JsonResponse({"error": "Invalid JSON"}, status=400)
    else:
        tweet_url = request.GET.get("url")

    if not tweet_url:
        return JsonResponse({"error": "Tweet URL is required"}, status=400)

    # Apify URL to trigger actor run
    start_run_url = f"https://api.apify.com/v2/actor-tasks/{ACTOR_ID}/run-sync-get-dataset-items?token={APIFY_API_KEY}"

    # Request payload
    payload = {
        "mode": "replies",
        "startUrls": [{"url": tweet_url}],
        "maxTweets": 20
    }

    try:
        response = requests.post(start_run_url, json=payload)
        response.raise_for_status()
        data = response.json()

        # Directly return the comments from Apify
        return JsonResponse({
            "comments": [item.get('text', '') for item in data.get('data', [])]
        })

    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)
