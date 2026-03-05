import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

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
    {
      name: "Michael Ross",
      country: "Australia",
      rating: 5,
      text: "Best hotel in the area. The rooms are spacious and the air conditioning works perfectly, which is essential here. Will come back!"
    },
    {
      name: "Emma Wilson",
      country: "Germany",
      rating: 5,
      text: "Lovely atmosphere and delicious food. The reception team was very helpful with directions and transport."
    }
  ];

  return (
    <section className="py-24 bg-amber-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            modules={[Pagination, Autoplay, EffectCoverflow]}
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-16"
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index} className="max-w-md">
                <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100 h-full flex flex-col relative mx-4 my-4">
                  <div className="absolute -top-6 left-8 bg-amber-500 text-white p-3 rounded-full shadow-lg">
                    <Quote size={24} fill="currentColor" />
                  </div>
                  
                  <div className="mt-6 mb-6 flex-grow">
                    <p className="text-gray-600 italic text-lg leading-relaxed">
                      "{review.text}"
                    </p>
                  </div>
                  
                  <div className="flex items-center border-t border-gray-100 pt-6">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 font-bold text-xl">
                      {review.name.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <h4 className="text-base font-bold text-gray-900">{review.name}</h4>
                      <span className="text-sm text-gray-500 font-medium">{review.country}</span>
                    </div>
                    <div className="ml-auto flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                      ))}
                    </div>
                  </div>
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
