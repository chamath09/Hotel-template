import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Reviews = () => {
  const reviews = [
    {
      name: "Sarah Jenkins",
      country: "United Kingdom",
      rating: 5,
      text: "Absolutely wonderful stay! The proximity to Udawalawe National Park is unbeatable. The staff arranged our safari and it was magical. The room was spotless and very comfortable."
    },
    {
      name: "David Chen",
      country: "Singapore",
      rating: 4,
      text: "Clean rooms, great pool, and very friendly staff. The breakfast buffet had a good mix of local and western options. Would definitely recommend to friends visiting Sri Lanka."
    },
    {
      name: "Amara Perera",
      country: "Sri Lanka",
      rating: 5,
      text: "A gem in Embilipitiya. We stayed here for a family vacation and the kids loved the pool. Highly recommended! The service was exceptional from start to finish."
    },
    {
      name: "Michael Ross",
      country: "Australia",
      rating: 5,
      text: "Best hotel in the area. The rooms are spacious and the air conditioning works perfectly, which is essential here. Will come back! Great value for money."
    },
    {
      name: "Emma Wilson",
      country: "Germany",
      rating: 5,
      text: "Lovely atmosphere and delicious food. The reception team was very helpful with directions and transport. A truly relaxing experience after a long day of travel."
    }
  ];

  return (
    <section className="py-24 bg-amber-50/50 overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center items-center space-x-1 mb-4"
          >
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-6 h-6 text-amber-500 fill-current" />
            ))}
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-gray-900"
          >
            Guest Experiences
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 mt-3 font-medium text-lg"
          >
            Rated 3.9 / 5 from 500+ reviews
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            grabCursor={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{ 
              clickable: true, 
              dynamicBullets: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="!pb-16 px-4"
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index} className="!h-auto">
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full flex flex-col relative hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <Quote className="text-amber-100 absolute top-6 right-6 w-12 h-12 rotate-180" fill="currentColor" />
                  
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md">
                      {review.name.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-bold text-gray-900">{review.name}</h4>
                      <span className="text-sm text-gray-500 font-medium">{review.country}</span>
                    </div>
                  </div>

                  <div className="mb-6 flex-grow">
                    <div className="flex mb-3">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 italic text-base leading-relaxed">
                      "{review.text}"
                    </p>
                  </div>
                  
                  <div className="w-12 h-1 bg-amber-500 rounded-full opacity-20"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
