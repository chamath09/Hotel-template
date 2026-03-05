import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Rooms from './components/Rooms';
import Amenities from './components/Amenities';
import Gallery from './components/Gallery';
import Attractions from './components/Attractions';
import Reviews from './components/Reviews';
import Booking from './components/Booking';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white">
      <Navbar />
      <Hero />
      <About />
      <Rooms />
      <Amenities />
      <Gallery />
      <Attractions />
      <Reviews />
      <Booking />
      <Contact />
    </div>
  );
}
