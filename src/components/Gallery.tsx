import { motion } from 'motion/react';

const Gallery = () => {
  const images = [
    { src: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop", alt: "Hotel Exterior", span: "col-span-1 md:col-span-2 row-span-2" },
    { src: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop", alt: "Luxury Room", span: "col-span-1" },
    { src: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=2032&auto=format&fit=crop", alt: "Swimming Pool", span: "col-span-1" },
    { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop", alt: "Restaurant Food", span: "col-span-1" },
    { src: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop", alt: "Lobby", span: "col-span-1" },
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <span className="text-amber-500 font-medium tracking-wider uppercase text-sm">Gallery</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2">
              A Glimpse of Centuria
            </h2>
          </div>
          <p className="text-gray-400 mt-4 md:mt-0 max-w-md text-sm md:text-right">
            Explore the elegance and comfort that awaits you at our hotel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[600px]">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-xl group ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-medium tracking-wide border border-white/50 px-4 py-2 rounded-full backdrop-blur-sm">
                  {img.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
