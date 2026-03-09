import React, { useState, useEffect } from "react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    number: "",
    message: ""
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [activeField, setActiveField] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [copiedField, setCopiedField] = useState(null);

  // Animation for section entry
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('contact');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleFocus = (field) => {
    setActiveField(field);
  };

  const handleBlur = () => {
    setActiveField(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(false);

    try {
      const response = await fetch("https://formspree.io/f/mayzdowb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formState)
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFormState({
          name: "",
          email: "",
          number: "",
          message: ""
        });

        // Automatically hide success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      } else {
        setSubmitError(true);
      }
    } catch (error) {
      setSubmitError(true);
    }

    setSubmitting(false);
  };

  const handleCopy = async (text, field) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <section
      id="contact"
      className={`relative py-16 md:py-20 w-full overflow-hidden transition-opacity duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'
        }`}
    >
      {/* Background decoration - animated gradient circles */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-[rgba(var(--color-primary),0.1)] to-transparent rounded-full filter blur-3xl transform translate-x-1/4 -translate-y-1/2 opacity-60 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[rgba(var(--color-primary-dark),0.15)] to-transparent rounded-full filter blur-3xl transform -translate-x-1/4 translate-y-1/4 opacity-60 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`relative w-full border-2 border-[rgba(var(--color-background-primary-dark),0.3)] backdrop-blur-sm bg-[rgba(var(--color-background-primary-dark),0.8)] mx-auto rounded-2xl overflow-hidden shadow-[0_0_25px_rgba(var(--color-background-primary-dark),0.2)] transition-all duration-700 ${isVisible ? 'transform-none' : 'transform translate-y-10'
          }`}>
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-[rgba(var(--color-primary),0.03)] rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-[rgba(var(--color-primary),0.05)] rounded-full transform translate-x-1/2 translate-y-1/2"></div>

          {/* Heading with underline effect */}
          <div className="relative text-center pt-10 pb-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[rgb(var(--color-text-primary-light))] to-[rgb(var(--color-text-primary-dark))]">
              Contact Me
            </h2>
            <div className="mx-auto mt-2 h-1 w-16 bg-gradient-to-r from-[rgb(var(--color-primary-dark))] to-[rgb(var(--color-background-primary-dark))] rounded-full"></div>
          </div>

          {/* Main content with staggered animation */}
          <div className="relative flex flex-col md:flex-row w-full px-6 md:px-8 lg:px-12 py-8 gap-12 md:gap-16">
            {/* Get in Touch Section */}
            <div className={`w-full md:w-2/5 transition-all duration-700 delay-300 ${isVisible ? 'transform-none opacity-100' : 'transform -translate-x-10 opacity-0'
              }`}>
              <h3 className="text-xl md:text-2xl text-[rgb(var(--color-text-primary-light))] mb-8 font-medium relative">
                Get in Touch
              </h3>

              <div className="space-y-6">
                {/* Email */}
                <div className="group flex items-center p-4 rounded-xl transition-all duration-300 lg:hover:bg-[rgba(var(--color-background-primary-light),0.6)]">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[rgba(var(--color-background-dark),0.2)] rounded-full transform scale-0 lg:group-hover:scale-125 transition-transform duration-300 opacity-0 group-hover:opacity-100"></div>
                    <a
                      href="mailto:abhi.swame@gmail.com"
                      target="_blank"
                      rel="noreferrer"
                      className="relative inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[rgb(var(--color-background-secondary-dark))] to-[rgb(var(--color-background-secondary-light))] text-[rgb(var(--color-text-secondary-light))] transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[rgba(var(--color-background-secondary-dark),0.4)]"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </a>
                  </div>
                  <div className="ml-4 flex-1 transition-all duration-300 lg:group-hover:translate-x-2">
                    <span className="block text-xs uppercase tracking-wider text-[rgba(var(--color-text-primary-light),0.6)] mb-1">Email</span>
                    <div className="flex items-center gap-2">
                      <a
                        href="mailto:abhi.swame@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm md:text-base text-[rgb(var(--color-text-primary-light))] lg:hover:text-[rgb(var(--color-text-primary-dark))] transition-colors duration-300"
                        id="contact-email"
                      >
                        abhi.swame@gmail.com
                      </a>
                      <button
                        onClick={() => handleCopy('abhi.swame@gmail.com', 'email')}
                        className="p-1 rounded-md lg:hover:bg-[rgba(var(--color-background-primary-light),0.3)] transition-colors duration-200"
                        title="Copy email"
                      >
                        {copiedField === 'email' ? (
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20,6 9,17 4,12"></polyline>
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[rgb(var(--color-text-primary-light))]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                            <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"></path>
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* GitHub */}
                <div className="group flex items-center p-4 rounded-xl transition-all duration-300 lg:hover:bg-[rgba(var(--color-background-primary-light),0.6)]">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[rgba(var(--color-background-dark),0.2)] rounded-full transform scale-0 group-hover:scale-125 transition-transform duration-300 opacity-0 group-hover:opacity-100"></div>
                    <a
                      href="https://github.com/abhi-swami"
                      target="_blank"
                      rel="noreferrer"
                      className="relative inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[rgb(var(--color-background-secondary-dark))] to-[rgb(var(--color-background-secondary-light))] text-[rgb(var(--color-text-secondary-light))] transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[rgba(var(--color-background-secondary-dark),0.4)]"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  </div>
                  <div className="ml-4 transition-all duration-300 lg:group-hover:translate-x-2">
                    <span className="block text-xs uppercase tracking-wider text-[rgba(var(--color-text-primary-light),0.6)] mb-1">GitHub</span>
                    <a
                      href="https://github.com/abhi-swami"
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm md:text-base text-[rgb(var(--color-text-primary-light))] hover:text-[rgb(var(--color-text-primary-dark))] transition-colors duration-300"
                      id="contact-github"
                    >
                      abhi-swami
                    </a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="group flex items-center p-4 rounded-xl transition-all duration-300 lg:hover:bg-[rgba(var(--color-background-primary-light),0.6)]">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[rgba(var(--color-background-dark),0.2)] rounded-full transform scale-0 group-hover:scale-125 transition-transform duration-300 opacity-0 group-hover:opacity-100"></div>
                    <a
                      href="https://www.linkedin.com/in/abhi-swami/"
                      target="_blank"
                      rel="noreferrer"
                      className="relative inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[rgb(var(--color-background-secondary-dark))] to-[rgb(var(--color-background-secondary-light))] text-[rgb(var(--color-text-secondary-light))] transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[rgba(var(--color-background-secondary-dark),0.4)]"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  </div>
                  <div className="ml-4 transition-all duration-300 lg:group-hover:translate-x-2">
                    <span className="block text-xs uppercase tracking-wider text-[rgba(var(--color-text-primary-light),0.6)] mb-1">LinkedIn</span>
                    <a
                      href="https://www.linkedin.com/in/abhi-swami/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm md:text-base text-[rgb(var(--color-text-primary-light))] hover:text-[rgb(var(--color-text-primary-dark))] transition-colors duration-300"
                      id="contact-linkedin"
                    >
                      abhishek-swami
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="group flex items-center p-4 rounded-xl transition-all duration-300 lg:hover:bg-[rgba(var(--color-background-primary-light),0.6)]">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[rgba(var(--color-background-dark),0.2)] rounded-full transform scale-0 lg:group-hover:scale-125 transition-transform duration-300 opacity-0 group-hover:opacity-100"></div>
                    <a
                      href="tel:+917996133571"
                      className="relative inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[rgb(var(--color-background-secondary-dark))] to-[rgb(var(--color-background-secondary-light))] text-[rgb(var(--color-text-secondary-light))] transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[rgba(var(--color-background-secondary-dark),0.4)]"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path>
                      </svg>
                    </a>
                  </div>
                  <div className="ml-4 flex-1 transition-all duration-300 lg:group-hover:translate-x-2">
                    <span className="block text-xs uppercase tracking-wider text-[rgba(var(--color-text-primary-light),0.6)] mb-1">Phone</span>
                    <div className="flex items-center gap-2">
                      <a
                        href="tel:+917996133571"
                        className="text-sm md:text-base text-[rgb(var(--color-text-primary-light))] lg:hover:text-[rgb(var(--color-text-primary-dark))] transition-colors duration-300"
                        id="contact-phone"
                      >
                        +91 7996133571
                      </a>
                      <button
                        onClick={() => handleCopy('+917996133571', 'phone')}
                        className="p-1 rounded-md lg:hover:bg-[rgba(var(--color-background-primary-light),0.3)] transition-colors duration-200"
                        title="Copy phone"
                      >
                        {copiedField === 'phone' ? (
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20,6 9,17 4,12"></polyline>
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[rgb(var(--color-text-primary-light))]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                            <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"></path>
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Message Form Section */}
            <div className={`relative w-full md:w-3/5 transition-all duration-700 delay-500 ${isVisible ? 'transform-none opacity-100' : 'transform translate-y-10 opacity-0'
              }`}>
              <div className="absolute top-0 right-0 w-20 h-20 bg-[rgba(var(--color-background-primary-light),0.1)] rounded-full transform translate-x-1/2 -translate-y-1/2"></div>

              <h3 className="text-xl md:text-2xl text-[rgb(var(--color-text-primary-light))] mb-8 font-medium relative">
                Message Me
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative w-full group">
                    <input
                      type="text"
                      name="name"
                      placeholder=" "
                      value={formState.name}
                      onChange={handleChange}
                      onFocus={() => handleFocus('name')}
                      onBlur={handleBlur}
                      required
                      className="peer w-full px-4 pt-6 pb-2 bg-[rgba(var(--color-background-primary-light),0.1)] border-b-2 border-[rgba(var(--color-background-secondary-dark),0.3)] rounded-t-lg focus:outline-none focus:border-[rgb(var(--color-background-secondary-light))] text-[rgb(var(--color-text-primary-light))] transition-all duration-300"
                    />
                    <label className={`absolute left-4 transition-all duration-300 ${formState.name
                      ? 'top-2 text-xs text-[rgb(var(--color-text-primary-dark))]'
                      : 'top-4 text-base text-[rgba(var(--color-text-primary-light),0.6)]'
                      } peer-focus:top-2 peer-focus:text-xs peer-focus:text-[rgb(var(--color-text-primary-dark))]`}>
                      Name
                    </label>
                  </div>

                  <div className="relative w-full group">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder=" "
                      value={formState.email}
                      onChange={handleChange}
                      onFocus={() => handleFocus('email')}
                      onBlur={handleBlur}
                      required
                      className="peer w-full px-4 pt-6 pb-2 bg-[rgba(var(--color-background-primary-light),0.1)] border-b-2 border-[rgba(var(--color-background-secondary-dark),0.3)] rounded-t-lg focus:outline-none focus:border-[rgb(var(--color-background-secondary-light))] text-[rgb(var(--color-text-primary-light))] transition-all duration-300"
                    />
                    <label className={`absolute left-4 transition-all duration-300 ${formState.email
                      ? 'top-2 text-xs text-[rgb(var(--color-text-primary-dark))]'
                      : 'top-4 text-base text-[rgba(var(--color-text-primary-light),0.6)]'
                      } peer-focus:top-2 peer-focus:text-xs peer-focus:text-[rgb(var(--color-text-primary-dark))]`}>
                      Email
                    </label>

                  </div>
                </div>

                <div className="relative w-full group">
                  <input
                    type="tel"
                    name="number"
                    placeholder=" "
                    value={formState.number}
                    onChange={handleChange}
                    onFocus={() => handleFocus('number')}
                    onBlur={handleBlur}
                    className="peer w-full px-4 pt-6 pb-2 bg-[rgba(var(--color-background-primary-light),0.1)] border-b-2 border-[rgba(var(--color-background-secondary-dark),0.3)] rounded-t-lg focus:outline-none focus:border-[rgb(var(--color-background-secondary-light))] text-[rgb(var(--color-text-primary-light))] transition-all duration-300"
                  />
                  <label className={`absolute left-4 transition-all duration-300 ${formState.number
                    ? 'top-2 text-xs text-[rgb(var(--color-text-primary-dark))]'
                    : 'top-4 text-base text-[rgba(var(--color-text-primary-light),0.6)]'
                    } peer-focus:top-2 peer-focus:text-xs peer-focus:text-[rgb(var(--color-text-primary-dark))]`}>
                    Mobile Number (Optional)
                  </label>

                </div>

                <div className="relative w-full group">
                  <textarea
                    name="message"
                    id="message"
                    placeholder=" "
                    value={formState.message}
                    onChange={handleChange}
                    onFocus={() => handleFocus('message')}
                    onBlur={handleBlur}
                    required
                    rows="4"
                    className="peer w-full px-4 pt-6 pb-2 bg-[rgba(var(--color-background-primary-light),0.1)] border-b-2 border-[rgba(var(--color-background-secondary-dark),0.3)] rounded-t-lg focus:outline-none focus:border-[rgb(var(--color-background-secondary-light))] text-[rgb(var(--color-text-primary-light))] transition-all duration-300 resize-none"
                  ></textarea>
                  <label className={`absolute left-4 transition-all duration-300 ${formState.message
                    ? 'top-2 text-xs text-[rgb(var(--color-text-primary-dark))]'
                    : 'top-4 text-base text-[rgba(var(--color-text-primary-light),0.6)]'
                    } peer-focus:top-2 peer-focus:text-xs peer-focus:text-[rgb(var(--color-text-primary-dark))]`}>
                    Message
                  </label>

                </div>

                <div className="flex justify-center pt-4">
                  <button
                    type="submit"
                    disabled={submitting}
                    className={`group relative overflow-hidden px-8 py-3 rounded-full bg-gradient-to-r from-[rgb(var(--color-background-secondary-dark))] to-[rgb(var(--color-background-secondary-light))] text-[rgb(var(--color-text-secondary-dark))] font-medium shadow-md hover:shadow-lg hover:shadow-[rgba(var(--color-background-secondary-dark),0.4)] focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-background-secondary-light))] focus:ring-offset-2 focus:ring-offset-[rgb(var(--color-background-primary-dark))] transition-all duration-300 ${submitting ? "opacity-70 cursor-not-allowed" : ""
                      }`}
                  >
                    <span className="relative z-10 flex items-center">
                      {submitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-[rgb(var(--color-text-secondary-dark))]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </>
                      )}
                    </span>
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[rgb(var(--color-background-secondary-light))] to-[rgb(var(--color-background-secondary-dark))] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
                  </button>
                </div>

                {/* Animated success message */}
                {submitSuccess && (
                  <div className="relative overflow-hidden px-4 py-3 rounded-lg bg-[rgba(var(--color-background-secondary-light),0.1)] border border-[rgba(var(--color-background-secondary-dark),0.3)] text-center animate-in fade-in slide-in-from-bottom duration-500">
                    <div className="flex items-center justify-center">
                      <svg className="w-5 h-5 mr-2 text-[rgb(var(--color-background-secondary-dark))]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-[rgb(var(--color-text-primary-dark))] font-medium">Message sent successfully!</span>
                    </div>
                    <span className="block text-xs mt-1 text-[rgba(var(--color-text-primary-light),0.8)]">I'll get back to you soon</span>

                    {/* Progress bar showing auto-dismiss */}
                    <div className="absolute bottom-0 left-0 h-0.5 w-full bg-[rgba(var(--color-background-primary-light),0.2)]">
                      <div className="h-full bg-[rgb(var(--color-background-secondary-dark))] animate-[shrink_5s_linear_forwards]"></div>
                    </div>
                  </div>
                )}

                {submitError && (
                  <div className="px-4 py-3 rounded-lg bg-red-50 border border-red-200 text-red-500 text-center animate-in fade-in slide-in-from-bottom duration-500">
                    <div className="flex items-center justify-center">
                      <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span>Something went wrong. Please try again.</span>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Add keyframes for the shrink animation */}
      <style jsx>{`
        @keyframes shrink {
          0% { width: 100%; }
          100% { width: 0%; }
        }
        @keyframes animate-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}