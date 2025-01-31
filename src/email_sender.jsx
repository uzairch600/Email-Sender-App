import React, { useState } from 'react';
import axios from 'axios';

const EmailSender = () => {
  const [emailData, setEmailData] = useState({
    subject: '',
    message: '',
    recipient: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmailData({ ...emailData, [name]: value });
  };

  const sendEmail = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/send_email/', emailData);
      alert(response.data.message); // Show success message
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email. Please try again.');
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Send an Email</h2>
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        value={emailData.subject}
        onChange={handleChange}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      <textarea
        name="message"
        placeholder="Message"
        value={emailData.message}
        onChange={handleChange}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      <input
        type="email"
        name="recipient"
        placeholder="Recipient Email"
        value={emailData.recipient}
        onChange={handleChange}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      <button 
        onClick={sendEmail} 
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        Send Email
      </button>
    </div>
  );
};

export default EmailSender;
