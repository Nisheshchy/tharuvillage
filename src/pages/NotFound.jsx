import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Home, Compass, ShieldAlert } from 'lucide-react';
import gsap from 'gsap';
import Transition from '../components/Transition';

const NotFound = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current.querySelectorAll('.animate-404'),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
      );

      // Floating animation for the tribal patterns
      gsap.to(containerRef.current.querySelectorAll('.float-el'), {
        y: -15,
        duration: 2,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        stagger: 0.3,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <Transition>
      <div
        ref={containerRef}
        className="min-h-screen bg-cream flex flex-col items-center justify-center text-center px-6 relative py-20 overflow-hidden"
      >
        {/* Decorative floating tribal patterns */}
        <div className="absolute inset-0 bg-[radial-gradient(#C05C3E_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-5 pointer-events-none" />

        <div className="float-el absolute top-20 left-10 w-16 h-16 border-4 border-terracotta/15 rounded-full" />
        <div className="float-el absolute top-32 right-20 w-10 h-10 bg-ochre/10 rounded-lg rotate-45" />
        <div className="float-el absolute bottom-32 left-20 w-12 h-12 border-4 border-ochre/15 rounded-xl" />
        <div className="float-el absolute bottom-20 right-10 w-16 h-16 bg-terracotta/8 rounded-full" />
        <div className="float-el absolute top-1/2 left-5 w-8 h-8 bg-forest/10 rounded-lg rotate-12" />
        <div className="float-el absolute top-1/4 right-8 w-6 h-6 border-3 border-forest/15 rounded-full" />

        <div className="animate-404 bg-terracotta/10 text-terracotta p-6 rounded-3xl mb-8 border border-terracotta/20 shadow-lg">
          <ShieldAlert size={56} className="animate-bounce" />
        </div>

        <h1 className="animate-404 font-bold text-8xl md:text-9xl text-slate tracking-wider mb-4 gradient-text">
          404
        </h1>

        <h2 className="animate-404 font-bold text-2xl md:text-3xl text-slate mb-6">
          Lost in the Plains
        </h2>

        <p className="animate-404 text-slate/70 text-sm md:text-base max-w-md mx-auto mb-10 leading-relaxed font-light">
          The trail you are looking for has been washed away by the monsoon river Rapti, or it never existed. Let us guide you back to safety.
        </p>

        <div className="animate-404 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            to="/"
            className="w-full sm:w-auto bg-terracotta hover:bg-terracotta-dark text-cream font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center space-x-2 hover:scale-[1.04] hover:-translate-y-1"
          >
            <Home size={16} />
            <span>Back to Home</span>
          </Link>
          <Link
            to="/travel"
            className="w-full sm:w-auto bg-cream-light hover:bg-cream-dark text-slate font-bold px-8 py-4 rounded-xl border border-terracotta/15 transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-[1.04] hover:-translate-y-1"
          >
            <Compass size={16} className="text-ochre" />
            <span>Discover Places</span>
          </Link>
        </div>

        {/* Decorative bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-terracotta via-ochre to-forest" />
      </div>
    </Transition>
  );
};

export default NotFound;
