import { motion } from 'motion/react';
import { Calendar, Users, ChevronDown } from 'lucide-react';

const Booking = () => {
  return (
    <section id="booking" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
        >
          <div className="bg-gray-900 py-8 px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-white">
              Book Your Stay
            </h2>
            <p className="text-gray-400 mt-2 text-sm">
              Best rates guaranteed when you book directly with us.
            </p>
          </div>

          <form className="p-8 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all" placeholder="John Doe" />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input type="tel" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all" placeholder="+94 77 123 4567" />
              </div>

              {/* Guests */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">Guests</label>
                <div className="relative">
                  <select className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all appearance-none cursor-pointer">
                    <option>1 Adult</option>
                    <option>2 Adults</option>
                    <option>2 Adults, 1 Child</option>
                    <option>2 Adults, 2 Children</option>
                  </select>
                  <Users className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                </div>
              </div>

              {/* Check-in */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Check-in Date</label>
                <div className="relative">
                  <input type="date" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all" />
                  <Calendar className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                </div>
              </div>

              {/* Check-out */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Check-out Date</label>
                <div className="relative">
                  <input type="date" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all" />
                  <Calendar className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                </div>
              </div>

              {/* Room Type */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Room Type</label>
                <div className="relative">
                  <select className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all appearance-none cursor-pointer">
                    <option>Deluxe Room</option>
                    <option>Family Room</option>
                    <option>Standard Double Room</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                </div>
              </div>
            </div>

            <button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 rounded-xl transition-colors shadow-lg hover:shadow-amber-500/30">
              Check Availability
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Booking;
