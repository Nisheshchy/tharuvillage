import { useState, useEffect, useRef } from 'react';
import { Compass, MapPin, Calendar, ShieldCheck, Star, Send, User, Mail, Phone, ChevronDown } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Transition from '../components/Transition';
import { useToast } from '../components/Toast';

gsap.registerPlugin(ScrollTrigger);

const BookingForm = () => {
  const toast = useToast();
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    village: '',
    date: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.village) {
      toast('Please fill in all required fields.', 'warning');
      return;
    }
    toast(`🎉 Thank you, ${form.name}! Your inquiry for ${form.village} has been received. We'll contact you within 24 hours.`, 'success');
    setForm({ name: '', email: '', phone: '', village: '', date: '', message: '' });
  };

  return (
    <div className="glass-card rounded-3xl p-8 md:p-12 border border-terracotta/15">
      <h3 className="font-bold text-2xl text-slate mb-2">Book Your Ecotour</h3>
      <p className="text-slate/70 text-sm mb-8">Fill in the form below and our cultural coordinator will reach out within 24 hours.</p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate/60 uppercase tracking-wider">Full Name *</label>
            <div className="relative">
              <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate/40" />
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your full name"
                required
                className="form-input form-input-light pl-11"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate/60 uppercase tracking-wider">Email *</label>
            <div className="relative">
              <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate/40" />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
                className="form-input form-input-light pl-11"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate/60 uppercase tracking-wider">Phone</label>
            <div className="relative">
              <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate/40" />
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+977-XXXXXXXXXX"
                className="form-input form-input-light pl-11"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate/60 uppercase tracking-wider">Village *</label>
            <div className="relative">
              <MapPin size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate/40" />
              <select
                name="village"
                value={form.village}
                onChange={handleChange}
                required
                className="form-input form-input-light pl-11 appearance-none cursor-pointer"
              >
                <option value="">Select a village</option>
                <option value="Chitwan Tharu Village">Chitwan Tharu Village</option>
                <option value="Sauraha Tharu Village">Sauraha Tharu Village</option>
                <option value="Udayapur Tharu Village">Udayapur Tharu Village</option>
                <option value="Cultural Center">Cultural Center Model</option>
              </select>
              <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate/40 pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold text-slate/60 uppercase tracking-wider">Preferred Travel Date</label>
          <div className="relative">
            <Calendar size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate/40" />
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="form-input form-input-light pl-11"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold text-slate/60 uppercase tracking-wider">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={3}
            placeholder="Tell us about your interests, group size, or special requests..."
            className="form-input form-input-light resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-terracotta hover:bg-terracotta-dark text-cream font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-[1.02] hover:shadow-lg text-sm uppercase tracking-wider"
        >
          <Send size={16} />
          <span>Submit Booking Inquiry</span>
        </button>
      </form>
    </div>
  );
};

