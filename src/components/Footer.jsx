import { Link } from 'react-router-dom';
import { Landmark, Mail, Phone, MapPin, Globe, Hash, ExternalLink, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate text-cream/90 relative pt-16 pb-8 overflow-hidden border-t-4 border-terracotta tharu-border-top">
      {/* Decorative Traditional Clay Pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#C05C3E_0.8px,transparent_0.8px)] [background-size:24px_24px] opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

        {/* Brand Column */}
        <div className="space-y-5">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-terracotta p-2 rounded-xl text-cream-light transition-transform duration-300 group-hover:scale-105">
              <Landmark size={24} />
            </div>
            <span className="font-serif font-bold text-2xl tracking-wide text-cream">
              Tharu <span className="text-ochre">Village</span>
            </span>
          </Link>
          <p className="text-cream/70 text-sm leading-relaxed">
            Preserving and promoting the ancient heritage, rich art forms, indigenous farming, and unique culinary traditions of the Tharu community of Nepal.
          </p>
          <div className="flex space-x-4 pt-2">
            <a href="#" className="bg-slate-light p-2 rounded-lg text-cream/80 hover:text-ochre hover:bg-terracotta/20 transition-all duration-300">
              <Globe size={18} />
            </a>
            <a href="#" className="bg-slate-light p-2 rounded-lg text-cream/80 hover:text-ochre hover:bg-terracotta/20 transition-all duration-300">
              <Hash size={18} />
            </a>
            <a href="#" className="bg-slate-light p-2 rounded-lg text-cream/80 hover:text-ochre hover:bg-terracotta/20 transition-all duration-300">
              <ExternalLink size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div>
          <h4 className="font-serif font-bold text-lg text-cream mb-6 tracking-wide relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-[2px] after:bg-ochre">
            Quick Navigation
          </h4>
          <ul className="space-y-3.5 text-sm">
            <li>
              <Link to="/" className="text-cream/75 hover:text-ochre hover:translate-x-1.5 inline-block transition-all duration-300">
                Home / Welcome
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-cream/75 hover:text-ochre hover:translate-x-1.5 inline-block transition-all duration-300">
                About Culture
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="text-cream/75 hover:text-ochre hover:translate-x-1.5 inline-block transition-all duration-300">
                Traditional Art Gallery
              </Link>
            </li>
            <li>
              <Link to="/food" className="text-cream/75 hover:text-ochre hover:translate-x-1.5 inline-block transition-all duration-300">
                Ethnic Cuisine
              </Link>
            </li>
            <li>
              <Link to="/travel" className="text-cream/75 hover:text-ochre hover:translate-x-1.5 inline-block transition-all duration-300">
                Travel Destinations
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info Column */}
        <div>
          <h4 className="font-serif font-bold text-lg text-cream mb-6 tracking-wide relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-[2px] after:bg-ochre">
            Get in Touch
          </h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start space-x-3 text-cream/75">
              <MapPin size={18} className="text-ochre mt-0.5 flex-shrink-0" />
              <span>Tharu Village,<br />Nepal</span>
            </li>
            <li className="flex items-center space-x-3 text-cream/75">
              <Phone size={18} className="text-ochre flex-shrink-0" />
              <span>+977-9801234567</span>
            </li>
            <li className="flex items-center space-x-3 text-cream/75">
              <Mail size={18} className="text-ochre flex-shrink-0" />
              <span>explore@tharuvillage.com</span>
            </li>
          </ul>
        </div>

        {/* Newsletter Column */}
        <div>
          <h4 className="font-serif font-bold text-lg text-cream mb-6 tracking-wide relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-[2px] after:bg-ochre">
            Newsletter
          </h4>
          <p className="text-cream/70 text-sm leading-relaxed mb-4">
            Subscribe to receive updates on cultural festivals, organic recipes, and ecotourism activities.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
            <div className="relative">
              <input
                type="email"
                placeholder="Your email address"
                required
                className="w-full bg-slate-light border border-cream/15 rounded-xl px-4 py-3 text-sm text-cream placeholder-cream/40 focus:outline-none focus:border-ochre transition-colors duration-300"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-ochre hover:bg-ochre-dark text-slate font-semibold py-3 px-4 rounded-xl transition-all duration-300 text-sm hover:scale-[1.01]"
            >
              Subscribe
            </button>
          </form>
        </div>

      </div>

      {/* Decorative Separation Line */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="h-[1px] bg-cream/10 w-full mb-8" />
      </div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center text-xs text-cream/50 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p>© {currentYear} Tharu Village Cultural Center. All Rights Reserved.</p>
        <p className="flex items-center justify-center space-x-1">
          <span>Designed with</span>
          <Heart size={12} className="text-terracotta fill-terracotta animate-pulse" />
          <span>to honor Nepal's rich indigenous heritage.</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
