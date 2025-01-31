import React from 'react';
import EmailSender from "./email_sender";
import EmailList from "./email_list"; // Example component for listing emails
import EmailStatistics from "./email_statistics"; // Example component for statistics

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navbar */}
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold">Email Automation</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#send" className="hover:underline">Send Email</a></li>
              <li><a href="#list" className="hover:underline">Email List</a></li>
              <li><a href="#stats" className="hover:underline">Statistics</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto flex-1 p-6">
        {/* Email Sender Section */}
        <section id="send" className="mb-8">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">Send Email</h2>
            <EmailSender />
          </div>
        </section>

        {/* Email List Section */}
        <section id="list" className="mb-8">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">Email List</h2>
            <EmailList />
          </div>
        </section>

        {/* Statistics Section */}
        <section id="stats">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">Email Statistics</h2>
            <EmailStatistics />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-4">
        <div className="container mx-auto text-center">
          <p>© 2025 Email Automation. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
