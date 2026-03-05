import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      name: "Sarah Jenkins",
      country: "United Kingdom",
      rating: 5,
      text: "Absolutely wonderful stay! The proximity to Udawalawe National Park is unbeatable. The staff arranged our safari and it was magical."
    },
    {
      name: "David Chen",
      country: "Singapore",
      rating: 4,
      text: "Clean rooms, great pool, and very friendly staff. The breakfast buffet had a good mix of local and western options."
    },
    {
      name: "Amara Perera",
      country: "Sri Lanka",
      rating: 5,
      text: "A gem in Embilipitiya. We stayed here for a family vacation and the kids loved the pool. Highly recommended!"
    },
  ];

  return (
    <section className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center space-x-1 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-6 h-6 text-amber-500 fill-current" />
            ))}
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
            Guest Experiences
          </h2>
          <p className="text-gray-600 mt-2 font-medium">
            Rated 3.9 / 5 from 500+ reviews
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative"
            >
              <div className="text-amber-500 text-6xl font-serif absolute top-4 left-6 opacity-20">"</div>
              <p className="text-gray-600 italic mb-6 relative z-10 pt-4">
                {review.text}
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-bold">
                  {review.name.charAt(0)}
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-bold text-gray-900">{review.name}</h4>
                  <span className="text-xs text-gray-500">{review.country}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
