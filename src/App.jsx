import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './components/navbar/Navbar.jsx';
import Loading from './components/loading/Loading.jsx';

import HomePage from "./pages/HomePage.jsx";
import Services from './components/services/Services.jsx';
import Portfolio from "c:/Users/HP/Downloads/Portfolio.jsx";

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
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      </Routes>
    </>
  );
}

export default App;