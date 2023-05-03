import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../images/鮮凍金枕頭榴槤banner-6盒.jpg';
import slide2 from '../images/黑米.jpg';

function MyCarousel() {

  return (
<div className='container mb-3'>
<Carousel >
            <Carousel.Item>
                <img
                className='d-flex w-100'
                src={slide1}
                alt='First slide'
                />
            <Carousel.Caption>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
                <img
                className='d-flex w-100'
                src={slide2}
                alt='First slide'
                />
            <Carousel.Caption>
        </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
</div>
  )
}

export default MyCarousel