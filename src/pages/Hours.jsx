import Footer from '../minicomp/Footer'
import bottle from '../assets/bottle.png'
import {motion} from "framer-motion"
import styled from "styled-components";


const Hours = () => {


  const Bottom = styled.div`
    position:fixed;
    bottom:-3%;
    width:100%;
    color: rgb(255, 255, 255);
`;






  return (
    <main className="hours">
      
      


      
      
<motion.div
  animate={{ x: 0, y: 60, }}
  transition={{ ease: "easeOut", duration: 5 }}
>
<motion.div
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
                }}
                >Hours
                </motion.div>
  <br/>
    <motion.div
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, -180, -180, 0],
                }}
    >
      Sunday - Saturday
    </motion.div>
      <br/>
    <motion.div
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, -90, -90, 0],
              }}
              >
       11AM - 1AM
    </motion.div>

   <section class="waters">
      <img   src={bottle} alt="" width="250" height="250"/>
   </section>
 </motion.div>

      <Bottom className="bottom"> 
      <Footer />
      </Bottom>
      
      

      
      </main>
  )
}

export default Hours