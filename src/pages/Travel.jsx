import { useEffect, useRef } from 'react';
import { Compass, MapPin, Calendar, Heart, ShieldCheck } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Transition from '../components/Transition';

gsap.registerPlugin(ScrollTrigger);

const Travel = () => {
  const containerRef = useRef(null);

  const places = [
    {
      title: "Chitwan Tharu Village",
      location: "Chitwan District, Terai Plains",
      desc: "Located in the green buffer zone of Chitwan National Park. Wander through authentic thatched-roof mud dwellings, take guided walks in the community forests, and experience the majestic Tharu stick dance in the evening.",
      highlights: ["National Park Walks", "Cultural Museum Tour", "Traditional Stick Dances"],
      image: "https://chitwanjunglesafaritour.com/wp-content/uploads/2025/07/jagatpur-lodge-Tharu-village.webp",
      bestSeason: "October to March",
    },
    {
      title: "Sauraha Tharu Village",
      location: "Rapti River Banks, Chitwan",
      desc: "The primary ecotourism hub of the plains. Sleep in traditional clay homestays, embark on organic crop-gathering tours, and sit by the Rapti River to witness jaw-dropping sunsets alongside local fishermen.",
      highlights: ["Traditional Homestays", "Rapti River Sunsets", "Organic Farm Tours"],
      image: "https://r-xx.bstatic.com/xdata/images/hotel/608x352/779333895.webp?k=7f4a22fbe794342015ab6fb4240f3b0b7ad21606aaa8bfc6ea1258d6f834b601&o=",
      bestSeason: "September to April",
    },
    {
      title: "Udayapur Tharu Village",
      location: "Near Koshi Tappu Wildlife Reserve",
      desc: "An organic farming community preserving authentic Tharu household items like 'Dehari' (clay grain containers) and custom fishing traps. Highly secluded and perfect for peaceful birdwatching.",
      highlights: ["Dehari Clay Craft Walk", "Wildlife Reserve Hikes", "Indigenous Fish Taps"],
      image: "https://english.onlinekhabar.com/wp-content/uploads/2023/11/Bahedwa-Tharu-Community-Homestay@Udayapur8.jpg",
      bestSeason: "November to February",
    },
    {
      title: "Generic Village Showcase",
      location: "Tharu Cultural Center Model",
      desc: "An immersive museum model showcasing traditional mud wall carvings, clay fireplaces (chulha), and hand-woven netting. Live daily clay pottery workshops led by village elders.",
      highlights: ["Wall relief workshop", "Live pottery crafting", "Tribal folklore storytelling"],
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800",
      bestSeason: "Open Year-Round",
    }
  ];

  useEffect(() => {
    const blocks = containerRef.current.querySelectorAll('.place-block');

    blocks.forEach((block) => {
      const leftCol = block.querySelector('.left-col');
      const rightCol = block.querySelector('.right-col');

      // Animating columns from their respective sides
      gsap.fromTo(
        leftCol,
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: block,
            start: 'top 80%',
            toggleActions: 'play none none none',
          }
        }
      );

      gsap.fromTo(
        rightCol,
        { opacity: 0, x: 60, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1.2,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: block,
            start: 'top 80%',
            toggleActions: 'play none none none',
          }
        }
      );
    });
  }, []);

  return (
    <Transition>
      <div className="pt-24 md:pt-32 pb-24 bg-cream relative">
        <div className="absolute inset-0 bg-[radial-gradient(#C05C3E_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-5 pointer-events-none" />

        {/* HEADER SECTION */}
        <section className="max-w-4xl mx-auto px-6 text-center mb-24 space-y-6">
          <div className="inline-flex items-center space-x-2 bg-forest/15 text-forest px-4 py-2 rounded-full border border-forest/20 uppercase tracking-widest text-xs font-bold">
            <Compass size={14} />
            <span>Plan Your Journey</span>
          </div>
          <h1 className="font-serif font-bold text-4xl md:text-6xl text-slate tracking-wide">
            Ecotourism & <span className="text-terracotta">Travel</span>
          </h1>
          <div className="h-[2px] w-20 bg-ochre mx-auto" />
          <p className="text-lg text-slate/75 leading-relaxed font-light max-w-2xl mx-auto">
            Journey into our beautiful villages. Experience warm homestays, guided wildlife tours, and local pottery crafting classes directly from indigenous hosts.
          </p>
        </section>

        {/* DETAILED PLACES TIMELINE */}
        <section ref={containerRef} className="max-w-7xl mx-auto px-6 md:px-12 space-y-32">
          {places.map((place, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={i}
                className="place-block grid grid-cols-1 lg:grid-cols-2 gap-16 items-center overflow-hidden"
              >
                {/* Text Column - Swaps sides for alternating rows on desktop */}
                <div
                  className={`left-col space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'
                    }`}
                >
                  <div className="flex items-center space-x-2 text-terracotta text-sm font-medium">
                    <MapPin size={18} />
                    <span>{place.location}</span>
                  </div>

                  <h2 className="font-serif font-bold text-3xl md:text-4xl text-slate leading-tight">
                    {place.title}
                  </h2>
                  <div className="h-[2px] w-12 bg-ochre" />

                  <p className="text-slate/80 leading-relaxed font-light">
                    {place.desc}
                  </p>

                  {/* Highlights Grid */}
                  <div className="space-y-3">
                    <span className="text-[10px] uppercase tracking-widest text-slate/40 font-bold block">Key Highlights</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {place.highlights.map((hl, k) => (
                        <div key={k} className="flex items-center space-x-2 text-slate/90">
                          <ShieldCheck size={16} className="text-forest flex-shrink-0" />
                          <span className="text-sm font-light">{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Best Season */}
                  <div className="flex items-center space-x-3 pt-4 border-t border-terracotta/5">
                    <Calendar size={18} className="text-ochre" />
                    <span className="text-xs text-slate/70">
                      Best Time to Visit: <strong className="text-slate font-medium">{place.bestSeason}</strong>
                    </span>
                  </div>
                </div>

                {/* Visual Column */}
                <div
                  className={`right-col relative ${isEven ? 'lg:order-2' : 'lg:order-1'
                    }`}
                >
                  <div className="absolute -top-4 -left-4 w-12 h-12 border-t-4 border-l-4 border-ochre pointer-events-none" />
                  <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-4 border-r-4 border-terracotta pointer-events-none" />

                  <div className="rounded-3xl overflow-hidden shadow-xl border border-terracotta/15 aspect-[4/3] bg-slate-dark">
                    <img
                      src={place.image}
                      alt={place.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </div>

              </div>
            );
          })}
        </section>

      </div>
    </Transition>
  );
};

export default Travel;
