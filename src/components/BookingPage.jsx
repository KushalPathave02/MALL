import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, MapPin, Users, Sparkles, Star } from "lucide-react";

export default function BookingPage({ isOpen, onClose, eventType = "event" }) {
  if (!isOpen) return null;

  const isMembership = eventType === "membership";
  
  const content = {
    event: {
      title: "Book Your",
      highlight: "Private Event",
      description: "Experience the pinnacle of hospitality at Dubai Mall. Our dedicated team will ensure your event is nothing short of extraordinary.",
      tagline: "Luxury Redefined",
      button: "Request Exclusive Invitation",
      icon: <Calendar size={18} className="text-gold" />,
      capacityLabel: "Capacity",
      capacityValue: "Up to 500 Guests"
    },
    membership: {
      title: "Join the",
      highlight: "Elite Circle",
      description: "Unlock unparalleled access, personalized concierge services, and exclusive benefits designed for our most distinguished guests.",
      tagline: "Beyond Membership",
      button: "Apply for Membership",
      icon: <Star size={18} className="text-gold" />,
      capacityLabel: "Tier",
      capacityValue: "Black Tier Access"
    }
  };

  const currentContent = isMembership ? content.membership : content.event;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        className="bg-neutral-900 border border-white/10 w-full max-w-4xl overflow-hidden rounded-3xl flex flex-col md:flex-row shadow-2xl"
      >
        {/* Left Side - Info */}
        <div className={`w-full md:w-2/5 p-8 md:p-12 ${isMembership ? 'bg-blue-500/10' : 'bg-gold/10'} flex flex-col justify-between`}>
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">
              {currentContent.title} <br />
              <span className="text-gold">{currentContent.highlight}</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              {currentContent.description}
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4 text-white/80">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <MapPin size={18} className="text-gold" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500">Location</p>
                  <p className="text-sm">Dubai Mall, UAE</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 text-white/80">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  {currentContent.icon}
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500">{currentContent.capacityLabel}</p>
                  <p className="text-sm">{currentContent.capacityValue}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mt-12">
            {currentContent.tagline}
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-3/5 p-8 md:p-12 relative">
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-500">Full Name</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-500">Email Address</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors" placeholder="john@example.com" />
              </div>
            </div>

            {isMembership ? (
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-500">Interest</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors appearance-none">
                  <option className="bg-neutral-900">Personal Concierge</option>
                  <option className="bg-neutral-900">Exclusive Shopping</option>
                  <option className="bg-neutral-900">VIP Event Access</option>
                  <option className="bg-neutral-900">Luxury Travel</option>
                </select>
              </div>
            ) : (
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-500">Event Type</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors appearance-none">
                  <option className="bg-neutral-900">Corporate Launch</option>
                  <option className="bg-neutral-900">Private Fashion Show</option>
                  <option className="bg-neutral-900">VIP Gala Dinner</option>
                  <option className="bg-neutral-900">Brand Activation</option>
                </select>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-500">{isMembership ? "Contact Number" : "Preferred Date"}</label>
                <input type={isMembership ? "tel" : "date"} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-500">{isMembership ? "City" : "Expected Guests"}</label>
                <input type={isMembership ? "text" : "number"} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors" placeholder={isMembership ? "Dubai" : "50"} />
              </div>
            </div>

            <button className="w-full py-4 bg-gold text-white font-bold rounded-xl uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all shadow-xl shadow-gold/10">
              {currentContent.button}
            </button>
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
}
