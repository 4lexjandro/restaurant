import bottle from '../assets/bottle.png'
import {motion} from "framer-motion"




const Hours = () => {


  





  return (
    <>
    


     <main className= "numbers">
    
    
      
      


      
      
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
      Friday - Monday
    </motion.div>
      
    <motion.div
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, -90, -90, 0],
              }}
              >
       12PM - 1AM
    </motion.div>
    <br/>
    <motion.div
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, -180, -180, 0],
                }}
    >
      Tuesday - Thursday
    </motion.div>
      
    <motion.div
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, -90, -90, 0],
              }}
              >
       4PM - 1AM
    </motion.div>

   <section className="waters">
      <img   src={bottle} alt="" width="250" height="250"/>
   </section>
 </motion.div>

    
      
      

      
      






      </main>
      
      </>
  )
}

export default Hours