import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  BriefcaseBusiness,
  ChevronRight,
  ExternalLink,
  FileText,
  Home,
  Mail,
  UserRound,
  Wrench,
  X,
} from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [navHeight, setNavHeight] = useState(0);
  const menuRef = useRef(null);
  const navRef = useRef(null);
  const touchStartY = useRef(0);

  const resumeUrl =
    "https://pub-19394998e7f349069f6dadeecc9a4994.r2.dev/Abhishek-Swami-Resume.pdf";
  const navItems = [
    { label: "Home", href: "#", icon: Home },
    { label: "About", href: "#about", icon: UserRound },
    { label: "Skills", href: "#skills", icon: Wrench },
    { label: "Project", href: "#projects", icon: BriefcaseBusiness },
    { label: "Contact", href: "#contact", icon: Mail },
    { label: "Resume", href: resumeUrl, icon: FileText, isResume: true },
  ];

  const handleResumeClick = async (e) => {
    e.preventDefault();
    if (typeof window === "undefined") return;

    // open new tab for viewing
    window.open(resumeUrl, "_blank", "noopener");
    // fetch and trigger download
    fetch(resumeUrl)
      .then((res) => res.blob())
      .then((blob) => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "Abhishek-Swami-Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(link.href);
      })
      .catch((err) => {
        console.log("Resume download failed", err);
      });
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        !event.target.closest("nav") &&
        !event.target.closest(".mobile-menu")
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!navRef.current || typeof window === "undefined") return;

    const updateNavHeight = () => {
      setNavHeight(navRef.current?.offsetHeight ?? 0);
    };

    updateNavHeight();

    const resizeObserver = new ResizeObserver(updateNavHeight);
    resizeObserver.observe(navRef.current);
    window.addEventListener("resize", updateNavHeight);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateNavHeight);
    };
  }, []);

  // Haptic feedback for mobile
  const triggerHaptic = () => {
    if (typeof window !== "undefined" && navigator.vibrate) {
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
      <div style={{ height: navHeight }} aria-hidden="true" />

      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 w-full py-1 xs:py-3 sm:py-5 md:py-4 px-3 xs:px-4 sm:px-6 md:px-8 z-60 transition-colors duration-300 ${
          isScrolled || isMenuOpen
            ? "bg-[rgb(var(--color-background-primary-light))]/75 backdrop-blur-md border-b border-black/10"
            : "bg-transparent  border-black/10"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link
            href="/"
            className="text-lg xs:text-xl sm:text-xl md:text-2xl font-bold tracking-wider"
          >
            abhishek
          </Link>

          <div className="hidden md:flex items-center gap-2  rounded-full border border-white/10 bg-black/20 px-2 py-2 backdrop-blur-md">
            {navItems.map((item) => {
              const Icon = item.icon;

              if (item.isResume) {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={handleResumeClick}
                    className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white/85 transition hover:bg-[rgb(var(--color-primary))] hover:text-black"
                  >
                    <Icon className="h-4 w-4 max-lg:hidden" aria-hidden="true" />
                    {item.label}
                  </a>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white/85 transition hover:bg-white/10 hover:text-[rgb(var(--color-primary))]"
                >
                  <Icon className="h-4 w-4 max-lg:hidden" aria-hidden="true" />
                  {item.label}
                </Link>
              );
            })}
          </div>

          <button
            onClick={handleMenuToggle}
            className="md:hidden flex items-center justify-center p-2 focus:outline-none bg-[rgb(var(--color-card))] rounded-lg w-10 h-10 z-50 active:scale-95 transition-transform duration-150 touch-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <div
                className="grid grid-cols-2 gap-1 transition-transform duration-500"
                aria-hidden="true"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-current"></span>
                <span className="h-1.5 w-1.5 rounded-full bg-current"></span>
                <span className="h-1.5 w-1.5 rounded-full bg-current"></span>
                <span className="h-1.5 w-1.5 rounded-full bg-current"></span>
              </div>
            )}
          </button>
        </div>
      </nav>

      <div
        ref={menuRef}
        style={{ top: navHeight }}
        className={`mobile-menu fixed left-0 right-0 bottom-0 w-full bg-[rgb(var(--color-background-primary-light))] md:hidden z-50 transform transition-all duration-600 linear ${
          isMenuOpen
            ? "translate-y-0 opacity-100"
            : "translate-y-[-150%] opacity-0"
        }`}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="pt-12 pb-6 px-6 h-full flex flex-col justify-between">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => {
              const Icon = item.icon;

              if (item.isResume) {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      handleLinkClick();
                      handleResumeClick(e);
                    }}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-base font-medium text-white transition hover:border-[rgb(var(--color-primary))]/40 hover:bg-[rgba(var(--color-primary),0.12)] hover:text-[rgb(var(--color-primary))]"
                  >
                    <span className="inline-flex items-center gap-3">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                      {item.label}
                    </span>
                    <ExternalLink className="h-5 w-5" aria-hidden="true" />
                  </a>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={handleLinkClick}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-base font-medium text-white transition hover:border-[rgb(var(--color-primary))]/40 hover:bg-[rgba(var(--color-primary),0.12)] hover:text-[rgb(var(--color-primary))]"
                >
                  <span className="inline-flex items-center gap-3">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                    {item.label}
                  </span>
                  <ChevronRight className="h-5 w-5 text-white/45" aria-hidden="true" />
                </Link>
              );
            })}
          </div>

          <div className="mt-auto pt-6 border-t border-gray-700">
            <div className="flex justify-between space-x-6">
              <a
                href="https://github.com/abhi-swami"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[rgb(var(--color-primary))] transition-colors"
                onClick={triggerHaptic}
                aria-label="GitHub Profile"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/abhi-swami"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[rgb(var(--color-primary))] transition-colors"
                onClick={triggerHaptic}
                aria-label="LinkedIn Profile"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
              <a
                href={resumeUrl}
                onClick={(e) => {
                  triggerHaptic();
                  handleResumeClick(e);
                }}
                className="hover:text-[rgb(var(--color-primary))] transition-colors"
                aria-label="Download Resume"
              >
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 20h14a1 1 0 001-1v-2a1 1 0 10-2 0v1H6v-1a1 1 0 10-2 0v2a1 1 0 001 1zm7-18a1 1 0 00-1 1v8H8l4 4 4-4h-3V3a1 1 0 00-1-1z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
