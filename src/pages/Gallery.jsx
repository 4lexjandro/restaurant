
import two from '../assets/two.jpg'
import three from '../assets/three.jpg'
import four from '../assets/four.jpg'
import five from '../assets/five.jpg'
import six from '../assets/six.jpg'
import Eight from '../assets/eight.jpg'

import styled from "styled-components";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";



const Frame = styled.div`
right: 14%;
top: 20%;
`;

const Main = styled.div`
`;

const Gallery = () => {
  return (

    
    <>





     <div className= "numbers">
    <main>  
    
    <Main className="gallerypage">
      <Frame className='w-4/6 h-5/6 content-center object-cover absolute ' alt=''>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide> 
          <img src={Eight} alt=""  />
        </SwiperSlide>
        <SwiperSlide> 
          <img src={two} alt=""  />
        </SwiperSlide>
        <SwiperSlide> 
          <img src={three} alt=""  />
        </SwiperSlide>
        <SwiperSlide> 
          <img src={four} alt=""  />
        </SwiperSlide>
        <SwiperSlide> 
          <img src={five} alt=""  />
        </SwiperSlide>
        <SwiperSlide> 
          <img src={six} alt=""  />
        </SwiperSlide>
        
      </Swiper>
      </Frame>
      </Main>
      
      <br/><br/><br/><br/><br/><br/><br/><br/>
      
    
      </main>
      </div>
      
    
    </>
  );
}

export default Gallery
