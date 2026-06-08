import { useState, useEffect, useRef } from 'react';
import { Palette, Compass, Star, Eye } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Transition from '../components/Transition';

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const [filter, setFilter] = useState('all');
  const galleryGridRef = useRef(null);

  const galleryItems = [
    {
      id: 1,
      category: "art",
      title: "Traditional Tharu Wall Painting",
      desc: "Ornate geometric clay reliefs carved directly onto cottage outer walls.",
      image:
        "https://risingnepaldaily.com/storage/media/58411/THARU-PAINTING.jpg",
    },
    {
      id: 2,
      category: "art",
      title: "Tharu Wall Art Kobar",
      desc: "where the wall make the art",
      image:
        "https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/482008589_960728476177172_8655726369359576767_n.jpg?stp=dst-jpg_s1080x2048_tt6&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Ys4rYLLVVDUQ7kNvwHi4ppw&_nc_oc=AdqC35-aNzNnYZPHK4rXMewA8aOZb2HNCTjsY97zzyCnjdMOH236gd1L8s8rnYb_dRDh1pOOs7fUhXxUHQeeAT-D&_nc_zt=23&_nc_ht=scontent.fbir1-1.fna&_nc_gid=dvAkBzkg-iA5GlfkYhSJ2Q&_nc_ss=7b289&oh=00_Af6icTE02QYdPOFPx1l3jcHBFjhAX7JEhb5X-znR--erDA&oe=6A1F8B9B",
    },
    {
      id: 3,
      category: "dress",
      title: "Traditional Tharu Bridal Attire",
      desc: "Elegant red-bordered white saris decorated with hand-sewn shells and silver thread.",
      image:
        "https://scontent.fbir1-1.fna.fbcdn.net/v/t1.6435-9/174327173_716116169100043_3553318233771004604_n.jpg?stp=dst-jpg_p960x960_tt6&_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=jZvuOKHTaD0Q7kNvwH4d4Hh&_nc_oc=AdrtY3rxFxrNA8HrqqS1oRea7eY93dG0mq0rGtUeVm29TGawXDUie1GAvvaVbzVDvvE6J2FWLDM7mc-1XJLeVPl4&_nc_zt=23&_nc_ht=scontent.fbir1-1.fna&_nc_gid=9_OqkMtbC2Tiim-0xGTHhQ&_nc_ss=7b289&oh=00_Af9BObJ2MbZL_VRFNITygYVfOcqon1zXQWRDWIclJCB9Qw&oe=6A488B31",
    },
    {
      id: 4,
      category: "crafts",
      title: "Jute and Bamboo Dhaki Basketry",
      desc: "Durable, vibrant coiled grass baskets used for carrying grains and flowers.",
      image:
        "https://cdn.shopify.com/s/files/1/1194/1498/files/02-IMG-20240708-WA0034.jpg?v=1735196903",
    },
    {
      id: 4,
      category: "art",
      title: "Clay relief peacock carvings",
      desc: "Sacred clay mold designs representing long life and positive energy.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Mokha_Art13.jpg/250px-Mokha_Art13.jpg",
    },
    {
      id: 5,
      category: "dress",
      title: "Ethnic Silver Hansuli & Jewelry",
      desc: "Thick, handcrafted sterling silver collar necklets worn during ceremonial dances.",
      image: "https://risingnepaldaily.com/storage/media/87607/Untitled-1.jpg",
    },
    {
      id: 6,
      category: "Tharu Traditionally",
      title: "Tharu Women Traditionally Working Together",
      desc: "tharu women traditionally working together with the sharing the better  memory.",
      image:
        "https://ajadynasty.com/wp-content/uploads/2022/06/16642019622_ecc3c0a489_o-1.jpg",
    },

    {
      id: 7,
      category: "Tattoo Art",
      title: "Tharu Traditional Tattoo Art",
      desc: "tharu women get tattoo on their body.",
      image:
        "https://media.nepalitimes.com/1/p/20250118140116_6eb8b5b2129dd3ed687e2d77eeed7f11107aa7b4320eac00396c64130c7dbe17.jpg",
    },

    {
      id: 8,
      category: "Tharu Traditionally",
      title: "Tharu People are working together.",
      desc: "tharu people traditionally working together with the sharing the better  memory.",
      image:
        "https://www.chitwantourism.com/wp-content/uploads/2024/01/tharu-village-gallery-5.jpg",
    },
    {
      id: 9,
      category: "Tharu Traditionally Marrige",
      title: "Tharu Marrige.",
      desc: "tharu showing their marrige retrival.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCa6fWJj2778F_YW46Lg2NfEjtwQi0asTLJQ&s",
    },
  ];

  const filteredItems = filter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === filter);

  useEffect(() => {
    // ScrollTrigger batch animate gallery cards on mount & filter change
    const cards = galleryGridRef.current.querySelectorAll('.gallery-card');

    // Set initial properties for reveal
    gsap.set(cards, { opacity: 0, y: 40, scale: 0.95 });

    const batch = ScrollTrigger.batch(cards, {
      onEnter: (elements) => {
        gsap.to(elements, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          overwrite: 'auto',
        });
      },
      onLeaveSibling: (elements) => {
        // Fallback for scrolling backwards nicely
        gsap.set(elements, { opacity: 1, y: 0, scale: 1 });
      }
    });

    return () => {
      batch.forEach(trigger => trigger.kill());
    };
  }, [filter]);

  const categories = [
    { id: 'all', name: 'Show All' },
    { id: 'art', name: 'Traditional Art' },
    { id: 'dress', name: 'Dress & Attire' },
    { id: 'crafts', name: 'Artwork & Crafts' }
  ];

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
          <h1 className="font-serif font-bold text-4xl md:text-6xl text-slate tracking-wide">
            Tharu Cultural <span className="text-terracotta">Gallery</span>
          </h1>
          <div className="h-[2px] w-20 bg-ochre mx-auto animate-pulse" />
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
                className={`px-5 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 border ${filter === cat.id
                  ? 'bg-terracotta border-terracotta text-cream shadow-md scale-105'
                  : 'bg-cream-light border-terracotta/15 text-slate/85 hover:border-terracotta/40 hover:bg-cream-dark'
                  }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </section>

        {/* GALLERY MASONRY/GRID CONTAINER */}
        <section className="max-w-7xl mx-auto px-6 md:px-12">
          <div
            ref={galleryGridRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]"
          >
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="gallery-card bg-cream-light rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-terracotta/10 group"
              >
                {/* Visual card top */}
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-dark">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:filter group-hover:brightness-75"
                  />
                  {/* Hover visual details overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate/80 via-slate/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-cream flex items-center space-x-2 text-xs uppercase tracking-widest font-bold font-sans">
                      <Eye size={16} className="text-ochre" />
                      <span>View details</span>
                    </div>
                  </div>
                  {/* Category Indicator Tag */}
                  <span className="absolute top-4 right-4 bg-slate/85 text-cream text-[10px] uppercase font-bold tracking-widest px-3 py-1.5 rounded-full border border-cream/10 backdrop-blur-sm">
                    {item.category}
                  </span>
                </div>

                {/* Text card bottom */}
                <div className="p-6 space-y-3">
                  <h3 className="font-serif font-bold text-lg text-slate leading-tight transition-colors duration-300 group-hover:text-terracotta">
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

      </div>
    </Transition>
  );
};

export default Gallery;
