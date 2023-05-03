import styled from "styled-components";
import MENU from "../assets/MENU.pdf";
import Footer from '../minicomp/Footer'
import { motion } from "framer-motion"
import Clouds from '../assets/Clouds.mp4';



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

function Menu() {

 


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

  

    
    
<motion.div
        animate={{ x: -10, y: 100, }}
         transition={{ ease: "easeOut", duration: 2 }}
      >

        <h2>Menu</h2>
        
         
      
      

    
    
      <br/>
      <motion.div
        initial={{ x: "300", }}
        animate={{ x: "calc(100% - 99%)" }}>
        <a href={MENU} className="menuPage" rel="noopener noreferrer" target="_blank" >
          <Center>
      <button 
      className=" btn glass w-20 h-10 p-2 bg-red-900 shadow-xl shadow-red-600/20 sm:px-1 rounded-md animate-bounce" 
      label="Resume">
        
        <small className="glassButton">MENU</small>
        
      </button>
      </Center>
        </a>
      </motion.div>
      </motion.div>
      </main>
      </div>
      </div>
    









      <Bottom>
  <Footer />
  </Bottom>
      
      </>
     
  )
}

export default Menu