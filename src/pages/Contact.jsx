import Footer from '../minicomp/Footer'
import {motion} from "framer-motion"

function Contact({isVisible}) {



  






  return (
    <>
    
    
    <main className="numbers">
        
        
        
        <motion.div
  animate={{ x: 0, y: 200, }}
  transition={{ ease: "easeOut", duration: 4 }}
>
      914-376-0371
      <br/>
      20 Park Hill Ave, Yonkers, NY 10701
      <br/>
      
      </motion.div>


      <motion.div
  animate={{ x: 0, y: -70, }}
  transition={{ ease: "easeOut", duration: 4 }}
>
  
</motion.div>
</main>

 
 



  












        
        
        <div className="bottom"> 
      <Footer />
      </div>
        
        
        </>
  )
}

export default Contact