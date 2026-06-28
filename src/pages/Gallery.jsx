import { useState, useEffect, useRef, useCallback } from 'react';
import { Palette, Eye, X } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Transition from '../components/Transition';
import ImageLightbox from '../components/ImageLightbox';

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const [filter, setFilter] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const galleryGridRef = useRef(null);

  const galleryItems = [
    {
      id: 1,
      category: "art",
      title: "Traditional Tharu Wall Painting",
      desc: "Ornate geometric clay reliefs carved directly onto cottage outer walls, depicting sacred animals and nature motifs.",
      image: "https://risingnepaldaily.com/storage/media/58411/THARU-PAINTING.jpg",
    },
    {
      id: 2,
      category: "art",
      title: "Tharu Wall Art — Kobar Design",
      desc: "Intricate wall murals where clay meets canvas — every stroke tells the story of Tharu spiritual life.",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 3,
      category: "dress",
      title: "Traditional Tharu Bridal Attire",
      desc: "Elegant red-bordered white saris decorated with hand-sewn shells and silver thread, worn during sacred wedding ceremonies.",
      image: "https://www.chitwantourism.com/wp-content/uploads/2024/01/tharu-village-gallery-5.jpg",
    },
    {
      id: 4,
      category: "crafts",
      title: "Jute and Bamboo Dhaki Basketry",
      desc: "Durable, vibrant coiled grass baskets used for carrying grains and flowers, handcrafted with generations of skill.",
      image: "https://cdn.shopify.com/s/files/1/1194/1498/files/02-IMG-20240708-WA0034.jpg?v=1735196903",
    },
    {
      id: 5,
      category: "art",
      title: "Clay Relief Peacock Carvings",
      desc: "Sacred clay mold designs representing long life and positive energy, adorning the walls of Tharu homes.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Mokha_Art13.jpg/250px-Mokha_Art13.jpg",
    },
    {
      id: 6,
      category: "dress",
      title: "Ethnic Silver Hansuli & Jewelry",
      desc: "Thick, handcrafted sterling silver collar necklets worn during ceremonial dances and cultural celebrations.",
      image: "https://risingnepaldaily.com/storage/media/87607/Untitled-1.jpg",
    },
    {
      id: 7,
      category: "art",
      title: "Tharu Women Working Together",
      desc: "Tharu women working together and sharing their cultural stories through daily communal activities.",
      image: "https://ajadynasty.com/wp-content/uploads/2022/06/16642019622_ecc3c0a489_o-1.jpg",
    },
    {
      id: 8,
      category: "art",
      title: "Traditional Tharu Tattoo Art",
      desc: "Traditional Tharu body art created as part of identity, ritual, and celebration — a living heritage on skin.",
      image: "https://media.nepalitimes.com/1/p/20250118140116_6eb8b5b2129dd3ed687e2d77eeed7f11107aa7b4320eac00396c64130c7dbe17.jpg",
    },
    {
      id: 9,
      category: "art",
      title: "Community Life in Action",
      desc: "Community life in Tharu villages revolves around shared labor, storytelling, and collective celebration.",
      image: "https://scsuman.com/wp-content/uploads/2017/02/mokha_01.jpg",
    },
    {
      id: 10,
      category: "art",
      title: "Tharu Marriage Celebration",
      desc: "A joyful wedding scene featuring traditional dress, ceremonial rituals, and vibrant community participation.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCa6fWJj2778F_YW46Lg2NfEjtwQi0asTLJQ&s",
    },
    {
      id: 11,
      category: "crafts",
      title: "Handwoven Tharu Mats & Textiles",
      desc: "Colorful handwoven textiles and floor mats crafted using traditional looms and natural dyes from local plants.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsNBxw_cZ2niHrQSTSH_EFjso5Cj25nYe1og&s",
    },
    {
      id: 12,
      category: "dress",
      title: "Tharu Cultural Dance Costume",
      desc: "Vibrant performance costumes adorned with mirrors, embroidery, and bells worn during traditional stick dances.",
      image: "https://whatthenepal.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-17-at-13.23.13.jpeg",
    },
  ];

  const filteredItems = filter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === filter);

  const categories = [
    { id: 'all', name: 'Show All' },
    { id: 'art', name: 'Traditional Art' },
    { id: 'dress', name: 'Dress & Attire' },
    { id: 'crafts', name: 'Artwork & Crafts' }
  ];

  const getCategoryCount = (catId) => {
    if (catId === 'all') return galleryItems.length;
    return galleryItems.filter(item => item.category === catId).length;
  };

  useEffect(() => {
    if (!galleryGridRef.current) return;
    const cards = galleryGridRef.current.querySelectorAll('.gallery-card');

    gsap.set(cards, { opacity: 0, y: 40, scale: 0.95 });

    const batch = ScrollTrigger.batch(cards, {
      onEnter: (elements) => {
        gsap.to(elements, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power3.out',
          overwrite: 'auto',
        });
      },
      onLeaveSibling: (elements) => {
        gsap.set(elements, { opacity: 1, y: 0, scale: 1 });
      }
    });

    return () => {
      batch.forEach(trigger => trigger.kill());
    };
  }, [filter]);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  const nextImage = useCallback(() => {
    setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
  }, [filteredItems.length]);

  const prevImage = useCallback(() => {
    setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  }, [filteredItems.length]);

  return (
    <Transition>
      <div className="pt-24 md:pt-32 pb-24 bg-cream relative">
        <div className="absolute inset-0 bg-[radial-gradient(#C05C3E_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-5 pointer-events-none" />

        {/* HEADER SECTION */}
        <section className="max-w-4xl mx-auto px-6 text-center mb-12 space-y-6">
          <div className="inline-flex items-center space-x-2 bg-ochre/15 text-ochre px-4 py-2 rounded-full border border-ochre/25 uppercase tracking-widest text-xs font-bold">
            <Palette size={14} />
            <span>Visual Splendor</span>
          </div>
          <h1 className="font-bold text-4xl md:text-6xl text-slate tracking-wide">
            Tharu Cultural <span className="text-terracotta">Gallery</span>
          </h1>
          <div className="h-[2px] w-20 bg-ochre mx-auto animate-pulse rounded-full" />
          <p className="text-lg text-slate/75 leading-relaxed font-light max-w-2xl mx-auto">
            Discover a visual showcase of our detailed wall murals, beautiful festive costumes, and handmade organic household artifacts.
          </p>
        </section>

        {/* CATEGORY SELECTOR BUTTONS */}
        <section className="max-w-4xl mx-auto px-6 mb-16">
          <div className="flex flex-wrap justify-center items-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-5 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 border flex items-center space-x-2 ${filter === cat.id
                  ? 'bg-terracotta border-terracotta text-cream shadow-lg scale-105'
                  : 'bg-cream-light border-terracotta/15 text-slate/85 hover:border-terracotta/40 hover:bg-cream-dark'
                  }`}
              >
                <span>{cat.name}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${filter === cat.id ? 'bg-cream/20' : 'bg-terracotta/10 text-terracotta'}`}>
                  {getCategoryCount(cat.id)}
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* GALLERY GRID CONTAINER */}
        <section className="max-w-7xl mx-auto px-6 md:px-12">
          <div
            ref={galleryGridRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]"
          >
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="gallery-card bg-cream-light rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-terracotta/10 group cursor-pointer card-hover-lift"
                onClick={() => openLightbox(index)}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-dark">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-75"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate/80 via-slate/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-cream flex items-center space-x-2 text-xs uppercase tracking-widest font-bold">
                      <Eye size={16} className="text-ochre" />
                      <span>Click to view</span>
                    </div>
                  </div>
                  <span className="absolute top-4 right-4 bg-slate/85 text-cream text-[10px] uppercase font-bold tracking-widest px-3 py-1.5 rounded-full border border-cream/10 backdrop-blur-sm">
                    {item.category}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="font-bold text-lg text-slate leading-tight transition-colors duration-300 group-hover:text-terracotta">
                    {item.title}
                  </h3>
                  <p className="text-slate/70 text-xs leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate/60 text-base">No items found in this category.</p>
            </div>
          )}
        </section>

        {/* Lightbox Modal */}
        {lightboxOpen && (
          <ImageLightbox
            images={filteredItems}
            currentIndex={lightboxIndex}
            onClose={closeLightbox}
            onPrev={prevImage}
            onNext={nextImage}
          />
        )}
      </div>
    </Transition>
  );
};

export default Gallery;
