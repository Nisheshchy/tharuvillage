// Updated Navbar.jsx with accessibility, performance, and security improvements
import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Landmark } from 'lucide-react';
import gsap from 'gsap';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);
  const menuBtnRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Sticky scroll handling with requestAnimationFrame throttling
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    // Initial state
    handleScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // GSAP animations for mobile menu
  useEffect(() => {
    if (!mobileMenuRef.current) return;
    const ctx = gsap.context(() => {
      if (isOpen) {
        gsap.fromTo(
          mobileMenuRef.current,
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out' }
        );
        gsap.fromTo(
          mobileMenuRef.current.querySelectorAll('.mobile-link'),
          { opacity: 0, x: -20 },
          { opacity: 1, x: 0, duration: 0.3, stagger: 0.05, delay: 0.1, ease: 'power2.out' }
        );
        // Focus first link for accessibility
        const firstLink = mobileMenuRef.current.querySelector('.mobile-link');
        if (firstLink) firstLink.focus();
      } else {
        gsap.to(mobileMenuRef.current, {
          opacity: 0,
          y: -10,
          duration: 0.25,
          ease: 'power2.in',
        });
      }
    }, mobileMenuRef);
    return () => ctx.revert();
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Traditional Food', path: '/food' },
    { name: 'Travel Places', path: '/travel' },
    { name: 'Music', path: '/music' },
    { name: 'About Us', path: '/about' },
  ];

  const closeMobileMenu = () => setIsOpen(false);

  const navbarClasses = `fixed top-0 left-0 w-full z-50 transition-all duration-500 py-4 md:py-5 border-b border-terracotta/5 backdrop-blur-xl ${
    scrolled
      ? 'shadow-2xl bg-slate/95 backdrop-blur-2xl'
      : 'bg-transparent'
  }`;

  return (
    <nav ref={navRef} role="navigation" className={navbarClasses}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo Section */}
        <NavLink
          to="/"
          onClick={closeMobileMenu}
          className="flex items-center space-x-3 text-slate hover:opacity-90 group transition-all duration-300"
        >
          <div className="bg-terracotta p-2 rounded-xl text-cream-light shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
            <Landmark size={24} aria-hidden="true" />
          </div>
          <span className="font-bold text-lg md:text-xl tracking-wide">
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
                  isActive ? 'text-terracotta' : 'text-slate/80'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-terracotta rounded-full transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0'
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
          <NavLink
            to="/travel"
            className="bg-forest hover:bg-forest-light text-cream font-semibold text-sm uppercase px-5 py-2.5 rounded-full transition-all duration-300 shadow-sm hover:shadow-lg hover:scale-[1.04] hover:-translate-y-0.5"
          >
            Plan Journey
          </NavLink>
        </div>

        {/* Mobile Toggle */}
        <button
          ref={menuBtnRef}
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
          className="md:hidden p-3 text-slate hover:text-terracotta transition-colors duration-300 focus:outline-none rounded-lg hover:bg-terracotta/10"
        >
          {isOpen ? <X size={28} aria-hidden="true" /> : <Menu size={28} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          id="mobile-menu"
          ref={mobileMenuRef}
          role="dialog"
          aria-modal="true"
          className="absolute top-full left-0 w-full bg-cream/95 border-b border-terracotta/20 shadow-2xl md:hidden overflow-hidden z-40 glass-card backdrop-blur-xl"
        >
          <div className="px-6 py-8 flex flex-col space-y-5">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `mobile-link text-lg font-medium py-2 px-3 transition-all duration-300 rounded-lg ${
                    isActive
                      ? 'text-terracotta bg-terracotta/8 border-l-4 border-terracotta'
                      : 'text-slate/85 border-l-4 border-transparent hover:bg-cream-dark'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <div className="mobile-link pt-4">
              <NavLink
                to="/travel"
                onClick={closeMobileMenu}
                className="block text-center bg-terracotta hover:bg-terracotta-dark text-cream font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]"
              >
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
