from textblob import TextBlob
import json
import snscrape.modules.twitter as sntwitter
from django.http import JsonResponse
import re

@csrf_exempt
def analyze_tweet(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            tweet_url = data.get('tweetUrl')

            if not tweet_url:
                return JsonResponse({'error': 'Tweet URL is required'}, status=400)

            # Extract tweet ID
            tweet_id_match = re.search(r'/status/(\d+)', tweet_url)
            if not tweet_id_match:
                return JsonResponse({'error': 'Invalid Tweet URL'}, status=400)

            tweet_id = tweet_id_match.group(1)

            # Scrape replies
            query = f'conversation_id:{tweet_id}'
            replies = []
            for i, tweet in enumerate(sntwitter.TwitterSearchScraper(query).get_items()):
                if i >= 30:  # Limit to 30 replies
                    break
                replies.append(tweet.content)

            # Analyze sentiment of each reply
            sentiments = {'positive': 0, 'negative': 0, 'neutral': 0}

            for reply in replies:
                analysis = TextBlob(reply)
                sentiment = analysis.sentiment.polarity  # Get polarity score

                if sentiment > 0:
                    sentiments['positive'] += 1
                elif sentiment < 0:
                    sentiments['negative'] += 1
                else:
                    sentiments['neutral'] += 1

            # Example summary of analysis
            total_replies = len(replies)
            summary = f"Analyzed {total_replies} replies. {sentiments['positive']} positive, {sentiments['negative']} negative, {sentiments['neutral']} neutral."

            return JsonResponse({
                "summary": summary,
                "replies": replies,
                "sentiment_analysis": sentiments,
            })

        except Exception as e:
            return JsonResponse({'error': 'Something went wrong.'}, status=500)

    return JsonResponse({'error': 'Invalid request method'}, status=405)
