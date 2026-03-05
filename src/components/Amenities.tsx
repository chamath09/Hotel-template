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

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
  };

  return (
    <section id="amenities" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-amber-600 font-bold tracking-widest uppercase text-sm"
          >
            Facilities
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mt-3"
          >
            Hotel Amenities
          </motion.h2>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {amenities.map((amenity, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="p-8 rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 border-b-4 border-transparent hover:border-amber-500 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-amber-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 mb-6 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300 shadow-sm">
                  {amenity.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors duration-300">
                  {amenity.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-600">
                  {amenity.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Amenities;
