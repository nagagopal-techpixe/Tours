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
import PackageDetailPage from './pages/PackageDetailPage.jsx';
import GalleryShowAll from './pages/showAll.jsx';
// --- Mock Data ---

const App = () => {
   const { TOURS, loading, error } = useTours();
  const [activePage, setActivePage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedTour, setSelectedTour] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
  return localStorage.getItem('adminLoggedIn') === 'true';
});
  
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
       {activePage === "gallery" && <GalleryShowAll />}

  {activePage === 'plan-your-own-tour' && (
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




export default App;