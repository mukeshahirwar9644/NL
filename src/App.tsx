import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lenis from 'lenis';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { MobileBottomBar } from './components/layout/MobileBottomBar';
import { FloatingWhatsApp } from './components/layout/FloatingWhatsApp';
import { ScrollToTop } from './components/layout/ScrollToTop';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Projects } from './pages/Projects';
import { ProjectDetails } from './pages/ProjectDetails';
import { WhyChooseUs } from './pages/WhyChooseUs';
import { Contact } from './pages/Contact';

export function App() {
  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-earth-50 text-earth-900 selection:bg-terracotta-500 selection:text-white">
        {/* Sticky Header */}
        <Navbar />

        {/* Main Content View */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path="/why-us" element={<WhyChooseUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Mobile Sticky Action Bar */}
        <MobileBottomBar />

        {/* Floating WhatsApp Action Button */}
        <FloatingWhatsApp />
      </div>
    </Router>
  );
}

export default App;
