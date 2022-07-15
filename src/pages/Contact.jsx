import Footer from '../minicomp/Footer'
import {motion} from "framer-motion"
import styled from "styled-components";


const Contact = () => {



  const Bottom = styled.div`
    position:fixed;
    bottom:0%;
    width:100%;
    color: rgb(255, 255, 255);
`;



  return (
    <>
    
    
    <main className="numbers">
        
      <motion.div
        animate={{ x: 0, y: 200, }}
         transition={{ ease: "easeOut", duration: 3 }}
      ><p>Click below to order by phone</p>
        <br/>
        <a href = "tel:914-376-0371" class="btn glass">914 - 376 - 0371</a>
          <br/>
          <br/>
        20 Park Hill Ave, Yonkers, NY 10701
          <br/>
      
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