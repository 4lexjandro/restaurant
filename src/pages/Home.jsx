import "../styles.scss";
import {motion} from "framer-motion"

const Home = () => {

  return (
    <>
    <main className="box">  
    <main className="numbers">

      <motion.div
        animate={{ x: 0, y: 100, }}
         transition={{ ease: "easeOut", duration: 1 }}
      >
        <h1>El Cazador Cafe</h1>
        <br/>
        20 Park Hill Ave
        <br/>
        Yonkers, New York, 10701
        <br/>
        <br/>

        <motion.div>
        <a href = "tel:914-376-0371" className='btn glass px-1 py-1 bg-pink-900 shadow-xl shadow-red-600/20 sm:px-1 btn-md'><p className="glassButton">914 - 376 - 0371</p></a>
         <br/><br/>
        </motion.div>
        
        <motion.div>
        <a href = "tel:914-376-3336" className='btn glass px-1 py-1 bg-pink-900 shadow-xl shadow-red-600/20 sm:px-1 btn-md'><p className="glassButton">914 - 376 - 3336</p></a>
         <br/><br/>
        </motion.div>

      </motion.div>

      </main>
      </main>
    
      </>
  )}

export default Home