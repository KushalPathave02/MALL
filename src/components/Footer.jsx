import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Experience",
      links: [
        { name: "Retail", href: "#retail" },
        { name: "Dining", href: "#dining" },
        { name: "Entertainment", href: "#entertainment" },
        { name: "Events", href: "#events" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Concierge", href: "#" },
        { name: "VIP Parking", href: "#" },
        { name: "Gift Cards", href: "#" },
        { name: "Personal Shopping", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Contact", href: "#" },
        { name: "Press", href: "#" },
        { name: "Careers", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Logo and About */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-3xl font-bold tracking-tighter mb-6"
            >
              MALL<span className="text-gold">.</span>
            </motion.div>
            <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
              A global destination where luxury, lifestyle, and entertainment converge. 
              Designed for those who seek the extraordinary in every moment.
            </p>
            <div className="flex space-x-5">
              {[
                { Icon: FaInstagram, href: "#" },
                { Icon: FaTwitter, href: "#" },
                { Icon: FaFacebookF, href: "#" },
              ].map(({ Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  whileHover={{ y: -3, color: "#d4af37" }}
                  className="text-gray-400 transition-colors"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-xs uppercase tracking-widest font-bold mb-6 text-white">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10 border-y border-white/5 mb-10">
          <div className="flex items-center space-x-3 text-gray-400">
            <MapPin size={18} className="text-gold" />
            <span className="text-sm">Downtown Dubai, UAE</span>
          </div>
          <div className="flex items-center space-x-3 text-gray-400">
            <Phone size={18} className="text-gold" />
            <span className="text-sm">+971 4 123 4567</span>
          </div>
          <div className="flex items-center space-x-3 text-gray-400">
            <Mail size={18} className="text-gold" />
            <span className="text-sm">concierge@mall.com</span>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:row justify-between items-center text-xs text-gray-500 tracking-wider">
          <p>© {currentYear} MALL. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a>
            <a href="#" className="hover:text-white transition-colors">TERMS OF SERVICE</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
