import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, UtensilsCrossed, Palette, Landmark, ShieldCheck, Star, ChevronLeft, ChevronRight, Calendar, Users, MapPin, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Transition from '../components/Transition';

gsap.registerPlugin(ScrollTrigger);

const CounterSection = () => {
  const counterRef = useRef(null);
  const counters = [
    { value: 500, suffix: '+', label: 'Years of Heritage', icon: <Landmark size={24} /> },
    { value: 50, suffix: '+', label: 'Art Forms', icon: <Palette size={24} /> },
    { value: 12, suffix: '+', label: 'Villages', icon: <MapPin size={24} /> },
    { value: 100, suffix: 'K+', label: 'Annual Visitors', icon: <Users size={24} /> },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const counters = counterRef.current.querySelectorAll('.counter-value');
            counters.forEach((counter) => {
              const target = parseInt(counter.getAttribute('data-target'));
              const duration = 2000;
              const start = performance.now();

              const update = (now) => {
                const elapsed = now - start;
                const progress = Math.min(elapsed / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                counter.textContent = Math.floor(eased * target);
                if (progress < 1) requestAnimationFrame(update);
                else counter.textContent = target;
              };
              requestAnimationFrame(update);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) observer.observe(counterRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-slate text-cream relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#D99B26_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-5 pointer-events-none" />
      <div ref={counterRef} className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
        {counters.map((item, i) => (
          <div key={i} className="text-center space-y-4 group">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-terracotta/15 text-ochre flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-terracotta/25">
              {item.icon}
            </div>
            <div className="text-4xl md:text-5xl font-bold">
              <span className="counter-value" data-target={item.value}>0</span>
              <span className="text-ochre">{item.suffix}</span>
            </div>
            <p className="text-cream/60 text-sm uppercase tracking-widest font-medium">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Travel Blogger, UK",
      text: "Visiting Tharu Village was a life-changing experience. The mud-relief art on every home tells a story of centuries. I've never felt such warmth from a community.",
      rating: 5,
    },
    {
      name: "Rajesh Thapa",
      role: "Cultural Researcher, Nepal",
      text: "The Tharu people's connection to nature is extraordinary. Their clay architecture, organic farming, and folk dances represent a heritage that must be preserved.",
      rating: 5,
    },
    {
      name: "Emily Chen",
      role: "Documentary Filmmaker, Canada",
      text: "I spent a week filming in Sauraha and was captivated by the stick dance performances, the handmade pottery, and the incredible flavors of Ghongi and Bagiya.",
      rating: 5,
    },
    {
      name: "David Werner",
      role: "Ecotourism Expert, Germany",
      text: "Chitwan's Tharu homestays set the gold standard for sustainable ecotourism. The community-run museums and guided forest walks are absolutely world-class.",
      rating: 5,
    },
  ];

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [current]);

  const t = testimonials[current];

  return (
    <section className="py-24 bg-cream-dark relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center space-y-8">
        <div className="inline-flex items-center space-x-2 bg-ochre/15 text-ochre px-4 py-2 rounded-full border border-ochre/25 uppercase tracking-widest text-xs font-bold">
          <Star size={14} />
          <span>Visitor Stories</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-slate tracking-wide">
          What Our <span className="text-terracotta">Guests</span> Say
        </h2>

        <div className="relative max-w-3xl mx-auto">
          <div className="glass-card rounded-3xl p-10 md:p-14 space-y-6 min-h-[280px] flex flex-col justify-center">
            <div className="flex justify-center space-x-1">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} size={20} className="text-ochre fill-ochre" />
              ))}
            </div>
            <p className="text-slate/80 text-base md:text-lg leading-relaxed font-light italic">
              "{t.text}"
            </p>
            <div>
              <p className="font-bold text-slate">{t.name}</p>
              <p className="text-slate/50 text-sm">{t.role}</p>
            </div>
          </div>

          <div className="flex justify-center items-center space-x-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-terracotta/20 text-terracotta flex items-center justify-center hover:bg-terracotta hover:text-cream transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex space-x-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${i === current ? 'bg-terracotta w-8' : 'bg-terracotta/30'}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-terracotta/20 text-terracotta flex items-center justify-center hover:bg-terracotta hover:text-cream transition-all duration-300 hover:scale-110"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const FestivalsSection = () => {
  const festivalsRef = useRef(null);
  const festivals = [
    {
      name: "Maghi Festival",
      month: "January",
      desc: "The Tharu New Year celebrated with feasts, traditional dances, and community bonfires marking the end of winter solstice.",
      color: "terracotta",
    },
    {
      name: "Chhath Puja",
      month: "October/November",
      desc: "A sacred sun worship festival where devotees offer prayers at riverbanks at sunrise and sunset with elaborate rituals.",
      color: "ochre",
    },
    {
      name: "Dashain",
      month: "October",
      desc: "Dhikri rice flour figurines are prepared and families come together for 15 days of celebrations, feasting, and blessings.",
      color: "forest",
    },
    {
      name: "Jitiya Festival",
      month: "September",
      desc: "Mothers fast for the well-being of their children. Special Dhikri shapes are steamed and offered during this 3-day festival.",
      color: "terracotta",
    },
  ];

  useEffect(() => {
    const cards = festivalsRef.current?.querySelectorAll('.festival-card');
    if (!cards) return;

    gsap.fromTo(
      cards,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: festivalsRef.current,
          start: 'top 85%',
        },
      }
    );
  }, []);

  return (
    <section ref={festivalsRef} className="py-24 bg-cream relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#C05C3E_0.5px,transparent_0.5px)] [background-size:32px_32px] opacity-5 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-terracotta/10 text-terracotta px-4 py-2 rounded-full border border-terracotta/20 uppercase tracking-widest text-xs font-bold">
            <Calendar size={14} />
            <span>Cultural Calendar</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate tracking-wide">
            Tharu <span className="text-terracotta">Festivals</span> & Celebrations
          </h2>
          <p className="text-slate/75 text-sm leading-relaxed">
            Experience the vibrant rhythm of Tharu life through our seasonal festivals, each rooted in ancient agrarian traditions and spiritual devotion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {festivals.map((f, i) => (
            <div
              key={i}
              className={`festival-card glass-card rounded-2xl p-6 hover:shadow-xl transition-all duration-500 card-hover-lift border-t-4 border-${f.color}`}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className={`w-12 h-12 rounded-xl bg-${f.color}/15 text-${f.color} flex items-center justify-center`}>
                  <Sparkles size={22} />
                </div>
                <span className={`text-${f.color} text-xs font-bold uppercase tracking-widest`}>{f.month}</span>
              </div>
              <h3 className="font-bold text-lg text-slate mb-3">{f.name}</h3>
              <p className="text-slate/70 text-sm leading-relaxed font-light">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  const heroTextRef = useRef(null);
  const heroImageRef = useRef(null);
  const featuresRef = useRef(null);
  const introSectionRef = useRef(null);
  const ctaSectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        heroTextRef.current.querySelectorAll('.hero-fade'),
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power4.out', delay: 0.2 }
      );

      tl.fromTo(
        heroImageRef.current,
        { scale: 1.15, filter: 'brightness(0.6) blur(4px)' },
        { scale: 1, filter: 'brightness(0.85) blur(0px)', duration: 1.8, ease: 'power3.out' },
        '-=1'
      );

      gsap.fromTo(
        featuresRef.current.querySelectorAll('.feature-card'),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: featuresRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          }
        }
      );

      gsap.fromTo(
        introSectionRef.current.querySelector('.intro-text-col'),
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: introSectionRef.current,
            start: 'top 80%',
          }
        }
      );

      gsap.fromTo(
        introSectionRef.current.querySelector('.intro-img-col'),
        { opacity: 0, x: 50, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1.2,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: introSectionRef.current,
            start: 'top 80%',
          }
        }
      );

      gsap.fromTo(
        ctaSectionRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ctaSectionRef.current,
            start: 'top 85%',
          }
        }
      );

    });

    return () => ctx.revert();
  }, []);

  return (
    <Transition>
      <div className="relative">

        {/* HERO SECTION */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-slate text-cream">
          <div className="absolute inset-0 z-0">
            <img
              ref={heroImageRef}
              src="https://assets-cdn.kathmandupost.com/uploads/source/news/2025/third-party/main-1741922246.jpg"
              alt="Beautiful Nepalese Village"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate/95 via-slate/60 to-slate/30" />
            <div className="absolute inset-0 bg-gradient-to-r from-terracotta/20 via-transparent to-ochre/15 mix-blend-color-add" />
          </div>

          <div className="absolute inset-0 bg-[radial-gradient(#C05C3E_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-15 pointer-events-none z-10" />

          <div ref={heroTextRef} className="relative z-20 max-w-5xl mx-auto px-6 md:px-12 text-center select-none pt-12">
            <div className="hero-fade inline-flex items-center space-x-2 bg-ochre/25 text-ochre-light px-4 py-2 rounded-full border border-ochre/30 backdrop-blur-md mb-6 uppercase tracking-widest text-xs font-bold">
              <Landmark size={14} className="animate-pulse" />
              <span>Indigenous Heritage of Nepal</span>
            </div>

            <h1 className="hero-fade font-bold text-4xl sm:text-6xl md:text-7xl leading-tight tracking-wide mb-6">
              Welcome to the Heart of <br />
              <span className="gradient-text">Tharu Culture</span>
            </h1>

            <p className="hero-fade text-lg md:text-xl text-cream/80 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
              Step into an ancient world of artistic clay dwellings, vibrant geometric artwork, unique ethnic delicacies, and organic farming nested along Nepal's fertile plains.
            </p>

            <div className="hero-fade flex flex-col sm:flex-row justify-center items-center gap-5">
              <Link
                to="/about"
                className="w-full sm:w-auto bg-terracotta hover:bg-terracotta-dark text-cream font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center space-x-2 hover:scale-[1.04] hover:-translate-y-1">
                <span>Discover Our Story</span>
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/travel"
                className="w-full sm:w-auto bg-cream-light/10 hover:bg-cream-light/20 text-cream font-bold px-8 py-4 rounded-xl border border-cream/20 backdrop-blur-sm transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-[1.04] hover:-translate-y-1">
                <Compass size={18} className="text-ochre" />
                <span>Explore Destinations</span>
              </Link>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 z-20">
            <span className="text-xs uppercase tracking-widest text-cream/40 font-semibold">Scroll Down</span>
            <div className="w-[1.5px] h-12 bg-gradient-to-b from-ochre to-transparent animate-bounce rounded-full" />
          </div>
        </section>

        {/* COUNTER STATS SECTION */}
        <CounterSection />

        {/* INTRO SECTION */}
        <section ref={introSectionRef} className="py-24 bg-cream relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#C05C3E_0.5px,transparent_0.5px)] [background-size:32px_32px] opacity-5 pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <div className="intro-text-col space-y-6">
              <div className="inline-block bg-terracotta/10 text-terracotta font-bold text-xs uppercase px-3 py-1.5 rounded-md tracking-wider">
                Who We Are
              </div>
              <h2 className="font-bold text-3xl md:text-4xl text-slate tracking-wide">
                Living in Harmony with Nature for Centuries
              </h2>
              <div className="h-[2px] w-12 bg-ochre rounded-full" />

              <p className="text-slate/80 leading-relaxed font-light">
                The Tharu people are one of the oldest indigenous groups of Nepal's Terai plains. Traditionally forest-dwellers and master agriculturalists, our culture revolves around a deep respect for the Earth, community values, and creative handcrafts.
              </p>
              <p className="text-slate/85 leading-relaxed font-light">
                From the signature clay-painted walls adorned with wild animals to our custom woven fish-nets and clay ovens, every item in a Tharu village tells a rich story of ecological balance, beauty, and resilient survival.
              </p>

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 text-slate/90">
                  <div className="bg-forest/10 p-2 rounded-lg text-forest">
                    <ShieldCheck size={20} />
                  </div>
                  <span className="font-medium text-sm">Eco-friendly Mud Architecture</span>
                </div>
                <div className="flex items-center space-x-3 text-slate/90">
                  <div className="bg-forest/10 p-2 rounded-lg text-forest">
                    <ShieldCheck size={20} />
                  </div>
                  <span className="font-medium text-sm">Rich Folk Music & Dance</span>
                </div>
              </div>
            </div>

            <div className="intro-img-col relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 border-t-4 border-l-4 border-ochre pointer-events-none" />
              <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-4 border-r-4 border-terracotta pointer-events-none" />

              <div className="rounded-2xl overflow-hidden shadow-xl border border-terracotta/15 aspect-[4/3]">
                <img
                  src="https://scsuman.com/wp-content/uploads/2017/02/mokha_01.jpg"
                  alt="Beautiful traditional clay patterns and pottery crafts"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>

          </div>
        </section>

        {/* FEATURES GRID SECTION */}
        <section ref={featuresRef} className="py-24 bg-cream-dark relative">
          <div className="max-w-7xl mx-auto px-6 md:px-12">

            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <div className="inline-block bg-forest/10 text-forest font-bold text-xs uppercase px-3 py-1.5 rounded-md tracking-wider">
                Explore the Culture
              </div>
              <h2 className="font-bold text-3xl md:text-4xl text-slate tracking-wide">
                Experience Tharu Traditions Firsthand
              </h2>
              <p className="text-slate/75 text-sm leading-relaxed">
                Immerse yourself in three main pillars of our indigenous cultural identity: vibrant arts, ethnic culinary secrets, and breathtaking eco-destinations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              <div className="feature-card glass-card rounded-2xl p-8 hover:shadow-xl transition-all duration-500 border-t-4 border-ochre flex flex-col justify-between group card-hover-lift">
                <div className="space-y-6">
                  <div className="w-14 h-14 rounded-2xl bg-ochre/15 text-ochre flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                    <Palette size={28} />
                  </div>
                  <h3 className="font-bold text-xl text-slate">Tribal Art & Attire</h3>
                  <p className="text-slate/75 text-sm leading-relaxed">
                    Explore traditional Tharu wall murals depicting fauna and rural motifs. Admire the colorful embroidered clothing, heavy silver jewelry, and handcrafted woven mats.
                  </p>
                </div>
                <div className="pt-8">
                  <Link to="/gallery" className="text-ochre hover:text-ochre-dark font-bold text-sm flex items-center space-x-2 transition-all duration-300">
                    <span>Explore Art Gallery</span>
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              <div className="feature-card glass-card rounded-2xl p-8 hover:shadow-xl transition-all duration-500 border-t-4 border-terracotta flex flex-col justify-between group card-hover-lift">
                <div className="space-y-6">
                  <div className="w-14 h-14 rounded-2xl bg-terracotta/15 text-terracotta flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <UtensilsCrossed size={28} />
                  </div>
                  <h3 className="font-bold text-xl text-slate">Ethnic Cuisine</h3>
                  <p className="text-slate/75 text-sm leading-relaxed">
                    Indulge in ethnic culinary wonders like Ghongi (river snails), fluffy steamed Bagiya, freshly-prepared Bhakka, local varieties of fish, and flavorful Chichar rice.
                  </p>
                </div>
                <div className="pt-8">
                  <Link to="/food" className="text-terracotta hover:text-terracotta-dark font-bold text-sm flex items-center space-x-2 transition-all duration-300">
                    <span>View Traditional Dishes</span>
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              <div className="feature-card glass-card rounded-2xl p-8 hover:shadow-xl transition-all duration-500 border-t-4 border-forest flex flex-col justify-between group card-hover-lift">
                <div className="space-y-6">
                  <div className="w-14 h-14 rounded-2xl bg-forest/15 text-forest flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                    <Compass size={28} />
                  </div>
                  <h3 className="font-bold text-xl text-slate">Ecotourism & Places</h3>
                  <p className="text-slate/75 text-sm leading-relaxed">
                    Venture into the heart of Sauraha and Chitwan villages. Stay in traditional mud-and-thatch homestays and enjoy community museum walks and organic tours.
                  </p>
                </div>
                <div className="pt-8">
                  <Link to="/travel" className="text-forest hover:text-forest-dark font-bold text-sm flex items-center space-x-2 transition-all duration-300">
                    <span>Plan Eco-Journey</span>
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* FESTIVALS SECTION */}
        <FestivalsSection />

        {/* TESTIMONIALS SECTION */}
        <TestimonialsSection />

        {/* CALL TO ACTION SECTION */}
        <section ref={ctaSectionRef} className="py-24 bg-slate text-cream relative overflow-hidden border-t-4 border-ochre tharu-border-top">
          <div className="absolute inset-0 bg-[radial-gradient(#D99B26_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-5 pointer-events-none" />

          <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10 space-y-8">
            <h2 className="font-bold text-3xl md:text-5xl tracking-wide leading-tight">
              Ready to Discover the Soul of <br className="hidden md:inline" />
              the Terai Plains?
            </h2>
            <p className="text-cream/75 max-w-2xl mx-auto text-base md:text-lg font-light leading-relaxed">
              Plan your travel, discover cultural programs, book authentic clay homestays, and taste organic, home-cooked dishes in Chitwan and Sauraha today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
              <Link
                to="/travel"
                className="w-full sm:w-auto bg-ochre hover:bg-ochre-dark text-slate font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow hover:scale-[1.04] hover:-translate-y-1 hover:shadow-lg"
              >
                Plan Ecotourism Trip
              </Link>
              <Link
                to="/about"
                className="w-full sm:w-auto bg-transparent border border-cream/20 hover:bg-cream/5 text-cream font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-[1.04] hover:-translate-y-1"
              >
                Read Cultural Heritage
              </Link>
            </div>
          </div>
        </section>

      </div>
    </Transition>
  );
};

export default Home;
