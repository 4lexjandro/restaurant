import Footer from '../minicomp/Footer'
import {motion} from "framer-motion"
import styled from "styled-components";



const Bottom = styled.div`
position:fixed;
bottom:-3%;
width:100%;
color: rgb(255, 255, 255);
`;



const Contact = () => {



 


  return (
    <>
    
    
    <main className="numbers">
        
      <motion.div
        animate={{ x: 0, y: 100, }}
         transition={{ ease: "easeOut", duration: 2 }}
      >
        
          El Cazador Cafe
          <br/>
        20 Park Hill Ave
        <br/>
        Yonkers, New York, 10701
          <br/>
        <br/>
        <a href = "tel:914-376-0371" className='btn glass px-1 py-1 bg-pink-900 shadow-xl shadow-green-600/20 sm:px-1 btn-md'><p className="glassButton">914 - 376 - 0371</p></a>
          
      
      </motion.div>


      <motion.div
        animate={{ x: 0, y: -70, }}
        transition={{ ease: "easeOut", duration: 3 }}
      >
      </motion.div>
    </main>

      <Bottom> 
        <Footer />
      </Bottom>
        
        
        </>
  )
}

export default Contact