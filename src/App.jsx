import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BookingPage from "./components/BookingPage";
import Hero from "./sections/Hero";
import Why from "./sections/Why";
import Retail from "./sections/Retail";
import Luxury from "./sections/Luxury";
import Dining from "./sections/Dining";
import Entertainment from "./sections/Entertainment";
import Events from "./sections/Events";
import CTA from "./sections/CTA";

function App() {
  const [loading, setLoading] = useState(true);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingType, setBookingType] = useState("event");

  const openBooking = (type = "event") => {
    setBookingType(type);
    setIsBookingOpen(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="scroll-container bg-black">
      <AnimatePresence>
        {loading && <Loader />}
      </AnimatePresence>
      
      {!loading && (
        <>
          <Navbar onBookClick={() => openBooking("event")} />
          <Hero />
          <Why />
          <Retail />
          <Luxury />
          <Dining />
          <Entertainment />
          <Events onBookClick={() => openBooking("event")} />
          <CTA onBookClick={() => openBooking("membership")} />
          <Footer />

          <AnimatePresence mode="wait">
            {isBookingOpen && (
              <BookingPage 
                isOpen={isBookingOpen} 
                onClose={() => setIsBookingOpen(false)} 
                eventType={bookingType}
              />
            )}
          </AnimatePresence>
        </>
      )}
    </main>
  );
}

export default App;
