import { useEffect, useRef } from 'react';
import { Leaf, Award, Users, ShieldAlert, Landmark, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Transition from '../components/Transition';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const headerRef = useRef(null);
  const storyRef = useRef(null);
  const valuesRef = useRef(null);
  const imageGridRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Header fade & down
      gsap.fromTo(
        headerRef.current.querySelectorAll('.animate-header'),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power4.out', delay: 0.1 }
      );

      // 2. Story column stagger
      gsap.fromTo(
        storyRef.current.querySelectorAll('.story-animate'),
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: storyRef.current,
            start: 'top 80%',
          }
        }
      );

      // 3. Values card animations
      gsap.fromTo(
        valuesRef.current.querySelectorAll('.value-card'),
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: valuesRef.current,
            start: 'top 85%',
          }
        }
      );

      // 4. Image grid zoom-reveals
      gsap.fromTo(
        imageGridRef.current.querySelectorAll('.grid-img'),
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.15,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: imageGridRef.current,
            start: 'top 85%',
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const coreValues = [
    {
      icon: <Leaf className="text-forest" size={24} />,
      title: "Ecological Harmony",
      desc: "Every house is crafted from mud, clay, straw, and dung, using natural elements to keep interiors perfectly cool in summer and warm in winter."
    },
    {
      icon: <Users className="text-terracotta" size={24} />,
      title: "Community Ethos",
      desc: "Our villages operate as tight-knit networks. From collective rice harvesting to group folk dancing (Lathi Nach), we thrive on community collaboration."
    },
    {
      icon: <Award className="text-ochre" size={24} />,
      title: "Artistic Preservation",
      desc: "Passing down traditional mud relief carvings and embroidery motifs from mothers to daughters for generations keeps our identity alive."
    }
  ];

  return (
    <Transition>
      <div className="pt-24 md:pt-32 pb-24 bg-cream relative">
        <div className="absolute inset-0 bg-[radial-gradient(#C05C3E_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-5 pointer-events-none" />

        {/* 1. HEADER SECTION */}
        <section ref={headerRef} className="max-w-4xl mx-auto px-6 text-center mb-20 space-y-6">
          <div className="animate-header inline-flex items-center space-x-2 bg-terracotta/10 text-terracotta px-4 py-2 rounded-full border border-terracotta/20 mb-2 uppercase tracking-widest text-xs font-bold">
            <Sparkles size={14} />
            <span>Discover Our Heritage</span>
          </div>
          <h1 className="animate-header font-serif font-bold text-4xl md:text-6xl text-slate tracking-wide">
            The Story of <span className="text-terracotta">Tharu Village</span>
          </h1>
          <div className="animate-header h-[2px] w-20 bg-ochre mx-auto" />
          <p className="animate-header text-lg md:text-xl text-slate/75 leading-relaxed font-light max-w-3xl mx-auto">
            Discover the legacy, deep-rooted traditions, and organic lifestyle of Nepal's ancient Terai custodians.
          </p>
        </section>

        {/* 2. OUR STORY & GRAPHIC SECTION */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 mb-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Story Texts */}
            <div ref={storyRef} className="space-y-6 story-animate">
              <h2 className="font-serif font-bold text-2xl md:text-3xl text-slate tracking-wide">
                Origins & Custodians of the Plains
              </h2>
              <div className="h-[2px] w-10 bg-terracotta" />

              <p className="text-slate/85 leading-relaxed font-light text-base md:text-lg">
                For millennia, the Tharu people have made the rich, sub-tropical forest borderland of Nepal's southern plains (Terai) their home. Having survived isolated in deep malaria-infested jungles, our ancestors developed a distinct resilience, eco-centric spiritual systems, and an unmatched understanding of local flora and fauna.
              </p>

              <p className="text-slate/80 leading-relaxed font-light">
                Our mud-relief architecture is a living testimony of this relationship. Every clay wall is molded by hand, smoothed using natural binders, and then painted with motifs of peacocks, fish, deer, and geometric patterns representing nature's abundance and protective deities.
              </p>

              <p className="text-slate/80 leading-relaxed font-light">
                Today, Tharu Village communities open their doors to ecotourists, inviting them to step inside these sacred homes, listen to tribal folklore, and share inside stories of conservation, farming, and ancestral crafts.
              </p>
            </div>

            {/* Visual Mosaic Grid */}
            <div ref={imageGridRef} className="grid grid-cols-2 gap-4">
              <div className="grid-img rounded-2xl overflow-hidden aspect-[4/5] border border-terracotta/10 shadow-md">
                <img
                  src="https://ajadynasty.com/wp-content/uploads/2022/06/16642019622_ecc3c0a489_o-1.jpg"
                  alt="Rural Nepalese Village Life"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="space-y-4">
                <div className="grid-img rounded-2xl overflow-hidden aspect-square border border-terracotta/10 shadow-md">
                  <img
                    src="https://www.chitwantourism.com/wp-content/uploads/2024/01/tharu-village-gallery-5.jpg"
                    alt="Organic Agricultural Fields"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="grid-img rounded-2xl overflow-hidden aspect-square border border-terracotta/10 shadow-md">
                  <img
                    src="https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/482008589_960728476177172_8655726369359576767_n.jpg?stp=dst-jpg_s1080x2048_tt6&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Ys4rYLLVVDUQ7kNvwHi4ppw&_nc_oc=AdqC35-aNzNnYZPHK4rXMewA8aOZb2HNCTjsY97zzyCnjdMOH236gd1L8s8rnYb_dRDh1pOOs7fUhXxUHQeeAT-D&_nc_zt=23&_nc_ht=scontent.fbir1-1.fna&_nc_gid=dvAkBzkg-iA5GlfkYhSJ2Q&_nc_ss=7b289&oh=00_Af6icTE02QYdPOFPx1l3jcHBFjhAX7JEhb5X-znR--erDA&oe=6A1F8B9B"
                    alt="Serene Village Sunrise Landscape"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 3. CORE VALUES & PHILOSOPHY */}
        <section ref={valuesRef} className="max-w-7xl mx-auto px-6 md:px-12">

          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center space-x-2 text-forest bg-forest/10 font-bold text-xs uppercase px-3 py-1.5 rounded-md tracking-wider">
              <Landmark size={14} />
              <span>Cultural Philosophy</span>
            </div>
            <h2 className="font-serif font-bold text-3xl text-slate tracking-wide">
              Pillars of the Tharu Way of Life
            </h2>
            <p className="text-slate/75 text-sm">
              We live by three sacred pillars that keep our heritage aligned with modern sustainable ecotourism goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, i) => (
              <div
                key={i}
                className="value-card glass-card rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border-l-4 border-ochre flex flex-col justify-start group"
              >
                <div className="w-12 h-12 rounded-xl bg-cream-dark flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
                  {value.icon}
                </div>
                <h3 className="font-serif font-bold text-xl text-slate mb-3">{value.title}</h3>
                <p className="text-slate/75 text-sm leading-relaxed font-light">{value.desc}</p>
              </div>
            ))}
          </div>

        </section>

      </div>
    </Transition>
  );
};

export default About;
