import Carousel from 'react-bootstrap/Carousel';
// import slide1 from '../images/鮮凍金枕頭榴槤banner-6盒.jpg';
// import slide2 from '../images/黑米.jpg';



function MyCarousel({dataArray}) {
  return (
<div className='container mb-3'>
{dataArray.map((item, index)=> 
        <Carousel >
            <Carousel.Item>
                <img
                className='d-flex w-100'
                src={item.photos[0]}
                alt=''
                />
            <Carousel.Caption>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
                <img
                className='d-flex w-100'
                src={item.photos[1]}
                alt=''
                />
            <Carousel.Caption>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
                <img
                className='d-flex w-100'
                src={item.photos[2]}
                alt=''
                />
            <Carousel.Caption>
        </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
        )}
</div>
  )
}

export default MyCarousel

