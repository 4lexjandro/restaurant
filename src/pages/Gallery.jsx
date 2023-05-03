

import {motion} from "framer-motion"
import four from '../assets/four.jpg'
import two from '../assets/two.jpg'
import five from '../assets/five.jpg'
import one from '../assets/one.jpg'
import three from '../assets/three.jpg'
import Footer from '../minicomp/Footer'
import styled from "styled-components";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Clouds from '../assets/Clouds.mp4';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Bottom = styled.div`
position:fixed;
bottom:-3%;
width:100%;
color: rgb(255, 255, 255);
`;

const Frame = styled.div`

right: 14%;
top: 20%;
`;

const Main = styled.div`
`;

export default function App() {
  return (

    
    <>


<div className="main">
    <div className="overlay">

<video autoPlay loop muted playsInline={true} 
      controls={false}
      disablePictureInPicture={true} 
      id='video' className="vid"

      >
        <source
          src={Clouds}
          type="video/mp4"
        />
        </video>
     </div>


     <div className= "numbers">
    <main>  
    
    <Main className="gallerypage">
      <Frame className='w-4/6 h-4/6 content-center object-cover absolute ' alt=''>
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
          <img src={one} alt=""  />
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
          <img src={two} alt=""  />
        </SwiperSlide>
        <SwiperSlide> 
          <img src={three} alt=""  />
        </SwiperSlide>
        <SwiperSlide> 
          <img src={one} alt=""  />
        </SwiperSlide>
        <SwiperSlide> 
          <img src={five} alt=""  />
        </SwiperSlide>
      </Swiper>
      </Frame>
      </Main>
      
      <br/><br/><br/><br/><br/><br/><br/><br/>
      
    
      </main>
      </div>
      </div>
      <Bottom>
        <Footer />
      </Bottom>
    
    </>
  );
}
