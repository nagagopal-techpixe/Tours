import React, { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import  useTours   from './data/tours.js'; 
import AboutPage from './pages/AboutPage.jsx';
import PackagesPage from './pages/PackagesPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import CustomTourPage from './pages/CustomTourPage.jsx';
import WhatsAppButton from "./components/WhatsAppButton.jsx"
import AdminPage from "./pages/AdminPage.jsx";
import useEnquiries from "./data/useEnquiries.js";
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'

import { 
  Menu, X, MapPin, Calendar, Users, Star, 
  Phone, Mail, Facebook, Instagram, Twitter, 
  ArrowRight, CheckCircle, Search, Filter,
  MessageCircle, ShieldCheck, Globe, ChevronDown, ChevronUp
} from 'lucide-react';

// --- Mock Data ---


const TESTIMONIALS = [
  { name: "Sarah Jenkins", country: "UK", text: "Kirti Tours organized flawlessly. The driver was polite, the hotels were palaces, and India is simply magical.", rating: 5 },
  { name: "Marc Dubois", country: "France", text: "Incredible attention to detail. The custom itinerary they built for our family was perfect.", rating: 5 },
  { name: "Elena Rossi", country: "Italy", text: "Safe, reliable, and luxurious. I traveled solo and felt taken care of every step of the way.", rating: 5 },
];

const App = () => {
   const { TOURS, loading, error } = useTours();
  const [activePage, setActivePage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedTour, setSelectedTour] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
  return localStorage.getItem('adminLoggedIn') === 'true';
});

const [adminUser, setAdminUser] = useState({ username: '', password: '' });

  
  // Admin / Leads State

  // const [leads, setLeads] = useState([]);
   const { enquiries: leads, setEnquiries: setLeads} = useEnquiries();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', pax: '', days: '', budget: '', message: '' });
  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success

  // Scroll Handler
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (page, tour = null) => {
    setActivePage(page);
    setIsMenuOpen(false);
    if (tour) setSelectedTour(tour);
    window.scrollTo(0, 0);
  };

const handleFormSubmit = async (e) => {
  e.preventDefault();
  setFormStatus("submitting");

  try {
    const res = await fetch("https://kirti.bteam11.com/api/tours/enquiries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (!res.ok) throw new Error("Failed to submit enquiry");

    const newLead = await res.json();

    // add to leads list
    setLeads((prev) => [newLead, ...prev]);

    setFormStatus("success");
    setFormData({
      name: "",
      email: "",
      phone: "",
      pax: "",
      days: "",
      budget: "",
      message: "",
    });

  } catch (err) {
    console.error("Submit failed:", err);
    setFormStatus("idle");
  }
};

if (
  window.location.pathname === '/admin' ||
  window.location.pathname === '/admin/'
) {
  return isLoggedIn 
    ? <AdminPage leads={leads} tours={TOURS} /> 
    : <AdminLogin onLogin={() => setIsLoggedIn(true)} />;
}
  // Header Logic (Transparent on Home Top, Solid elsewhere)
  const isTransparentHeader = activePage === 'home' && !scrolled;
  const headerClass = isTransparentHeader
    ? 'bg-transparent text-white border-b border-white/10' 
    : 'bg-white text-blue-950 shadow-md'; 
  const logoClass = isTransparentHeader ? 'text-white' : 'text-blue-950';
  const navLinkClass = isTransparentHeader ? 'text-white/90 hover:text-amber-400' : 'text-gray-700 hover:text-blue-900';
  const mobileBtnClass = isTransparentHeader ? 'text-white' : 'text-blue-950';

  return (
    <div className="min-h-screen font-serif bg-gray-50 flex flex-col text-gray-800">
      
      {/* --- HEADER --- */}
     <Header activePage={activePage} setActivePage={setActivePage} navigateTo={navigateTo} />

      {/* --- MAIN CONTENT --- */}
      <main className="flex-grow">
        {activePage === 'home' && <HomePage navigateTo={navigateTo} />}
        {activePage === 'about' && <AboutPage />}
        {activePage === 'packages' && <PackagesPage navigateTo={navigateTo} />}
        {activePage === 'package-detail' && <PackageDetailPage tour={selectedTour} navigateTo={navigateTo} />}
       
  {activePage === 'custom-tour' && (
        <CustomTourPage
          formData={formData}
          setFormData={setFormData}
          status={formStatus}
          onSubmit={handleFormSubmit}
        />
  )}
        {/* {activePage === 'custom-tour' && <CustomTourPage formData={formData} setFormData={setFormData} status={formStatus} onSubmit={handleFormSubmit} />} */}
        {activePage === 'contact' && <ContactPage />}
           {/* <Router>
            <Routes>
              <Route path="/admin" element={<AdminPage leads={leads} tours={TOURS} />} />
            </Routes>
           </Router> */}
        {/* {activePage === 'admin' && (
  <AdminPage leads={leads} tours={TOURS} />
)} */}

      </main>

      {/* --- FOOTER --- */}
      <Footer navigateTo={navigateTo} />
      {/* Floating WhatsApp CTA */}
   <WhatsAppButton/>

    </div>
  );
};

