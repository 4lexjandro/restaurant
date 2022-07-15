import four from '../assets/four.jpg'
import two from '../assets/two.jpg'
import five from '../assets/five.jpg'
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



const Junk = () => {

  const Bottom = styled.div`
    position:fixed;
    bottom:0%;
    width:100%;
    color: rgb(255, 255, 255);
`;

	const Swipers = styled.div`
	display: flex;
  	justify-content: center;
	right: 15%;
	top: 15%;
	`;


  return (
	<main>
    <Swipers className='w-4/6 h-4/6 content-center object-cover absolute ' alt=''>
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
        <SwiperSlide> <img src={four} alt="" /></SwiperSlide>
        <SwiperSlide> <img src={four} alt="" /></SwiperSlide>
        <SwiperSlide> <img src={four} alt="" /> </SwiperSlide>
        <SwiperSlide> <img src={two} alt="" /> </SwiperSlide>
        <SwiperSlide> <img src={two} alt="" /> </SwiperSlide>
        <SwiperSlide> <img src={two} alt="" /> </SwiperSlide>
        <SwiperSlide> <img src={five} alt="" /> </SwiperSlide>
        <SwiperSlide> <img src={five} alt="" /> </SwiperSlide>
        <SwiperSlide> <img src={five} alt="" /> </SwiperSlide>
      </Swiper>



		</Swipers>
	  <Bottom>
		<Footer/>
	  </Bottom>
    </main>
  )
}

export default Junk