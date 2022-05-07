import Footer from '../minicomp/Footer'
import {motion} from "framer-motion"


function Hours() {
  return (
    <div className="hours">
      <motion.div
  animate={{ x: 30, y: 30, }}
  transition={{ ease: "easeOut", duration: 3 }}
>
      Hours
      <br/>
      Sunday - Saturday 11AM - 1AM
      </motion.div>
      <div className="bottom"> 
      <Footer />
      </div>
      
      

      
      </div>
  )
}

export default Hours