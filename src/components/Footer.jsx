// components/Footer.jsx
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import React from 'react';
import logo from "../assets/logoresize1.png"

const Footer = ({ navigateTo }) => (
  <footer className="bg-blue-950 text-white pt-16 pb-8 border-t-4 border-amber-500 font-sans">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-3 mb-6">
      <div className="w-20 h-10 flex items-center justify-center">
  {/* <img src={logo} alt="Logo" className="w-40 h-7 object-contain" /> */}
  <img src={logo} alt="Logo" className="w-64 h-12 object-contain" />

</div>


            {/* <span className="text-2xl font-serif font-bold">KIRTI</span> */}
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Redefining luxury travel in India. We curate personalized journeys that blend heritage, culture, and comfort.
          </p>
          <div className="flex space-x-4">
            <Facebook size={20} className="text-gray-400 hover:text-amber-500 cursor-pointer" />
            <Instagram size={20} className="text-gray-400 hover:text-amber-500 cursor-pointer" />
            <Twitter size={20} className="text-gray-400 hover:text-amber-500 cursor-pointer" />
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 text-amber-500 uppercase tracking-widest text-xs">Explore</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li onClick={() => navigateTo('about')} className="hover:text-white cursor-pointer transition">About Us</li>
            <li onClick={() => navigateTo('packages')} className="hover:text-white cursor-pointer transition">Tour Packages</li>
            <li className="hover:text-white cursor-pointer transition">Destinations</li>
            <li className="hover:text-white cursor-pointer transition">Blog</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 text-amber-500 uppercase tracking-widest text-xs">Legal</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="hover:text-white cursor-pointer transition">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer transition">Terms & Conditions</li>
            <li className="hover:text-white cursor-pointer transition">Payment Security</li>
            <li className="hover:text-gray-600 cursor-pointer transition">Admin Panel</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 text-amber-500 uppercase tracking-widest text-xs">Contact</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex items-start gap-3">
              <MapPin size={16} className="mt-1 text-amber-500 flex-shrink-0" />
              <span>123 Heritage Lane, Connaught Place, New Delhi, India</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-amber-500 flex-shrink-0" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-amber-500 flex-shrink-0" />
              <span>hello@kirtitours.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <p>© {new Date().getFullYear()} KIRTI Indian Excursion Tours. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <span>Made with Love in India 🇮🇳</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
