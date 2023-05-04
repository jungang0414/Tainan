import React from 'react';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import Accordion from '../components/Accordion';
import Footer from '../components/Footer';
import useFetch from '../hooks/useFetch';
import usePhotos from '../hooks/usePhotos';
const Home = () => {
  const  {data} = useFetch("/content")
  const {photosData } = usePhotos("/photos")
    return (
        <div className="App">
          <Navbar/>
          <Carousel  dataArray={photosData}/>
          <Accordion dataArray={data}/>
          <Footer/>
        </div>
      );
    }

export default Home