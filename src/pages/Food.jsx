import { useEffect, useRef } from 'react';
import { Utensils, Heart, ShoppingBag, Landmark } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Transition from '../components/Transition';

gsap.registerPlugin(ScrollTrigger);

const Food = () => {
  const cardsRef = useRef(null);

  const dishes = [
    {
      name: "Ghongi",
      type: "Seafood Delicacy",
      desc: "Freshwater river snails cleaned, boiled with turmeric and local spices, and simmered in a rich flaxseed and lentil soup. Eaten by sucking the meat directly from the shell.",
      ingredients: ["Freshwater Snails", "Flaxseed Powder", "Ginger", "Chili", "Garlic"],
      image: "https://whatthenepal.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-17-at-13.23.13.jpeg",
    },
    {
      name: "Sidhra",
      type: "Savory Side",
      desc: "Traditional dried small fish ground together with taro roots, local herbs, and fiery green chilies, then shaped into cakes and dried. Cooked into a thick, highly-aromatic gravy.",
      ingredients: ["Dried Small Fish", "Taro Stems", "Chili Paste", "Mustard Oil"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU_tDmThmP0rJ9w3Him-_eJagr5HFFbletBg&s",
    },
    {
      name: "Bagiya",
      type: "Steamed Dumpling",
      desc: "Delicate steamed rice flour pockets with iconic tapered ends. Stuffed with savory spiced lentils (chana dal) or sweet molasses (sakhar) and sesame seeds, steamed over clay ovens.",
      ingredients: ["Rice Flour", "Chana Dal", "Molasses", "Sesame Seeds"],
      image: "https://thebuzznepal.com/wp-content/uploads/2024/08/Untitled-design-14-2.png",
    },
    {
      name: "Dhikri",
      type: "Festive Staple",
      desc: "Made from fresh rice flour mixed with warm water, kneaded, and shaped into unique cylindrical shapes representing deities or animals. Steamed and served during Dashain and Jitiya.",
      ingredients: ["Fine Rice Flour", "Warm Water", "Steamed Fresh"],
      image: "https://pbs.twimg.com/media/FUfyXGjagAA7yeV.jpg",
    },
    {
      name: "Bhakka",
      type: "Breakfast Cake",
      desc: "Light, fluffy, and spongy steamed rice cakes. Prepared by steaming damp rice flour in a small clay cup nested over a boiling water pot. Served hot with tomato pickle or chili chutney.",
      ingredients: ["Coarse Rice Flour", "Steaming Water", "Tomato Pickle"],
      image: "https://admin.buddhaair.com/photos/3/Bhakka---Rice-Cake.jpg",
    },
    {
      name: "Chichar Rice",
      type: "Energy Staple",
      desc: "A rich, steamed sticky rice variety (Anadi rice) that is highly nutritious. Packaged and eaten by farmers for prolonged stamina during demanding paddy harvesting seasons.",
      ingredients: ["Anadi Sticky Rice", "Ghee", "Milk (Optional)"],
      image: "https://admin.buddhaair.com/photos/3/the-taste-of-south-a-story-featured-at-yatra-magazine-image-buddha-air.png",
    },
    {
      name: "Tele Paur",
      type: "Sweet Fritter",
      desc: "Crispy, deep-fried rice flour ring fritters prepared during major celebrations. Sweetened with brown sugar and flavored with cardamom, offering a delightful crunchy bite.",
      ingredients: ["Rice Flour", "Brown Sugar", "Cardamom", "Mustard Oil"],
      image: "https://i.ytimg.com/vi/3h10eHDoRt4/maxresdefault.jpg",
    },

    {
      name: "telahe roti ",
      type: "fry  roti",
      desc: "Delicate steamed rice flour pockets with iconic tapered ends. Stuffed with savory spiced lentils (chana dal) or sweet molasses (sakhar) and sesame seeds, steamed over clay ovens.",
      ingredients: ["Rice Flour", "Mustard Oil"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsNBxw_cZ2niHrQSTSH_EFjso5Cj25nYe1og&s",
    },



  ];

  useEffect(() => {
    const cards = cardsRef.current.querySelectorAll('.dish-card');

    gsap.fromTo(
      cards,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 85%',
        }
      }
    );
  }, []);

  return (
    <Transition>
      <div className="pt-24 md:pt-32 pb-24 bg-cream relative">
        <div className="absolute inset-0 bg-[radial-gradient(#C05C3E_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-5 pointer-events-none" />

        {/* HEADER SECTION */}
        <section className="max-w-4xl mx-auto px-6 text-center mb-20 space-y-6">
          <div className="inline-flex items-center space-x-2 bg-terracotta/10 text-terracotta px-4 py-2 rounded-full border border-terracotta/20 uppercase tracking-widest text-xs font-bold">
            <Utensils size={14} />
            <span>Gastronomic Jewels</span>
          </div>
          <h1 className="font-serif font-bold text-4xl md:text-6xl text-slate tracking-wide">
            Traditional Tharu
          </h1>
          <div className="h-[2px] w-20 bg-ochre mx-auto" />
          <p className="text-lg text-slate/75 leading-relaxed font-light max-w-2xl mx-auto">
            Taste the ancient flavors of the Terai. Our indigenous cuisine utilizes fresh river catch, organic sticky rice, and local herbs cooked in traditional clay pots.
          </p>
        </section>

        {/* FOOD CARDS CONTAINER */}
        <section className="max-w-7xl mx-auto px-6 md:px-12">
          <div
            ref={cardsRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {dishes.map((dish, i) => (
              <div
                key={i}
                className="dish-card bg-cream-light rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-terracotta/10 flex flex-col justify-between group"
              >
                {/* Visual section */}
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-dark">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate/60 to-transparent" />
                  <span className="absolute bottom-4 left-6 bg-ochre text-slate text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full">
                    {dish.type}
                  </span>
                </div>

                {/* Description content */}
                <div className="p-6 md:p-8 flex-grow flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <h3 className="font-serif font-bold text-2xl text-slate transition-colors duration-300 group-hover:text-terracotta">
                      {dish.name}
                    </h3>
                    <p className="text-slate/75 text-sm leading-relaxed font-light">
                      {dish.desc}
                    </p>
                  </div>

                  {/* Ingredients array */}
                  <div className="space-y-3 pt-4 border-t border-terracotta/5">
                    <span className="text-[10px] uppercase tracking-widest text-slate/40 font-bold block">Key Ingredients</span>
                    <div className="flex flex-wrap gap-1.5">
                      {dish.ingredients.map((ing, k) => (
                        <span
                          key={k}
                          className="bg-cream-dark text-slate/80 text-[10px] font-medium px-2.5 py-1 rounded-md"
                        >
                          {ing}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Order Placeholder */}
                <div className="px-6 md:px-8 pb-8">
                  <button
                    onClick={() => alert(`Enjoy the virtual taste of ${dish.name}! A local cooking guide will be featured soon.`)}
                    className="w-full bg-transparent group-hover:bg-terracotta hover:!bg-terracotta-dark border border-terracotta/25 group-hover:border-transparent text-terracotta group-hover:text-cream font-semibold text-xs uppercase tracking-wider py-3 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Landmark size={14} />
                    <span>Locate Cooking Class</span>
                  </button>
                </div>

              </div>
            ))}
          </div>
        </section>

      </div>
    </Transition>
  );
};

export default Food;
