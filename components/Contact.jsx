// components/Contact.js
'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitted: false, submitting: true, success: false, error: null });

    // This is where you would normally send the form data to your backend
    // For demo purposes, we'll just simulate a successful submission
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setStatus({ submitted: true, submitting: false, success: true, error: null });
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus(prev => ({ ...prev, success: false, submitted: false }));
      }, 5000);
    } catch (error) {
      setStatus({ submitted: true, submitting: false, success: false, error: error.message });
    }
  };

  return (
    <section id="contact" className="py-20 bg-secondary-50 dark:bg-secondary-900">
      <div className="container-custom">
        <h2 className="section-title text-center">Contact Me</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-white dark:bg-secondary-800 rounded-lg shadow-lg p-8">
            {status.success ? (
              <div className="bg-green-100 dark:bg-green-900 border border-green-400 dark:border-green-600 text-green-700 dark:text-green-200 px-4 py-3 rounded mb-6" role="alert">
                <p>Your message has been sent successfully! I'll get back to you soon.</p>
              </div>
            ) : status.error ? (
              <div className="bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-600 text-red-700 dark:text-red-200 px-4 py-3 rounded mb-6" role="alert">
                <p>There was an error sending your message. Please try again later.</p>
              </div>
            ) : null}
            
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-secondary-700 dark:text-secondary-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white dark:bg-secondary-700 border-secondary-300 dark:border-secondary-600"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-secondary-700 dark:text-secondary-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white dark:bg-secondary-700 border-secondary-300 dark:border-secondary-600"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-secondary-700 dark:text-secondary-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white dark:bg-secondary-700 border-secondary-300 dark:border-secondary-600"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={status.submitting}
                className="btn-primary w-full flex justify-center items-center disabled:opacity-70"
              >
                {status.submitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : "Send Message"}
              </button>
            </form>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <a href="mailto:youremail@example.com" className="flex items-center justify-center md:justify-start text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300">
                <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                youremail@example.com
              </a>
              
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300">
                <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                github.com/yourusername
              </a>
              
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300">
                <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                linkedin.com/in/yourusername
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}