const TravelerReviews = () => {
  const reviewsRef = useRef(null);
  const reviews = [
    {
      name: "Anna K.",
      country: "Austria",
      text: "The homestay in Sauraha was absolutely magical. Waking up to bird songs, eating fresh Bagiya for breakfast, and learning clay pottery from village elders — unforgettable!",
      rating: 5,
    },
    {
      name: "James P.",
      country: "USA",
      text: "Our family spent 3 days in Chitwan Tharu Village. The kids loved the stick dance performance and we all enjoyed the organic farm tour. Best cultural experience in Nepal.",
      rating: 5,
    },
    {
      name: "Priya S.",
      country: "India",
      text: "Udayapur village is a hidden gem! So peaceful, so authentic. The Dehari clay craft walk was fascinating and the locals were incredibly welcoming.",
      rating: 4,
    },
  ];

  useEffect(() => {
    const items = reviewsRef.current?.querySelectorAll('.review-card');
    if (!items) return;
    gsap.fromTo(
      items,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: reviewsRef.current,
          start: 'top 85%',
        },
      }
    );
  }, []);

  return (
    <section ref={reviewsRef} className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
        <div className="inline-flex items-center space-x-2 bg-ochre/15 text-ochre px-4 py-2 rounded-full border border-ochre/25 uppercase tracking-widest text-xs font-bold">
          <Star size={14} />
          <span>Traveler Reviews</span>
        </div>
        <h2 className="font-bold text-3xl text-slate tracking-wide">
          Experiences from <span className="text-terracotta">Our Guests</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <div key={i} className="review-card glass-card rounded-2xl p-8 border border-terracotta/10 hover:shadow-lg transition-all duration-300 card-hover-lift">
            <div className="flex space-x-1 mb-4">
              {Array.from({ length: r.rating }).map((_, j) => (
                <Star key={j} size={16} className="text-ochre fill-ochre" />
              ))}
            </div>
            <p className="text-slate/75 text-sm leading-relaxed font-light mb-6 italic">"{r.text}"</p>
            <div className="border-t border-terracotta/10 pt-4">
              <p className="font-bold text-slate text-sm">{r.name}</p>
              <p className="text-slate/50 text-xs">{r.country}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Travel = () => {
  const containerRef = useRef(null);
  const toast = useToast();

  const places = [
    {
      title: "Chitwan Tharu Village",
      location: "Chitwan District, Terai Plains",
      desc: "Located in the green buffer zone of Chitwan National Park. Wander through authentic thatched-roof mud dwellings, take guided walks in the community forests, and experience the majestic Tharu stick dance in the evening.",
      highlights: ["National Park Walks", "Cultural Museum Tour", "Traditional Stick Dances"],
      image: "https://chitwanjunglesafaritour.com/wp-content/uploads/2025/07/jagatpur-lodge-Tharu-village.webp",
      bestSeason: "October to March",
      price: "From $35/night",
    },
    {
      title: "Sauraha Tharu Village",
      location: "Rapti River Banks, Chitwan",
      desc: "The primary ecotourism hub of the plains. Sleep in traditional clay homestays, embark on organic crop-gathering tours, and sit by the Rapti River to witness jaw-dropping sunsets alongside local fishermen.",
      highlights: ["Traditional Homestays", "Rapti River Sunsets", "Organic Farm Tours"],
      image: "https://r-xx.bstatic.com/xdata/images/hotel/608x352/779333895.webp?k=7f4a22fbe794342015ab6fb4240f3b0b7ad21606aaa8bfc6ea1258d6f834b601&o=",
      bestSeason: "September to April",
      price: "From $28/night",
    },
    {
      title: "Udayapur Tharu Village",
      location: "Near Koshi Tappu Wildlife Reserve",
      desc: "An organic farming community preserving authentic Tharu household items like 'Dehari' (clay grain containers) and custom fishing traps. Highly secluded and perfect for peaceful birdwatching.",
      highlights: ["Dehari Clay Craft Walk", "Wildlife Reserve Hikes", "Indigenous Fish Taps"],
      image: "https://english.onlinekhabar.com/wp-content/uploads/2023/11/Bahedwa-Tharu-Community-Homestay@Udayapur8.jpg",
      bestSeason: "November to February",
      price: "From $22/night",
    },
    {
      title: "Cultural Center Model",
      location: "Tharu Cultural Center, Chitwan",
      desc: "An immersive museum model showcasing traditional mud wall carvings, clay fireplaces (chulha), and hand-woven netting. Live daily clay pottery workshops led by village elders.",
      highlights: ["Wall relief workshop", "Live pottery crafting", "Tribal folklore storytelling"],
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800",
      bestSeason: "Open Year-Round",
      price: "Entry: $5",
    }
  ];

  useEffect(() => {
    const blocks = containerRef.current.querySelectorAll('.place-block');

    blocks.forEach((block) => {
      const leftCol = block.querySelector('.left-col');
      const rightCol = block.querySelector('.right-col');

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

  const handleBookNow = (placeName) => {
    toast(`🏠 Booking request for ${placeName} noted! Scroll down to fill the booking form.`, 'info');
  };

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
          <h1 className="font-bold text-4xl md:text-6xl text-slate tracking-wide">
            Ecotourism & <span className="text-terracotta">Travel</span>
          </h1>
          <div className="h-[2px] w-20 bg-ochre mx-auto rounded-full" />
          <p className="text-lg text-slate/75 leading-relaxed font-light max-w-2xl mx-auto">
            Journey into our beautiful villages. Experience warm homestays, guided wildlife tours, and local pottery crafting classes directly from indigenous hosts.
          </p>
        </section>

        {/* DETAILED PLACES TIMELINE */}
        <section ref={containerRef} className="max-w-7xl mx-auto px-6 md:px-12 space-y-32 mb-32">
          {places.map((place, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={i}
                className="place-block grid grid-cols-1 lg:grid-cols-2 gap-16 items-center overflow-hidden"
              >
                <div className={`left-col space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="flex items-center space-x-2 text-terracotta text-sm font-medium">
                    <MapPin size={18} />
                    <span>{place.location}</span>
                  </div>

                  <h2 className="font-bold text-3xl md:text-4xl text-slate leading-tight">
                    {place.title}
                  </h2>
                  <div className="h-[2px] w-12 bg-ochre rounded-full" />

                  <p className="text-slate/80 leading-relaxed font-light">
                    {place.desc}
                  </p>

                  {/* Price tag */}
                  {place.price && (
                    <div className="inline-block bg-forest/10 text-forest font-bold text-sm px-4 py-2 rounded-xl border border-forest/15">
                      {place.price}
                    </div>
                  )}

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

                  <div className="flex items-center space-x-3 pt-4 border-t border-terracotta/5">
                    <Calendar size={18} className="text-ochre" />
                    <span className="text-xs text-slate/70">
                      Best Time to Visit: <strong className="text-slate font-medium">{place.bestSeason}</strong>
                    </span>
                  </div>

                  {/* Book Now Button */}
                  <button
                    onClick={() => handleBookNow(place.title)}
                    className="bg-terracotta hover:bg-terracotta-dark text-cream font-bold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-[1.04] hover:shadow-lg text-sm uppercase tracking-wider flex items-center space-x-2 mt-4"
                  >
                    <Compass size={16} />
                    <span>Book Now</span>
                  </button>
                </div>

                <div className={`right-col relative ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
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

        {/* TRAVELER REVIEWS */}
        <TravelerReviews />

        {/* BOOKING FORM */}
        <section className="max-w-4xl mx-auto px-6 md:px-12 mt-28">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
            <div className="inline-flex items-center space-x-2 bg-terracotta/10 text-terracotta px-4 py-2 rounded-full border border-terracotta/20 uppercase tracking-widest text-xs font-bold">
              <Send size={14} />
              <span>Start Planning</span>
            </div>
            <h2 className="font-bold text-3xl md:text-4xl text-slate tracking-wide">
              Book Your <span className="text-terracotta">Village Stay</span>
            </h2>
            <p className="text-slate/75 text-sm leading-relaxed">
              Ready to experience the Tharu way of life? Fill out the inquiry form below and our team will help you plan the perfect cultural ecotour.
            </p>
          </div>

          <BookingForm />
        </section>

      </div>
    </Transition>
  );
};

export default Travel;
