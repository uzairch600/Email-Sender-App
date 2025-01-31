from django.urls import path
from .views import SendEmailView

urlpatterns = [
    path('api/send_email/', SendEmailView.as_view(), name='send_email'),  # New endpoint for stats
]
