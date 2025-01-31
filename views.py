from rest_framework.views import APIView
from rest_framework.response import Response
from django.core.mail import send_mail
from django.conf import settings

class SendEmailView(APIView):    
    def post(self, request):
        subject = request.data.get('subject')
        message = request.data.get('message')
        recipient = request.data.get('recipient')
        sender = settings.EMAIL_HOST_USER  # Use the configured sender email from settings.py

        # Log received data for debugging
        print(f"Subject: {subject}, Message: {message}, Recipient: {recipient}")

        if not subject or not message or not recipient:
            return Response({'error': 'Missing required fields: subject, message, or recipient.'}, status=400)

        try:
            send_mail(subject, message, sender, [recipient])
            return Response({'message': 'Email sent successfully!'})
        except Exception as e:
            # Log any exception for further debugging
            print(f"Error sending email: {e}")
            return Response({'error': str(e)}, status=500)  # Handle errors
