import { useState, useEffect, useRef } from 'react';
import { Utensils, Landmark, Flame, Clock, Star } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Transition from '../components/Transition';
import { useToast } from '../components/Toast';

gsap.registerPlugin(ScrollTrigger);

const Food = () => {
  const toast = useToast();
  const cardsRef = useRef(null);
  const [expandedDish, setExpandedDish] = useState(null);

  const dishes = [
    {
      name: "Ghongi",
      type: "Seafood Delicacy",
      featured: true,
      desc: "Freshwater river snails cleaned, boiled with turmeric and local spices, and simmered in a rich flaxseed and lentil soup. Eaten by sucking the meat directly from the shell.",
      ingredients: ["Freshwater Snails", "Flaxseed Powder", "Ginger", "Chili", "Garlic"],
      cookingTime: "45 mins",
      difficulty: "Medium",
      image: "https://whatthenepal.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-17-at-13.23.13.jpeg",
    },
    {
      name: "Sidhra",
      type: "Savory Side",
      featured: false,
      desc: "Traditional dried small fish ground together with taro roots, local herbs, and fiery green chilies, then shaped into cakes and dried. Cooked into a thick, highly-aromatic gravy.",
      ingredients: ["Dried Small Fish", "Taro Stems", "Chili Paste", "Mustard Oil"],
      cookingTime: "60 mins",
      difficulty: "Hard",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU_tDmThmP0rJ9w3Him-_eJagr5HFFbletBg&s",
    },
    {
      name: "Bagiya",
      type: "Steamed Dumpling",
      featured: false,
      desc: "Delicate steamed rice flour pockets with iconic tapered ends. Stuffed with savory spiced lentils (chana dal) or sweet molasses (sakhar) and sesame seeds, steamed over clay ovens.",
      ingredients: ["Rice Flour", "Chana Dal", "Molasses", "Sesame Seeds"],
      cookingTime: "30 mins",
      difficulty: "Easy",
      image: "https://thebuzznepal.com/wp-content/uploads/2024/08/Untitled-design-14-2.png",
    },
    {
      name: "Dhikri",
      type: "Festive Staple",
      featured: false,
      desc: "Made from fresh rice flour mixed with warm water, kneaded, and shaped into unique cylindrical shapes representing deities or animals. Steamed and served during Dashain and Jitiya.",
      ingredients: ["Fine Rice Flour", "Warm Water", "Steamed Fresh"],
      cookingTime: "50 mins",
      difficulty: "Medium",
      image: "https://pbs.twimg.com/media/FUfyXGjagAA7yeV.jpg",
    },
    {
      name: "Bhakka",
      type: "Breakfast Cake",
      featured: false,
      desc: "Light, fluffy, and spongy steamed rice cakes. Prepared by steaming damp rice flour in a small clay cup nested over a boiling water pot. Served hot with tomato pickle or chili chutney.",
      ingredients: ["Coarse Rice Flour", "Steaming Water", "Tomato Pickle"],
      cookingTime: "20 mins",
      difficulty: "Easy",
      image: "https://admin.buddhaair.com/photos/3/Bhakka---Rice-Cake.jpg",
    },
    {
      name: "Chichar Rice",
      type: "Energy Staple",
      featured: false,
      desc: "A rich, steamed sticky rice variety (Anadi rice) that is highly nutritious. Packaged and eaten by farmers for prolonged stamina during demanding paddy harvesting seasons.",
      ingredients: ["Anadi Sticky Rice", "Ghee", "Milk (Optional)"],
      cookingTime: "35 mins",
      difficulty: "Easy",
      image: "https://admin.buddhaair.com/photos/3/the-taste-of-south-a-story-featured-at-yatra-magazine-image-buddha-air.png",
    },
    {
      name: "Tele Paur",
      type: "Sweet Fritter",
      featured: false,
      desc: "Crispy, deep-fried rice flour ring fritters prepared during major celebrations. Sweetened with brown sugar and flavored with cardamom, offering a delightful crunchy bite.",
      ingredients: ["Rice Flour", "Brown Sugar", "Cardamom", "Mustard Oil"],
      cookingTime: "25 mins",
      difficulty: "Easy",
      image: "https://i.ytimg.com/vi/3h10eHDoRt4/maxresdefault.jpg",
    },
    {
      name: "Telahe Roti",
      type: "Fried Bread",
      featured: false,
      desc: "Traditional Tharu fried bread made from rice flour dough, deep-fried in mustard oil until golden and crispy. A staple comfort food served with spicy pickles and curries.",
      ingredients: ["Rice Flour", "Mustard Oil", "Salt", "Water"],
      cookingTime: "15 mins",
      difficulty: "Easy",
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

  const handleCookingClass = (dishName) => {
    toast(`🍳 A local cooking class for ${dishName} is coming soon! Stay tuned for booking details.`, 'info');
  };

  const featuredDish = dishes.find(d => d.featured);

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
          <h1 className="font-bold text-4xl md:text-6xl text-slate tracking-wide">
            Traditional Tharu <span className="text-terracotta">Cuisine</span>
          </h1>
          <div className="h-[2px] w-20 bg-ochre mx-auto rounded-full" />
          <p className="text-lg text-slate/75 leading-relaxed font-light max-w-2xl mx-auto">
            Taste the ancient flavors of the Terai. Our indigenous cuisine utilizes fresh river catch, organic sticky rice, and local herbs cooked in traditional clay pots.
          </p>
        </section>

        {/* RECIPE OF THE DAY - FEATURED DISH */}
        {featuredDish && (
          <section className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
            <div className="relative overflow-hidden rounded-3xl bg-slate text-cream border-t-4 border-ochre">
              <div className="absolute inset-0 bg-[radial-gradient(#D99B26_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-5 pointer-events-none" />
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative aspect-[4/3] lg:aspect-auto">
                  <img
                    src={featuredDish.image}
                    alt={featuredDish.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate/80 lg:block hidden" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate/80 to-transparent lg:hidden" />
                  <div className="absolute top-4 left-4 bg-ochre text-slate text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full flex items-center space-x-2">
                    <Star size={14} className="fill-slate" />
                    <span>Recipe of the Day</span>
                  </div>
                </div>
                <div className="relative p-10 lg:p-14 flex flex-col justify-center space-y-6">
                  <div>
                    <span className="text-ochre text-xs font-bold uppercase tracking-widest">{featuredDish.type}</span>
                    <h2 className="font-bold text-3xl md:text-4xl mt-2">{featuredDish.name}</h2>
                  </div>
                  <p className="text-cream/80 leading-relaxed font-light">{featuredDish.desc}</p>
                  <div className="flex items-center space-x-6 text-sm">
                    <div className="flex items-center space-x-2 text-ochre">
                      <Clock size={16} />
                      <span>{featuredDish.cookingTime}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-ochre">
                      <Flame size={16} />
                      <span>{featuredDish.difficulty}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCookingClass(featuredDish.name)}
                    className="bg-ochre hover:bg-ochre-dark text-slate font-bold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-[1.04] hover:shadow-lg self-start flex items-center space-x-2"
                  >
                    <Landmark size={16} />
                    <span>Join Cooking Class</span>
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* FOOD CARDS CONTAINER */}
        <section className="max-w-7xl mx-auto px-6 md:px-12">
          <div
            ref={cardsRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {dishes.filter(d => !d.featured).map((dish, i) => (
              <div
                key={i}
                className="dish-card bg-cream-light rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-terracotta/10 flex flex-col justify-between group card-hover-lift"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-dark">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate/60 to-transparent" />
                  <span className="absolute bottom-4 left-6 bg-ochre text-slate text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full">
                    {dish.type}
                  </span>
                  <div className="absolute top-4 right-4 flex items-center space-x-2">
                    <span className="bg-cream/90 text-slate text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center space-x-1">
                      <Clock size={10} />
                      <span>{dish.cookingTime}</span>
                    </span>
                  </div>
                </div>

                <div className="p-6 md:p-8 flex-grow flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <h3 className="font-bold text-2xl text-slate transition-colors duration-300 group-hover:text-terracotta">
                      {dish.name}
                    </h3>
                    <p className={`text-slate/75 text-sm leading-relaxed font-light ${expandedDish === i ? '' : 'line-clamp-3'}`}>
                      {dish.desc}
                    </p>
                    <button
                      onClick={() => setExpandedDish(expandedDish === i ? null : i)}
                      className="text-terracotta text-xs font-bold uppercase tracking-wider hover:text-terracotta-dark transition-colors"
                    >
                      {expandedDish === i ? 'Show less ▲' : 'Read more ▼'}
                    </button>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-terracotta/5">
                    <span className="text-[10px] uppercase tracking-widest text-slate/40 font-bold block">Key Ingredients</span>
                    <div className="flex flex-wrap gap-1.5">
                      {dish.ingredients.map((ing, k) => (
                        <span
                          key={k}
                          className="bg-cream-dark text-slate/80 text-[10px] font-medium px-2.5 py-1 rounded-md border border-terracotta/5"
                        >
                          {ing}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-6 md:px-8 pb-8">
                  <button
                    onClick={() => handleCookingClass(dish.name)}
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
