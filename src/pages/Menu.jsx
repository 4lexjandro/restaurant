import styled from "styled-components";
import MENU from "../assets/MENU.pdf";
import Footer from '../minicomp/Footer'
import { motion } from "framer-motion"


function Menu() {

  const Bottom = styled.div`
    position:fixed;
    bottom:0%;
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
          <button class="btn btn-active w-20 h-10 p-2 bg-pink-900 shadow-xl shadow-orange-600/20 sm:px-1 rounded-md animate-bounce">
          <a href={MENU} download="MENU.pdf">Menu</a>
          </button> 
      </motion.div>
      </main>
      <Bottom> 
      <Footer />
      </Bottom>
      </div>
  )
}

export default Menu