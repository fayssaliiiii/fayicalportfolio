import { BrowserRouter } from "react-router-dom";
// Footer
import Footer from "./components/Footer";
import ImagesSilder1 from "./components/ImagesSilder1";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas,  } from "./components";
import WhatsAppButton from "./components/WhatsAppButton";

import HeroSection from "./components/HeroSection";
import Questions from "./components/Questions";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
                    {/* <SocialMediaLinks /> */}

          <Hero />
          <ImagesSilder1 />
          <HeroSection />
        </div>
        <About />
        <Experience />
        <Tech />
        <Questions />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
          <Footer />
          <WhatsAppButton />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;