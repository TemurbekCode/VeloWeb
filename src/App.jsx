import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './components/navbar/Navbar.jsx';
import Loading from './components/loading/Loading.jsx';

/* Pages */
import HomePage from "./pages/HomePage.jsx";
import Services from './components/services/Services.jsx';
import Portfolio from "./components/Portfolio.jsx";
import Pricing from "./components/pricing/Pricing.jsx";

import About from "./pages/about/About.jsx";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  if (loading) return <Loading />;

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/pricing" element={<Pricing />} />
<Route path="/aboutUs" element={<About />} />        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      </Routes>
    </>
  );
}

export default App;