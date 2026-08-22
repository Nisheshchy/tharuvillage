import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Food from './pages/Food';
import Travel from './pages/Travel';
import Music from './pages/Music';
import NotFound from './pages/NotFound';
import { ToastProvider } from './components/Toast';

function App() {
  const [loading, setLoading] = useState(true);

  // Preloader
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ToastProvider>
      {/* Preloader */}
      {loading && (
        <div className="preloader-overlay">
          <div className="text-center space-y-6">
            <div className="preloader-spinner mx-auto" />
            <h2 className="text-cream font-bold text-2xl tracking-wider">
              Tharu <span className="text-terracotta">Village</span>
            </h2>
            <p className="text-cream/50 text-xs uppercase tracking-[0.3em] font-medium">
              Loading Cultural Experience...
            </p>
          </div>
        </div>
      )}

      <div className={`flex flex-col min-h-screen bg-cream text-slate antialiased ${loading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-700`}>
        {/* Sticky Navbar */}
        <Navbar />

        {/* Route Views */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/food" element={<Food />} />
            <Route path="/travel" element={<Travel />} />
            <Route path="/music" element={<Music />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Elegant Footer */}
        <Footer />

        {/* Scroll To Top Button */}
        <ScrollToTop />
      </div>
    </ToastProvider>
  );
}

export default App;
