import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Listings from './components/Listings';
import About from './components/About';
import Ratings from './components/Ratings';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Nav />
      <Header />
      <Listings />
      <About />
      <Ratings />
      <Footer />
    </>
  );
}

export default App;