// --- PAGES ---
const AdminLogin = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple hardcoded authentication
    if (username === 'admin' && password === 'password') {
      localStorage.setItem('adminLoggedIn', 'true'); // Save login state
      onLogin();
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
        />
        <button type="submit" className="w-full bg-blue-950 text-white py-2 rounded hover:bg-blue-900 transition">
          Login
        </button>
      </form>
    </div>
  );
};


const PackageDetailPage = ({ tour, navigateTo }) => {
  const [activeDay, setActiveDay] = useState(null);

  if (!tour) return <div className="pt-32 text-center">Loading...</div>;

  return (
    <div className="pt-24 min-h-screen">
      {/* Banner */}
      <div className="h-[50vh] relative">
        <img src={tour.image} alt={tour.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center px-4">
          <div>
             <span className="text-amber-400 font-sans font-bold tracking-[0.2em] uppercase text-sm mb-2 block">{tour.duration}</span>
             <h1 className="text-5xl font-bold text-white mb-6 max-w-4xl">{tour.title}</h1>
             <button onClick={() => navigateTo('custom-tour')} className="bg-amber-500 text-white px-8 py-3 rounded-sm font-bold uppercase font-sans hover:bg-amber-600 transition">
               Book This Tour
             </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left: Content */}
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold text-blue-950 mb-6">Tour Overview</h2>
          <p className="text-gray-600 font-sans text-lg leading-relaxed mb-12">
            {tour.description} This itinerary is designed to give you a leisurely pace while covering the most iconic sights. 
            Accommodations are in 4-star and 5-star heritage properties.
          </p>

          <h3 className="text-2xl font-bold text-blue-950 mb-8">Itinerary</h3>
          <div className="space-y-4">
            {tour.itinerary.map((day, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
                <button 
                  onClick={() => setActiveDay(activeDay === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 bg-gray-50 hover:bg-gray-100 transition text-left"
                >
                  <div className="flex items-center gap-4">
                    <span className="bg-blue-950 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold font-sans text-sm">
                      {day.day}
                    </span>
                    <span className="font-bold text-blue-950 text-lg">{day.title}</span>
                  </div>
                  {activeDay === idx ? <ChevronUp size={20} className="text-gray-400" /> : <ChevronDown size={20} className="text-gray-400" />}
                </button>
                {activeDay === idx && (
                  <div className="p-6 bg-white border-t border-gray-100 text-gray-600 font-sans leading-relaxed animate-fade-in-down">
                    {day.desc}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right: Pricing Card */}
        <div>
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-amber-500 sticky top-28">
            <div className="text-center pb-6 border-b border-gray-100 mb-6">
              <span className="text-gray-500 font-sans text-sm">Starting From</span>
              <div className="text-4xl font-bold text-blue-950 mt-2">{tour.price}</div>
              <span className="text-xs text-gray-400 font-sans">per person on twin sharing</span>
            </div>

            <ul className="space-y-4 mb-8 font-sans text-sm text-gray-600">
               <li className="flex items-center gap-3"><CheckCircle size={16} className="text-green-500" /> Private AC Vehicle</li>
               <li className="flex items-center gap-3"><CheckCircle size={16} className="text-green-500" /> English Speaking Guide</li>
               <li className="flex items-center gap-3"><CheckCircle size={16} className="text-green-500" /> Breakfast Daily</li>
               <li className="flex items-center gap-3"><CheckCircle size={16} className="text-green-500" /> All Entrance Fees</li>
            </ul>

            <button 
              onClick={() => navigateTo('custom-tour')} 
              className="w-full bg-blue-950 text-white py-4 rounded-sm font-bold uppercase tracking-wider hover:bg-blue-900 transition mb-4"
            >
              Enquire Now
            </button>
            <p className="text-center text-xs text-gray-400">No payment required today.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;