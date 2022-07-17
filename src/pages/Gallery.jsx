import four from '../assets/four.jpg'
import two from '../assets/two.jpg'
import five from '../assets/five.jpg'
import one from '../assets/one.jpg'
import Footer from '../minicomp/Footer'
import styled from "styled-components";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../styles.scss";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";





const Gallery = () => {

  

  const Bottom = styled.div`
    position:fixed;
    bottom:0%;
    width:100%;
    color: rgb(255, 255, 255);
`;

	const Frame = styled.div`
	display: flex;
  justify-content: center;
	right: 14%;
	top: 20%;
  aspect-ratio: 16/9; 
 display: block;
	`;

  const Main = styled.div`
  color: red;
  aspect-ratio: 16/9; 
 display: block;
  
  `;


 


  return (

    
    
	<Main>
    <Frame className='w-4/6 h-4/6 content-center object-cover absolute ' alt=''>
   
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        showsPagination={true}
autoplay={true}

loop={true}
        loadMinimal
        loadMinimalSize={2}
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
            <img src={one} alt="" height="200" width="200" />
        </SwiperSlide>
        <SwiperSlide> 
            <img src={four} alt="" height="200" width="200" />
        </SwiperSlide>
        <SwiperSlide> 
            <img src={five} alt="" height="200" width="200" /> 
        </SwiperSlide>
        <SwiperSlide> 
            <img src={two} alt="" height="200" width="200" /> 
        </SwiperSlide>
        <SwiperSlide> 
            <img src={four} alt="" height="200" width="200" /> 
        </SwiperSlide>
        <SwiperSlide> 
            <img src={one} alt="" height="200" width="200" /> 
        </SwiperSlide>
        <SwiperSlide> 
            <img src={five} alt="" height="200" width="200" /> 
        </SwiperSlide>
        <SwiperSlide> 
            <img src={four} alt="" height="200" width="200" /> 
        </SwiperSlide>
        <SwiperSlide> 
            <img src={two} alt="" height="200" width="200" /> 
        </SwiperSlide>
        
      </Swiper>
      
    



		</Frame>
	  <Bottom>
		<Footer/>
	  </Bottom>
    </Main>
  )
}

export default Gallery