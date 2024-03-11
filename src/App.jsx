import { React } from 'react'
import Header from './components/Header';
// import Banner from './components/Banner';
import About from './components/About';
// import Services from './components/Services';
// import Contact from './components/Contact';
import HowToBuy from './components/HowToBuy';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Header />
      {/* <Banner />
      <Services />
      <Contact /> */}
      <About />
      <HowToBuy />
      <Footer />
    </>
  )
}

export default App
