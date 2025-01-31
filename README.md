Email Sender App
Overview
A full-stack app built with React (frontend) and Django (backend) to send emails via SMTP services like Gmail.

Features
React Frontend: Intuitive UI for composing emails.

Django Backend: Handles email sending via SMTP.

SMTP Integration: Supports Gmail and other SMTP servers.

Secure: Protects sensitive credentials.

Installation
bash
Copy
# Clone the repo  
git clone https://github.com/uzairch600/Email-Sender-App.git  
cd Email-Sender-App  

# Backend setup  
cd backend  
pip install -r requirements.txt  
python manage.py migrate  

# Configure SMTP in settings.py:  
# EMAIL_HOST = 'smtp.gmail.com'  
# EMAIL_PORT = 587  
# EMAIL_USE_TLS = True  
# EMAIL_HOST_USER = 'your-email@gmail.com'  
# EMAIL_HOST_PASSWORD = 'your-app-password'  

# Frontend setup  
cd ../frontend  
npm install  

# Run servers  
cd ../backend  
python manage.py runserver  
cd ../frontend  
npm start  
Configuration
Update settings.py with your SMTP credentials.

For Gmail, enable "Less secure apps" or use an App Password.

Security Tips
Never hardcode credentials. Use environment variables.

Rotate credentials if exposed.

Troubleshooting
CORS Issues: Configure django-cors-headers.

SMTP Errors: Verify credentials and server settings.

Contributions
Contributions are welcome! Fork the repo, create a branch, and submit a PR.

