// components/Footer.jsx
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import React, { useState } from 'react';
import logo from "../assets/logoresize3.png";

const Footer = ({ navigateTo }) => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email) return alert("Please enter your email");
    alert(`Subscribed with: ${email}`);
    setEmail("");
  };

  return (
    <footer className="bg-gradient-to-br from-blue-950 via-amber-800 to-orange-800 text-white pt-16 pb-8 border-t-4 border-amber-500 font-sans relative overflow-hidden">

      {/* Luxury Glow Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-500/15 blur-3xl rounded-full"></div>
        <div className="absolute top-1/3 right-10 w-72 h-72 bg-amber-400/15 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-orange-500/15 blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-36 h-20 flex items-center justify-center ">
                <img src={logo} alt="Logo" className="w-96 h-20 object-contain" />
              </div>
            </div>

            <p className="text-base text-gray-200 leading-relaxed mb-3 -mt-4">
              Redefining luxury travel in India. We curate personalized journeys that blend heritage, culture, and comfort.
            </p>

            <div className="flex space-x-4 mb-5">
              <Facebook size={20} className="text-gray-300 hover:text-amber-400 cursor-pointer" />
              <Instagram size={20} className="text-gray-300 hover:text-amber-400 cursor-pointer" />
              <Twitter size={20} className="text-gray-300 hover:text-amber-400 cursor-pointer" />
            </div>

            {/* Newsletter Subscription */}
            <div>
              <h4 className="text-xs uppercase tracking-widest mb-2 text-gray-200">
                Subscribe for travel deals
              </h4>

          <div className="mt-4 flex flex-col items-center text-center">



</div>

            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white-300 uppercase tracking-widest text-xs">Explore</h4>
            <ul className="space-y-3 text-sm text-gray-200">
              <li onClick={() => navigateTo('about')} className="cursor-pointer transition text-base hover:text-amber-300">About Us</li>
              <li onClick={() => navigateTo('packages')} className="cursor-pointer transition text-base hover:text-amber-300">Tour Packages</li>
              <li className="cursor-pointer transition text-base hover:text-amber-300">Destinations</li>
              <li className="cursor-pointer transition text-base hover:text-amber-300">Blog</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white-300 uppercase tracking-widest text-xs">Legal</h4>
            <ul className="space-y-3 text-sm text-gray-200">
              <li className="cursor-pointer transition text-base hover:text-amber-300">Privacy Policy</li>
              <li className="cursor-pointer transition text-base hover:text-amber-300">Terms & Conditions</li>
              <li className="cursor-pointer transition text-base hover:text-amber-300">Payment Security</li>
              <li className="cursor-pointer transition text-base hover:text-amber-300">Admin Panel</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white-300 uppercase tracking-widest text-xs">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-200">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Pno C17 Paschim Vihar Kesopura A Block Ajmer road Jaipur</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="flex-shrink-0" />
                <span>+91 90014 59519</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="flex-shrink-0" />
                <span>kirtiindianexcrusiontours@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
          <div className="w-full max-w-sm mx-auto flex items-center gap-2 ">

    <input
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="Enter your email"
      className="w-full px-3 py-2 rounded-lg text-black focus:outline-none"
    />

    <button
      onClick={handleSubscribe}
      className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-3 py-2 rounded-lg"
    >
      Subscribe
      </button>
    </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-200">
          <p>© {new Date().getFullYear()} KIRTI Indian Excursion Tours. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span>Made with Love in India 🇮🇳</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
