import Hero from './sections/Hero.jsx';
import Footer from './sections/Footer.jsx';
import Navbar from './sections/Navbar.jsx';
import Contact from './sections/Contact.jsx';
import About from './sections/About.jsx';
import Pricing from './sections/Projects.jsx';


const App = () => {
  return (
    <main className="w-full mx-auto relative">
      <Navbar />
      <Hero />
      <About />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
