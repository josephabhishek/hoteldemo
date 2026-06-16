import { useState, useEffect } from 'react';
import PageLoader from './components/PageLoader';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Suites from './components/Suites';
import Experiences from './components/Experiences';
import Wellness from './components/Wellness';
import Dining from './components/Dining';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Journal from './components/Journal';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-ivory">
      <PageLoader />

      {showContent && (
        <>
          <Header />
          <main>
            <Hero />
            <About />
            <Suites />
            <Experiences />
            <Wellness />
            <Dining />
            <Gallery />
            <Testimonials />
            <Journal />
            <Booking />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
