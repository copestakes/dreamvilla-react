import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Listings from './components/Listings';
import About from './components/About';
import Ratings from './components/Ratings';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <>
      <Nav />
      <Header />
      <Listings name="listings" />
      <About />
      <Ratings />
      <Testimonials />
      <ContactForm name="contact" />
      <Footer />
    </>
  );
}

export default App;
