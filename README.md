# X-Ray Tweet Analyzer

A modern web application that analyzes tweet replies using sentiment analysis and natural language processing.

## Features

- Tweet reply analysis
- Sentiment analysis (positive/negative/neutral)
- Modern React frontend with Tailwind CSS
- Django REST API backend

## Project Structure

- `/backend` - Django REST API
- `/xray` - React frontend

## Setup

### Backend
```bash
cd backend
python -m venv env
source env/bin/activate  # On Windows: env\Scripts\activate
pip install -r requirements.txt
python manage.py runserver
```

### Frontend
```bash
cd xray
npm install
npm run dev
```

## Technologies

- Frontend: React, TypeScript, Tailwind CSS, Vite
- Backend: Django, TextBlob for sentiment analysis
- API: Twitter API v2
