import Hero from './sections/Hero.jsx';
import Skills from './sections/Skills.jsx';
import Footer from './sections/Footer.jsx';
import Navbar from './sections/Navbar.jsx';
import Contact from './sections/Contact.jsx';
import About from './sections/About.jsx';
import Pricing from './sections/Pricing.jsx';


const App = () => {
  return (
    <main className="w-full mx-auto relative">
      <Navbar />
      <Hero />
      <About />
      {/* <Skills /> */}
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
