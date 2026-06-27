import { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import gsap from 'gsap';

const ImageLightbox = ({ images, currentIndex, onClose, onPrev, onNext }) => {
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    gsap.fromTo(
      '.lightbox-overlay',
      { opacity: 0 },
      { opacity: 1, duration: 0.35, ease: 'power2.out' }
    );

    gsap.fromTo(
      '.lightbox-image',
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.45, ease: 'power3.out', delay: 0.1 }
    );

    gsap.fromTo(
      '.lightbox-info',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out', delay: 0.2 }
    );

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [handleKeyDown]);

  const item = images[currentIndex];

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div
        className="lightbox-content"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-cream/10 backdrop-blur-md border border-cream/20 text-cream flex items-center justify-center hover:bg-terracotta/40 transition-all duration-300"
        >
          <X size={22} />
        </button>

        {/* Prev Button */}
        <button
          onClick={onPrev}
          className="lightbox-nav-btn prev"
          aria-label="Previous image"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Next Button */}
        <button
          onClick={onNext}
          className="lightbox-nav-btn next"
          aria-label="Next image"
        >
          <ChevronRight size={24} />
        </button>

        {/* Image */}
        <img
          src={item.image}
          alt={item.title}
          className="lightbox-image"
        />

        {/* Info */}
        <div className="lightbox-info text-center">
          <span className="inline-block bg-ochre text-slate text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full mb-3">
            {item.category}
          </span>
          <h3 className="text-cream text-xl md:text-2xl font-bold tracking-wide">
            {item.title}
          </h3>
          <p className="text-cream/70 text-sm mt-2 max-w-lg mx-auto">
            {item.desc}
          </p>
          <p className="text-cream/40 text-xs mt-3">
            {currentIndex + 1} / {images.length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageLightbox;
