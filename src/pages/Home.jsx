
import Footer from '../minicomp/Footer'
import styled from "styled-components";
import "../styles.scss";
import { motion, MotionConfig } from "framer-motion";



const Home = () => {


  
  const Bottom = styled.div`
    position:fixed;
    bottom:0%;
    width:100%;
    color: rgb(255, 255, 255);
`;




  return (
    <div> 

   
    <div class="home">
      <motion.div animate={{ scale: [2, 2, 1] }} >
        <h1>Welcome!</h1>
      </motion.div>
        </div>










     





















        



        
  <Bottom>
  <Footer />
  </Bottom>

      

      <br/>
      


      
      </div>
  )
}

export default Home