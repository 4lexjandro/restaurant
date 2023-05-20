import styled from "styled-components";
import MENU from "../assets/MENU.pdf";
import { motion } from "framer-motion"





const Center = styled.div`
position: relative;
right: -30%;
`;

function Menu() {

 


  return (
    <>
   


     <div className= "numbers">
    <main>  

  

    
    
<motion.div
        animate={{ x: -10, y: 100, }}
         transition={{ ease: "easeOut", duration: 2 }}
      >

        
       
    
        
         
      
      

    
    
      <br/>
      <motion.div
        initial={{ x: "300", }}
        animate={{ x: "calc(100% - 99%)" }}>
        <a href={MENU} className="menuPage" rel="noopener noreferrer" target="_blank" >
          <Center>
      <button 
      className=" btn btn-outline  w-20 h-20 p-2 bg-red-900 shadow-xl shadow-red-600/20 sm:px-1 rounded-md" 
      label="Resume">
        
        <small>MENU</small>
        
      </button>
      </Center>
        </a>
      </motion.div>
      </motion.div>
      
      </main>
      </div>
      
    









     
      
      </>
     
  )
}

export default Menu