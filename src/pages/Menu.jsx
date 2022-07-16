import styled from "styled-components";
import MENU from "../assets/MENU.pdf";
import Footer from '../minicomp/Footer'
import { motion } from "framer-motion"


function Menu() {

  const Bottom = styled.div`
    position:fixed;
    bottom:-3%;
    width:100%;
    color: rgb(255, 255, 255);
`;


  return (
    <div class= "hours">
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
        <a href={MENU} without rel="noopener noreferrer" target="_blank" >
      <button 
      class=" btn glass w-20 h-10 p-2 bg-pink-900 shadow-xl shadow-orange-600/20 sm:px-1 rounded-md animate-bounce" 
      trailingIcon="picture_as_pdf" 
      label="Resume">
        <small className="hours">MENU</small>
      </button>
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