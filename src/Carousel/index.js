import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import BussinessList from "../mockdata/BussinessList.json"
import "./index.css"

const Carousel=()=>{
    
    const settings = {
       
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 0,
        adaptiveHeight: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return(
        <div className='slider-container'>
            <Slider {...settings}>
            {BussinessList.map(each=>(
                <div className='slide' >
                    <img className='carouselImageClassName' alt="Carousel Image" src={each.imageSrc}/>
                    <h1 className='slide-heading'>{each.heading}</h1>
                    <p className='slide-description'>{each.description}</p>
                </div> 
            ))}
            </Slider>
        </div>
    )
}
export default Carousel