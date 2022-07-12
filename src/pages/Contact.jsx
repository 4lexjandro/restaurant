import Footer from '../minicomp/Footer'
import {motion} from "framer-motion"

function Contact() {
  return (
    <div className="hours">
        
        
        
        <motion.div
  animate={{ x: 0, y: 200, }}
  transition={{ ease: "easeOut", duration: 3 }}
>
      914-376-0371
      <br/>
      20 Park Hill Ave, Yonkers, NY 10701
      </motion.div>
        
        
        <div className="bottom"> 
      <Footer />
      </div>
        
        </div>
  )
}

export default Contact