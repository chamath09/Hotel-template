import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';

const Attractions = () => {
  const attractions = [
    {
      title: "Udawalawe National Park",
      image: "https://images.unsplash.com/photo-1547970810-dc1eac37d174?q=80&w=2071&auto=format&fit=crop",
      distance: "15 km away",
      desc: "Famous for its large population of wild Asian elephants."
    },
    {
      title: "Elephant Transit Home",
      image: "https://images.unsplash.com/photo-1585970480901-90d6bb2a48b5?q=80&w=1974&auto=format&fit=crop",
      distance: "16 km away",
      desc: "A refuge for orphaned elephant calves."
    },
    {
      title: "Sankhapala Raja Maha Viharaya",
      image: "https://images.unsplash.com/photo-1589308010442-c8d9c7182552?q=80&w=2070&auto=format&fit=crop",
      distance: "10 km away",
      desc: "An ancient Buddhist temple with rich history."
    },
    {
      title: "Local Safari Tours",
      image: "https://images.unsplash.com/photo-1535581652167-3d6b98c36cd0?q=80&w=2070&auto=format&fit=crop",
      distance: "Available at Hotel",
      desc: "Book your jeep safari directly from our reception."
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-500 font-medium tracking-wider uppercase text-sm">Explore</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mt-2">
            Nearby Attractions
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Embilipitiya is the gateway to Udawalawe. Discover the natural wonders surrounding us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {attractions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-xl overflow-hidden cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <div className="flex items-center text-amber-400 text-xs font-bold mb-2 uppercase tracking-wide">
                    <MapPin className="w-3 h-3 mr-1" />
                    {item.distance}
                  </div>
                  <h3 className="text-xl font-bold leading-tight mb-1">{item.title}</h3>
                  <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Attractions;
