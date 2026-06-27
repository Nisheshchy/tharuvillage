import { useState, useEffect, useRef } from 'react';
import { Leaf, Award, Users, Landmark, Sparkles, ChevronDown, Clock, BookOpen, Zap } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Transition from '../components/Transition';

gsap.registerPlugin(ScrollTrigger);

const AccordionItem = ({ title, content, isOpen, onToggle }) => (
  <div className="glass-card rounded-2xl overflow-hidden transition-all duration-300 border border-terracotta/10 hover:border-terracotta/25">
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between p-6 text-left hover:bg-terracotta/5 transition-colors duration-300"
    >
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 rounded-xl bg-terracotta/10 text-terracotta flex items-center justify-center">
          <BookOpen size={18} />
        </div>
        <h4 className="font-bold text-base text-slate">{title}</h4>
      </div>
      <ChevronDown
        size={20}
        className={`text-terracotta transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
      />
    </button>
    <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
      <div className="px-6 pb-6 pt-0 text-slate/75 text-sm leading-relaxed font-light border-t border-terracotta/5">
        <div className="pt-4">{content}</div>
      </div>
    </div>
  </div>
);

const About = () => {
  const [openAccordion, setOpenAccordion] = useState(null);
  const headerRef = useRef(null);
  const storyRef = useRef(null);
  const valuesRef = useRef(null);
  const imageGridRef = useRef(null);
  const timelineRef = useRef(null);
  const accordionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current.querySelectorAll('.animate-header'),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power4.out', delay: 0.1 }
      );

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

      // Timeline animation
      const timelineItems = timelineRef.current?.querySelectorAll('.timeline-item');
      if (timelineItems) {
        gsap.fromTo(
          timelineItems,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: timelineRef.current,
              start: 'top 80%',
            }
          }
        );
      }

      // Accordion animation
      const accItems = accordionRef.current?.querySelectorAll('.accordion-item');
      if (accItems) {
        gsap.fromTo(
          accItems,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: accordionRef.current,
              start: 'top 85%',
            }
          }
        );
      }
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

  const timelineEvents = [
    {
      year: "Ancient Era",
      title: "Origins in the Terai",
      desc: "Tharu people settle in Nepal's southern Terai plains, developing unique resistance to malaria and deep knowledge of local ecology."
    },
    {
      year: "Medieval Period",
      title: "Cultural Flourishing",
      desc: "Distinct clay-relief architecture emerges. Geometric wall murals, silver jewelry, and woven crafts become defining artistic traditions."
    },
    {
      year: "18th Century",
      title: "Kingdom Recognition",
      desc: "Tharu communities gain recognition as skilled agriculturalists, supplying rice and organic produce across Nepal's trade routes."
    },
    {
      year: "20th Century",
      title: "Heritage Preservation",
      desc: "Modern Tharu cultural centers established. Traditional dances, pottery, and folklore documented and shared with the world."
    },
    {
      year: "Present Day",
      title: "Ecotourism & Global Connection",
      desc: "Tharu villages welcome global visitors. Homestays, museum tours, and organic farming experiences connect ancient traditions with the modern world."
    },
  ];

  const accordionData = [
    {
      title: "What makes Tharu architecture unique?",
      content: "Tharu homes are built entirely from natural materials — mud, clay, straw, and cattle dung. The walls are hand-smoothed and painted with geometric patterns depicting animals, deities, and nature. These structures are naturally insulated, keeping interiors cool in summer and warm in winter — a brilliant example of sustainable architecture predating modern green building by centuries."
    },
    {
      title: "What is the significance of Tharu wall art?",
      content: "Tharu wall murals (known as Mokha art) are spiritual expressions painted on exterior and interior walls. Each symbol — from peacocks representing long life to fish representing fertility — carries deep cultural meaning. The art is traditionally passed from mother to daughter, making every home's artwork unique to the family's lineage and beliefs."
    },
    {
      title: "How can visitors experience Tharu culture?",
      content: "Visitors can stay in authentic mud-and-thatch homestays in Chitwan and Sauraha villages. Activities include guided village walks, traditional stick dance performances (Lathi Nach), clay pottery workshops, organic farm tours, and tasting traditional dishes like Ghongi and Bagiya prepared by village elders."
    },
    {
      title: "What is the Tharu relationship with nature?",
      content: "The Tharu people have a profound ecological consciousness. They practice organic farming without chemicals, use every part of harvested crops, and maintain sacred groves (forest patches) for spiritual and ecological purposes. Their traditional fishing methods are sustainable, and they believe the Earth is a living entity deserving of respect and care."
    },
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
          <h1 className="animate-header font-bold text-4xl md:text-6xl text-slate tracking-wide">
            The Story of <span className="text-terracotta">Tharu Village</span>
          </h1>
          <div className="animate-header h-[2px] w-20 bg-ochre mx-auto rounded-full" />
          <p className="animate-header text-lg md:text-xl text-slate/75 leading-relaxed font-light max-w-3xl mx-auto">
            Discover the legacy, deep-rooted traditions, and organic lifestyle of Nepal's ancient Terai custodians.
          </p>
        </section>

        {/* 2. OUR STORY & GRAPHIC SECTION */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 mb-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <div ref={storyRef} className="space-y-6 story-animate">
              <h2 className="font-bold text-2xl md:text-3xl text-slate tracking-wide">
                Origins & Custodians of the Plains
              </h2>
              <div className="h-[2px] w-10 bg-terracotta rounded-full" />

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
                    src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800"
                    alt="Serene Village Sunrise Landscape"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 3. TIMELINE SECTION */}
        <section ref={timelineRef} className="max-w-5xl mx-auto px-6 md:px-12 mb-28">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center space-x-2 text-ochre bg-ochre/10 font-bold text-xs uppercase px-3 py-1.5 rounded-md tracking-wider">
              <Clock size={14} />
              <span>Through the Ages</span>
            </div>
            <h2 className="font-bold text-3xl text-slate tracking-wide">
              Tharu Cultural <span className="text-terracotta">Timeline</span>
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-terracotta/20 md:-translate-x-[1px]" />

            <div className="space-y-12">
              {timelineEvents.map((event, i) => (
                <div
                  key={i}
                  className={`timeline-item relative flex items-start gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-terracotta rounded-full border-4 border-cream -translate-x-[7px] md:-translate-x-[8px] mt-2 z-10 pulse-glow" />

                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                    <span className="text-ochre font-bold text-xs uppercase tracking-widest">{event.year}</span>
                    <h3 className="font-bold text-lg text-slate mt-1">{event.title}</h3>
                    <p className="text-slate/70 text-sm leading-relaxed font-light mt-2">{event.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. CORE VALUES & PHILOSOPHY */}
        <section ref={valuesRef} className="max-w-7xl mx-auto px-6 md:px-12 mb-28">

          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center space-x-2 text-forest bg-forest/10 font-bold text-xs uppercase px-3 py-1.5 rounded-md tracking-wider">
              <Landmark size={14} />
              <span>Cultural Philosophy</span>
            </div>
            <h2 className="font-bold text-3xl text-slate tracking-wide">
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
                className="value-card glass-card rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-ochre flex flex-col justify-start group card-hover-lift"
              >
                <div className="w-12 h-12 rounded-xl bg-cream-dark flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
                  {value.icon}
                </div>
                <h3 className="font-bold text-xl text-slate mb-3">{value.title}</h3>
                <p className="text-slate/75 text-sm leading-relaxed font-light">{value.desc}</p>
              </div>
            ))}
          </div>

        </section>

        {/* 5. DID YOU KNOW? ACCORDION */}
        <section ref={accordionRef} className="max-w-3xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12 space-y-4">
            <div className="inline-flex items-center space-x-2 text-terracotta bg-terracotta/10 font-bold text-xs uppercase px-3 py-1.5 rounded-md tracking-wider">
              <Zap size={14} />
              <span>Discover More</span>
            </div>
            <h2 className="font-bold text-3xl text-slate tracking-wide">
              Did You <span className="text-terracotta">Know?</span>
            </h2>
          </div>

          <div className="space-y-4">
            {accordionData.map((item, i) => (
              <div key={i} className="accordion-item">
                <AccordionItem
                  title={item.title}
                  content={item.content}
                  isOpen={openAccordion === i}
                  onToggle={() => setOpenAccordion(openAccordion === i ? null : i)}
                />
              </div>
            ))}
          </div>
        </section>

      </div>
    </Transition>
  );
};

export default About;
