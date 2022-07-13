import Footer from '../minicomp/Footer'
import bottle from '../assets/bottle.png'
import {motion} from "framer-motion"


function Hours() {
  return (
    <div className="hours">
      


      
      
<motion.div
  animate={{ x: 0, y: 100, }}
  transition={{ ease: "easeOut", duration: 5 }}
>

<motion.div
    animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
    }}
  >Hours</motion.div>

  <br/>


<motion.div
    animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, -180, -180, 0],
    }}
  >Sunday - Saturday</motion.div>
      
      <br/>
      <motion.div
    animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, -90, -90, 0],
    }}
  >11AM - 1AM</motion.div>
   <section class="waters">
    <img   src={bottle} alt="" width="150" height="150"/>
    </section>
   
 </motion.div>




 <div className="water">
 </div>
 

 


 





 
   
 
    




  



      <div className="bottom"> 
      <Footer />
      </div>
      
      

      
      </div>
  )
}

export default Hours