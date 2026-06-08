import { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Landmark } from 'lucide-react';
import gsap from 'gsap';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const menuBtnRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const location = useLocation();

  // Handle sticky scroll color changes
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        navRef.current.classList.add(
          "shadow-2xl",
          "bg-slate/95",
          "backdrop-blur-2xl",
        );
        navRef.current.classList.remove('bg-transparent');
      } else {
        navRef.current.classList.add('bg-transparent');
        navRef.current.classList.remove(
          "shadow-2xl",
          "bg-slate/95",
          "backdrop-blur-2xl",
        );
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animate mobile menu open/close
  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        mobileMenuRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out' }
      );
      // Stagger animate links inside mobile menu
      gsap.fromTo(
        mobileMenuRef.current.querySelectorAll('.mobile-link'),
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.3, stagger: 0.05, delay: 0.1, ease: 'power2.out' }
      );
    }
  }, [isOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Traditional Food', path: '/food' },
    { name: 'Travel Places', path: '/travel' },
    { name: 'About Us', path: '/about' },
  ];

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-transparent py-4 md:py-5 border-b border-terracotta/5 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo Section */}
        <NavLink
          to="/"
          className="flex items-center space-x-3 text-slate hover:opacity-90 group transition-all duration-300">
          <div className="bg-terracotta p-2 rounded-xl text-cream-light shadow-sm transition-transform duration-300 group-hover:scale-105 group-hover:rotate-6">
            <Landmark size={24} />
          </div>
          <span className="font-serif font-bold text-xl tracking-wide">
            Tharu <span className="text-terracotta">Village</span>
          </span>
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative font-medium text-sm tracking-wide uppercase transition-all duration-300 py-1 hover:text-terracotta ${
                  isActive ? "text-terracotta" : "text-slate/80"
                }`
              }>
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-terracotta rounded-full" />
                  )}
                </>
              )}
            </NavLink>
          ))}
          <NavLink
            to="/travel"
            className="bg-forest hover:bg-forest-light text-cream font-medium text-sm uppercase px-5 py-2.5 rounded-full transition-all duration-300 shadow-sm hover:shadow-md hover:scale-[1.02]">
            Plan Journey
          </NavLink>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          ref={menuBtnRef}
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle menu"
          className="md:hidden p-2 text-slate hover:text-terracotta transition-colors duration-300 focus:outline-none">
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div
          ref={mobileMenuRef}
          className="absolute top-full left-0 w-full bg-cream/95 border-b border-terracotta/20 shadow-2xl md:hidden overflow-hidden z-40 glass-card backdrop-blur-xl">
          <div className="px-6 py-8 flex flex-col space-y-5">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `mobile-link text-lg font-medium py-1 transition-colors duration-300 border-l-2 pl-3 ${
                    isActive
                      ? "border-terracotta text-terracotta bg-terracotta/5"
                      : "border-transparent text-slate/85"
                  }`
                }>
                {link.name}
              </NavLink>
            ))}
            <div className="mobile-link pt-4">
              <NavLink
                to="/travel"
                className="block text-center bg-terracotta hover:bg-terracotta-dark text-cream font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow">
                Plan Journey
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
