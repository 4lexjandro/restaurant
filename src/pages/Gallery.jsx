import four from '../assets/four.jpg'
import two from '../assets/two.jpg'
import five from '../assets/five.jpg'
import one from '../assets/one.jpg'
import Footer from '../minicomp/Footer'
import styled from "styled-components";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        removeClippedSubviews={false}
        scrollEnabled={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
		
      >
        
        <SwiperSlide> <img src={one} alt="" /></SwiperSlide>
        <SwiperSlide> <img src={four} alt="" /></SwiperSlide>
        <SwiperSlide> <img src={five} alt="" /> </SwiperSlide>
        <SwiperSlide> <img src={two} alt="" /> </SwiperSlide>
        <SwiperSlide> <img src={four} alt="" /> </SwiperSlide>
        <SwiperSlide> <img src={one} alt="" /> </SwiperSlide>
        <SwiperSlide> <img src={five} alt="" /> </SwiperSlide>
        <SwiperSlide> <img src={four} alt="" /> </SwiperSlide>
        <SwiperSlide> <img src={two} alt="" /> </SwiperSlide>
        
      </Swiper>
      
    



		</Frame>
	  <Bottom>
		<Footer/>
	  </Bottom>
    </Main>
  )
}

export default Gallery