import { useState, useEffect } from 'react';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already accepted cookies
    const hasAccepted = localStorage.getItem('tharu_village_cookie_consent');
    if (!hasAccepted) {
      // Show the banner after a short delay
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('tharu_village_cookie_consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 sm:pb-4 pointer-events-none">
      <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl p-5 md:p-6 border border-terracotta/20 pointer-events-auto transform transition-all duration-700 translate-y-0 opacity-100 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex-grow">
          <h3 className="text-lg font-bold text-slate mb-1">
            We value your privacy
          </h3>
          <p className="text-sm text-slate/70">
            We use cookies to enhance your browsing experience and analyze our traffic. By clicking "Accept", you consent to our use of cookies and agree to our Terms & Conditions.
          </p>
        </div>
        <div className="flex-shrink-0 w-full sm:w-auto flex gap-3">
          <button
            onClick={handleAccept}
            className="w-full sm:w-auto px-6 py-2.5 bg-terracotta text-cream rounded-full font-medium shadow-lg shadow-terracotta/30 hover:bg-terracotta/90 hover:scale-105 hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
