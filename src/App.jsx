import { React } from 'react'
import Header from './components/Header';
// import Banner from './components/Banner';
import About from './components/About';
import Tokenomics from './components/Tokenomics';
// import Services from './components/Services';
// import Contact from './components/Contact';
import HowToBuy from './components/HowToBuy';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Header />
      {/* <Banner />
      <Services />
      <Contact /> */}
      <About />
      <Tokenomics />
      <HowToBuy />
      <Testimonial />
      <Footer />
    </>
  )
}

export default App
