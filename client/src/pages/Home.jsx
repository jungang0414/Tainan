import React from 'react';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import Accordion from '../components/Accordion';
import Footer from '../components/Footer';
const Home = () => {
    return (
        <div className="App">
          <Navbar/>
          <Carousel/>
          <Accordion/>
          <Footer/>
        </div>
      );
    }

export default Home