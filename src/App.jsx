import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Food from './pages/Food';
import Travel from './pages/Travel';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-cream text-slate antialiased">
      {/* Dynamic froste sticky Navbar */}
      <Navbar />
      
      {/* Route Views */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/food" element={<Food />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      
      {/* Elegant Footer */}
      <Footer />
    </div>
  );
}

export default App;
