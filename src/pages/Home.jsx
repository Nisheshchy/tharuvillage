import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, UtensilsCrossed, Palette, Landmark, ShieldCheck } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Transition from '../components/Transition';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroTextRef = useRef(null);
  const heroImageRef = useRef(null);
  const featuresRef = useRef(null);
  const introSectionRef = useRef(null);
  const ctaSectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Hero Entrance Timelines
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

      // 2. Feature items scroll animation
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

      // 3. Cultural Intro layout reveals
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

      // 4. CTA reveal
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
          {/* Main Hero Background image */}
          <div className="absolute inset-0 z-0">
            <img
              ref={heroImageRef}
              src="https://assets-cdn.kathmandupost.com/uploads/source/news/2025/third-party/main-1741922246.jpg"
              alt="Beautiful Nepalese Village"
              className="w-full h-full object-cover"
            />
            {/* Earthy Warm Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate/95 via-slate/60 to-slate/30" />
            <div className="absolute inset-0 bg-gradient-to-r from-terracotta/20 via-transparent to-ochre/15 mix-blend-color-add" />
          </div>

          {/* Elegant Clay Relief Grid Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#C05C3E_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-15 pointer-events-none z-10" />

          {/* Hero Content */}
          <div ref={heroTextRef} className="relative z-20 max-w-5xl mx-auto px-6 md:px-12 text-center select-none pt-12">
            <div className="hero-fade inline-flex items-center space-x-2 bg-ochre/25 text-ochre-light px-4 py-2 rounded-full border border-ochre/30 backdrop-blur-md mb-6 uppercase tracking-widest text-xs font-bold">
              <Landmark size={14} className="animate-pulse" />
              <span>Indigenous Heritage of Nepal</span>
            </div>

            <h1 className="hero-fade font-serif font-bold text-4xl sm:text-6xl md:text-7xl leading-tight tracking-wide mb-6">
              Welcome to the Heart of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ochre to-terracotta-light">Tharu Culture</span>
            </h1>

            <p className="hero-fade text-lg md:text-xl text-cream/80 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
              Step into an ancient world of artistic clay dwellings, vibrant geometric artwork, unique ethnic delicacies, and organic farming nested along Nepal's fertile plains.
            </p>

            <div className="hero-fade flex flex-col sm:flex-row justify-center items-center gap-5">
              <Link
                to="/about"
                className="w-full sm:w-auto bg-terracotta hover:bg-terracotta-dark text-cream font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center space-x-2 hover:scale-[1.02]"
              >
                <span>Discover Our Story</span>
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/travel"
                className="w-full sm:w-auto bg-cream-light/10 hover:bg-cream-light/20 text-cream font-bold px-8 py-4 rounded-xl border border-cream/20 backdrop-blur-sm transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-[1.02]"
              >
                <Compass size={18} className="text-ochre" />
                <span>Explore Destinations</span>
              </Link>
            </div>
          </div>

          {/* Smooth Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 z-20">
            <span className="text-xs uppercase tracking-widest text-cream/40 font-semibold font-sans">Scroll Down</span>
            <div className="w-[1.5px] h-12 bg-gradient-to-b from-ochre to-transparent animate-bounce rounded-full" />
          </div>
        </section>

        {/* INTRO SECTION */}
        <section ref={introSectionRef} className="py-24 bg-cream relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#C05C3E_0.5px,transparent_0.5px)] [background-size:32px_32px] opacity-5 pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Text Column */}
            <div className="intro-text-col space-y-6">
              <div className="inline-block bg-terracotta/10 text-terracotta font-bold text-xs uppercase px-3 py-1.5 rounded-md tracking-wider">
                Who We Are
              </div>
              <h2 className="font-serif font-bold text-3xl md:text-4xl text-slate tracking-wide">
                Living in Harmony with Nature for Centuries
              </h2>
              <div className="h-[2px] w-12 bg-ochre" />

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

            {/* Visual Column */}
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
              <h2 className="font-serif font-bold text-3xl md:text-4xl text-slate tracking-wide">
                Experience Tharu Traditions Firsthand
              </h2>
              <p className="text-slate/75 text-sm leading-relaxed">
                Immerse yourself in three main pillars of our indigenous cultural identity: vibrant arts, ethnic culinary secrets, and breathtaking eco-destinations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              {/* Feature 1: Art */}
              <div className="feature-card glass-card rounded-2xl p-8 hover:shadow-lg transition-all duration-500 border-t-4 border-ochre flex flex-col justify-between group">
                <div className="space-y-6">
                  <div className="w-14 h-14 rounded-2xl bg-ochre/15 text-ochre flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                    <Palette size={28} />
                  </div>
                  <h3 className="font-serif font-bold text-xl text-slate">Tribal Art & Attire</h3>
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

              {/* Feature 2: Food */}
              <div className="feature-card glass-card rounded-2xl p-8 hover:shadow-lg transition-all duration-500 border-t-4 border-terracotta flex flex-col justify-between group">
                <div className="space-y-6">
                  <div className="w-14 h-14 rounded-2xl bg-terracotta/15 text-terracotta flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <UtensilsCrossed size={28} />
                  </div>
                  <h3 className="font-serif font-bold text-xl text-slate">Ethnic Cuisine</h3>
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

              {/* Feature 3: Travel */}
              <div className="feature-card glass-card rounded-2xl p-8 hover:shadow-lg transition-all duration-500 border-t-4 border-forest flex flex-col justify-between group">
                <div className="space-y-6">
                  <div className="w-14 h-14 rounded-2xl bg-forest/15 text-forest flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                    <Compass size={28} />
                  </div>
                  <h3 className="font-serif font-bold text-xl text-slate">Ecotourism & Places</h3>
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

        {/* CALL TO ACTION SECTION */}
        <section ref={ctaSectionRef} className="py-24 bg-slate text-cream relative overflow-hidden border-t-4 border-ochre tharu-border-top">
          {/* Subtle clay background pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#D99B26_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-5 pointer-events-none" />

          <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10 space-y-8">
            <h2 className="font-serif font-bold text-3xl md:text-5xl tracking-wide leading-tight">
              Ready to Discover the Soul of <br className="hidden md:inline" />
              the Terai Plains?
            </h2>
            <p className="text-cream/75 max-w-2xl mx-auto text-base md:text-lg font-light leading-relaxed">
              Plan your travel, discover cultural programs, book authentic clay homestays, and taste organic, home-cooked dishes in Chitwan and Sauraha today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
              <Link
                to="/travel"
                className="w-full sm:w-auto bg-ochre hover:bg-ochre-dark text-slate font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow hover:scale-[1.02]"
              >
                Plan Ecotourism Trip
              </Link>
              <Link
                to="/about"
                className="w-full sm:w-auto bg-transparent border border-cream/20 hover:bg-cream/5 text-cream font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-[1.02]"
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
