import { useEffect, useRef, useState } from "react";
import Navbar from "../components/navbar/navbar";
import Hero from "../components/hero/hero";
import Services from "../components/services/services";
import Activities from "../components/activities/activities";
import Contact from "../components/contact/contact";
import Footer from "../components/footer/footer";
import Testimonials from "../components/testimonials/testimonials";

const LandingPage = () => {
  const [scrolled, setScrolled] = useState(false);

  // Create refs for each section
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const activitiesRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-50">
      {/* Background Image Container */}
      <div className="fixed inset-0 z-0">
        <div
          className="w-full h-full transition-transform duration-300"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            transform: `translateY(${scrolled * 0.5}px)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar
          heroRef={heroRef}
          servicesRef={servicesRef}
          activitiesRef={activitiesRef}
          testimonialsRef={testimonialsRef}
          contactRef={contactRef}
        />
        <div ref={heroRef}>
          <Hero servicesRef={servicesRef} />
        </div>
        <div ref={servicesRef}>
          <Services />
        </div>
        <div ref={activitiesRef}>
          <Activities />
        </div>
        <div ref={testimonialsRef}>
          <Testimonials />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
        <div ref={footerRef}>
          <Footer
            heroRef={heroRef}
            servicesRef={servicesRef}
            activitiesRef={activitiesRef}
            testimonialsRef={testimonialsRef}
            contactRef={contactRef}
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
