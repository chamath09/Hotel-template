import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <footer id="contact" className="bg-gray-50 pt-20 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div>
            <a href="#" className="text-2xl font-serif font-bold text-gray-900 block mb-6">
              Centuria<span className="text-amber-500">City</span>
            </a>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Experience the perfect blend of luxury and nature in Embilipitiya. 
              Your gateway to Udawalawe National Park.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-600 hover:text-amber-500 hover:shadow-md transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-600 hover:text-amber-500 hover:shadow-md transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-600 hover:text-amber-500 hover:shadow-md transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-gray-900 mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#about" className="hover:text-amber-500 transition-colors">About Us</a></li>
              <li><a href="#rooms" className="hover:text-amber-500 transition-colors">Our Rooms</a></li>
              <li><a href="#amenities" className="hover:text-amber-500 transition-colors">Amenities</a></li>
              <li><a href="#gallery" className="hover:text-amber-500 transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-amber-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-gray-900 mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm text-gray-600">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-amber-500 mr-3 flex-shrink-0 mt-0.5" />
                <span>
                  Main Street, Pallegama,<br />
                  Embilipitiya – Nonagama Highway,<br />
                  Sri Lanka
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-amber-500 mr-3 flex-shrink-0" />
                <span>+94 47 223 0044</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-amber-500 mr-3 flex-shrink-0" />
                <span>info@centuriacityhotel.com</span>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div className="h-48 rounded-xl overflow-hidden shadow-sm border border-gray-200">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63428.66567543864!2d80.82476687832031!3d6.484196999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae408ff84b50917%3A0x627103362624e5b6!2sCenturia%20City%20Hotel!5e0!3m2!1sen!2slk!4v1709664000000!5m2!1sen!2slk" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="border-t border-gray-200 py-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Centuria City Hotel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
