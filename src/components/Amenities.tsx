import { motion } from 'motion/react';
import { Waves, Wifi, Coffee, Car, Snowflake, Shirt, Clock, Utensils } from 'lucide-react';

const Amenities = () => {
  const amenities = [
    { icon: <Waves className="w-8 h-8" />, title: "Swimming Pool", desc: "Relax in our crystal clear outdoor pool." },
    { icon: <Wifi className="w-8 h-8" />, title: "Free WiFi", desc: "High-speed internet throughout the property." },
    { icon: <Coffee className="w-8 h-8" />, title: "Breakfast Included", desc: "Start your day with a delicious spread." },
    { icon: <Car className="w-8 h-8" />, title: "Free Parking", desc: "Secure parking space for your vehicle." },
    { icon: <Snowflake className="w-8 h-8" />, title: "Air Conditioning", desc: "Climate control in all rooms." },
    { icon: <Shirt className="w-8 h-8" />, title: "Laundry Service", desc: "Quick and professional laundry service." },
    { icon: <Clock className="w-8 h-8" />, title: "24/7 Reception", desc: "We are always here to help you." },
    { icon: <Utensils className="w-8 h-8" />, title: "Restaurant", desc: "Local and international cuisine." },
  ];

  return (
    <section id="amenities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-500 font-medium tracking-wider uppercase text-sm">Facilities</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mt-2">
            Hotel Amenities
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {amenities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100 group"
            >
              <div className="text-gray-400 group-hover:text-amber-500 transition-colors duration-300 mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
