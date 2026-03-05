import { motion } from 'motion/react';
import { User, Maximize } from 'lucide-react';

const Rooms = () => {
  const rooms = [
    {
      id: 1,
      title: "Deluxe Room",
      image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop",
      description: "Spacious room with modern amenities and a beautiful view of the city.",
      price: "$80",
      size: "35m²",
      guests: "2 Adults",
    },
    {
      id: 2,
      title: "Family Room",
      image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&w=1974&auto=format&fit=crop",
      description: "Perfect for families, offering extra space and comfortable bedding for everyone.",
      price: "$120",
      size: "50m²",
      guests: "2 Adults, 2 Kids",
    },
    {
      id: 3,
      title: "Standard Double Room",
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1974&auto=format&fit=crop",
      description: "Cozy and affordable, ideal for couples or solo travelers.",
      price: "$60",
      size: "25m²",
      guests: "2 Adults",
    },
  ];

  return (
    <section id="rooms" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-500 font-medium tracking-wider uppercase text-sm">Accommodation</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mt-2">
            Our Rooms & Suites
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Designed for your comfort, our rooms feature modern decor, plush bedding, and all the amenities you need for a relaxing stay.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-gray-900 shadow-sm">
                  {room.price} <span className="text-gray-500 font-normal text-xs">/ night</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{room.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{room.description}</p>
                
                <div className="flex items-center justify-between border-t border-gray-100 pt-4 mb-6">
                  <div className="flex items-center text-gray-500 text-sm">
                    <Maximize className="w-4 h-4 mr-1" />
                    {room.size}
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <User className="w-4 h-4 mr-1" />
                    {room.guests}
                  </div>
                </div>
                
                <a
                  href="#booking"
                  className="block w-full text-center bg-gray-900 hover:bg-amber-500 text-white py-3 rounded-lg transition-colors duration-300 font-medium"
                >
                  Book Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
