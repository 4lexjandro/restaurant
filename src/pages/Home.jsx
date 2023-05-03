
import Footer from '../minicomp/Footer'
import styled from "styled-components";
import "../styles.scss";
import Clouds from '../assets/Clouds.mp4';
import { motion } from "framer-motion"
import MENU from "../assets/MENU.pdf";


const Bottom = styled.div`
position:fixed;
bottom:-3%;
width:100%;
color: rgb(255, 255, 255);
`;
const Center = styled.div`
position: relative;
right: -30%;
`;

const Home = () => {




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

  

    <div>content here!</div>
    

        
      </main>
      </div>
      </div>
    









      <Bottom>
  <Footer />
  </Bottom>
      
      </>
  )}

export default Home