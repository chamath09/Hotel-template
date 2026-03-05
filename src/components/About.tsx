import { motion } from 'motion/react';
import { Wifi, Coffee, Waves, Snowflake, Car, Shirt } from 'lucide-react';

const About = () => {
  const features = [
    { icon: <Wifi className="w-6 h-6" />, label: "Free WiFi" },
    { icon: <Coffee className="w-6 h-6" />, label: "Free Breakfast" },
    { icon: <Waves className="w-6 h-6" />, label: "Swimming Pool" },
    { icon: <Snowflake className="w-6 h-6" />, label: "AC Rooms" },
    { icon: <Car className="w-6 h-6" />, label: "Free Parking" },
    { icon: <Shirt className="w-6 h-6" />, label: "Laundry Service" },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            <img
              src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1000&auto=format&fit=crop"
              alt="Hotel Interior"
              className="rounded-2xl shadow-lg w-full h-64 object-cover mt-8"
            />
            <img
              src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=1000&auto=format&fit=crop"
              alt="Hotel Pool"
              className="rounded-2xl shadow-lg w-full h-64 object-cover"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-amber-500 font-medium tracking-wider uppercase text-sm">About Us</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mt-2 mb-6">
              Experience Luxury in the Heart of Nature
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Centuria City Hotel is a comfortable 4-star hotel located in Embilipitiya, Sri Lanka. 
              We offer modern rooms, exceptional amenities, and warm hospitality to ensure your stay 
              is memorable. Whether you're visiting for the famous Udawalawe National Park or simply 
              passing through, our hotel provides the perfect blend of relaxation and convenience.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 text-gray-700">
                  <div className="text-amber-500 bg-amber-50 p-2 rounded-lg">
                    {feature.icon}
                  </div>
                  <span className="text-sm font-medium">{feature.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
