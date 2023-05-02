import styled from "styled-components";
import MENU from "../assets/MENU.pdf";
import Footer from '../minicomp/Footer'
import { motion } from "framer-motion"



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
    <div className= "hours">
    <main className='container mx-auto px-0 pb-0'>  

  

    
    <motion.div
      initial={{ x: "300", }}
      animate={{ x: "calc(80% - 80%)" }}>
      
      <h2>Menu Below!</h2>
      

    </motion.div>
    
      <br/>
      <motion.div
        initial={{ x: "300", }}
        animate={{ x: "calc(100% - 99%)" }}>
        <a href={MENU} className="menuPage" rel="noopener noreferrer" target="_blank" >
          <Center>
      <button 
      className=" btn glass w-20 h-10 p-2 bg-red-900 shadow-xl shadow-green-600/20 sm:px-1 rounded-md animate-bounce" 
      label="Resume">
        
        <small className="hours">MENU</small>
        
      </button>
      </Center>
        </a>
      </motion.div>
      </main>
      <Bottom> 
      <Footer />
      </Bottom>
      </div>
  )
}

export default Menu