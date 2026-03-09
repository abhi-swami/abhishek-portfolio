import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const touchStartY = useRef(0);
  const [activeLinkIndex, setActiveLinkIndex] = useState(null);
  
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('nav') && !event.target.closest('.mobile-menu')) {
        setIsMenuOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);
  
  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  // Haptic feedback for mobile
  const triggerHaptic = () => {
    if (typeof window !== 'undefined' && navigator.vibrate) {
      navigator.vibrate(10);
    }
  };

  // Handle touch start on menu
  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
  };

  // Handle touch end to detect swipe up to close
  const handleTouchEnd = (e) => {
    const touchEndY = e.changedTouches[0].clientY;
    const difference = touchStartY.current - touchEndY;

    // Swipe up to close (50px threshold)
    if (difference > 50 && isMenuOpen) {
      triggerHaptic();
      setIsMenuOpen(false);
    }
  };

  // Handle link click with haptic feedback
  const handleLinkClick = () => {
    triggerHaptic();
    setIsMenuOpen(false);
  };

  // Handle hamburger button press
  const handleMenuToggle = () => {
    triggerHaptic();
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className={`w-full py-3 xs:py-4 sm:py-5 md:py-6 px-3 xs:px-4 sm:px-6 md:px-8 relative z-60 ${isMenuOpen ? 'bg-[rgb(var(--color-background-primary-light))]' : ''}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-lg xs:text-xl sm:text-xl md:text-2xl font-bold tracking-wider">
            abhishek
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <div className="flex space-x-4 sm:space-x-5 md:space-x-6">
              {/* GitHub */}
              <a 
                href="https://github.com/abhi-swami" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[rgb(var(--color-primary))] transition-colors"
                aria-label="GitHub Profile"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 md:h-6 md:w-6" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              
              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/abhi-swami/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[rgb(var(--color-primary))] transition-colors"
                aria-label="LinkedIn Profile"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 md:h-6 md:w-6" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                </svg>
              </a>
              
              {/* Twitter */}
              {/* <a 
                href="https://twitter.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[rgb(var(--color-primary))] transition-colors"
                aria-label="Twitter Profile"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 md:h-6 md:w-6" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a> */}
            </div>
          </div>

          {/* Four-dot Hamburger Button */}
          <button 
            onClick={handleMenuToggle}
            className="md:hidden flex items-center justify-center p-2 focus:outline-none bg-[rgb(var(--color-card))] rounded-lg w-10 h-10 z-50 active:scale-95 transition-transform duration-150 touch-none"
            aria-label="Toggle menu"
          >
            <div className={`grid grid-cols-2 gap-1 transition-transform duration-500 ${isMenuOpen ? 'rotate-90' : ''}`}>
              <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu - Full Width Sliding from Top */}
      <div 
        ref={menuRef}
        className={`mobile-menu fixed top-15 left-0 right-0 bottom-0 w-full bg-[rgb(var(--color-background-primary-light))] md:hidden z-60 transform transition-all duration-600 linear ${
          isMenuOpen 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-[-150%] opacity-0'
        }`}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="pt-12 pb-6 px-6 h-full flex flex-col justify-between">
          {/* Menu Links */}
          <div className="flex flex-col space-y-3">
            <a 
              href="#projects" 
              className="text-lg font-medium hover:text-[rgb(var(--color-primary))] active:bg-[rgba(var(--color-primary),0.1)] transition-all flex justify-between items-center px-4 py-3 rounded-lg active:scale-95 duration-150 touch-none select-none"
              onClick={handleLinkClick}
            >
              Projects
            </a>
            <a 
              href="#skills" 
              className="text-lg font-medium hover:text-[rgb(var(--color-primary))] active:bg-[rgba(var(--color-primary),0.1)] transition-all flex justify-between items-center px-4 py-3 rounded-lg active:scale-95 duration-150 touch-none select-none"
              onClick={handleLinkClick}
            >
              Skills
            </a>
            <a 
              href="#about" 
              className="text-lg font-medium hover:text-[rgb(var(--color-primary))] active:bg-[rgba(var(--color-primary),0.1)] transition-all flex justify-between items-center px-4 py-3 rounded-lg active:scale-95 duration-150 touch-none select-none"
              onClick={handleLinkClick}
            >
              About
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a 
              href="#contact" 
              className="text-lg font-medium hover:text-[rgb(var(--color-primary))] active:bg-[rgba(var(--color-primary),0.1)] transition-all flex justify-between items-center px-4 py-3 rounded-lg active:scale-95 duration-150 touch-none select-none"
              onClick={handleLinkClick}
            >
              Contact
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          
          {/* Social Links */}
          <div className="mt-auto pt-6 border-t border-gray-700">
            <div className="flex flex-col space-y-3">
              <a 
                href="https://github.com/abhi-swami" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-lg font-medium px-4 py-3 rounded-lg active:bg-[rgba(var(--color-primary),0.1)] hover:text-[rgb(var(--color-primary))] transition-all active:scale-95 duration-150 touch-none select-none"
                onClick={triggerHaptic}
              >
                GitHub
              </a>
              <a 
                href="https://linkedin.com/in/abhi-swami" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-lg font-medium px-4 py-3 rounded-lg active:bg-[rgba(var(--color-primary),0.1)] hover:text-[rgb(var(--color-primary))] transition-all active:scale-95 duration-150 touch-none select-none"
                onClick={triggerHaptic}
              >
                LinkedIn
              </a>
              {/* <a 
                href="https://twitter.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-lg font-medium"
              >
                Twitter
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}