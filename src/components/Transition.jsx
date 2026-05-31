import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Transition = ({ children }) => {
  const el = useRef();

  useEffect(() => {
    // Scroll to top on mount to ensure transitions don't look weird when scrolled down
    window.scrollTo(0, 0);
    
    const ctx = gsap.context(() => {
      // Elegant page entry fade and slide-up
      gsap.fromTo(
        el.current,
        { 
          opacity: 0, 
          y: 30,
        },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          ease: 'power4.out',
          clearProps: 'all'
        }
      );
    }, el);

    return () => ctx.revert(); // clean up GSAP context on unmount
  }, []);

  return (
    <div ref={el} className="w-full">
      {children}
    </div>
  );
};

export default Transition;
