
import Footer from '../minicomp/Footer'
import styled from "styled-components";
import "../styles.scss";
import { Suspense, useState } from "react";
import { motion, MotionConfig, useMotionValue } from "framer-motion";
import { Shapes } from "./FramerMotion/Shapes";
import { transition } from "./FramerMotion/settings";
import useMeasure from "react-use-measure";




const Home = () => {


  
  const Bottom = styled.div`
    position:fixed;
    bottom:-3%;
    width:100%;
    color: rgb(255, 255, 255);
`;


const [ref, bounds] = useMeasure({ scroll: false });
const [isHover, setIsHover] = useState(false);
const [isPress, setIsPress] = useState(false);
const mouseX = useMotionValue(0);
const mouseY = useMotionValue(0);

const resetMousePosition = () => {
  mouseX.set(0);
  mouseY.set(0);
};





  return (
    <div className="homeMotion"> 


        {/* 3D Animation */}
         
        <MotionConfig className="play"   onClick="" transition={transition}>
      <motion.button
        ref={ref}
        initial={false}
        animate={isHover ? "hover" : "rest"}
        whileTap="press"
        onClick=""
        variants={{
          rest: { scale: 1 },
          hover: { scale: 1.5 },
          press: { scale: 1.4 }
        }}
        onHoverStart={() => {
          resetMousePosition();
          setIsHover(true);
        }}
        onHoverEnd={() => {
          resetMousePosition();
          setIsHover(false);
        }}
        onTapStart={() => setIsPress(true)}
        onTap={() => setIsPress(false)}
        onTapCancel={() => setIsPress(false)}
        onPointerMove={(e) => {
          mouseX.set(e.clientX - bounds.x - bounds.width / 2);
          mouseY.set(e.clientY - bounds.y - bounds.height / 2);
        }}
      >
        <motion.div
          className="shapes"
          onClick=""
          variants={{
            rest: { opacity: 0 },
            hover: { opacity: 1 }
          }}
          
        >
          <div   onClick="" className="pink blush" />
          <div   onClick="" className="blue blush" />
          <div   onClick="" className="container">
            <Suspense fallback={null}>
              <Shapes
                onClick=""
                isHover={isHover}
                isPress={isPress}
                mouseX={mouseX}
                mouseY={mouseY}
              />
            </Suspense>
          </div>
        </motion.div>
        <motion.div
          variants={{ hover: { scale: 0.85 }, press: { scale: 1.1 } }}
          className="label"
        >
           <div className="home">
      <motion.div animate={{ scale: [45, 45, 1] }} >
        <h1>Welcome</h1>
        
      </motion.div>
        </div>
        
        </motion.div>
      </motion.button>
    </MotionConfig>



          

          <br/><br/><br/><br/><br/><br/><br/>






    {/* second 3d figure */}
    <MotionConfig className="play"   onClick="" transition={transition}>
      <motion.button
        ref={ref}
        initial={false}
        animate={isHover ? "hover" : "rest"}
        whileTap="press"
        onClick=""
        variants={{
          rest: { scale: 1 },
          hover: { scale: 1.5 },
          press: { scale: 1.4 }
        }}
        onHoverStart={() => {
          resetMousePosition();
          setIsHover(true);
        }}
        onHoverEnd={() => {
          resetMousePosition();
          setIsHover(false);
        }}
        onTapStart={() => setIsPress(true)}
        onTap={() => setIsPress(false)}
        onTapCancel={() => setIsPress(false)}
        onPointerMove={(e) => {
          mouseX.set(e.clientX - bounds.x - bounds.width / 2);
          mouseY.set(e.clientY - bounds.y - bounds.height / 2);
        }}
      >
        <motion.div
          className="shapes"
          onClick=""
          variants={{
            rest: { opacity: 0 },
            hover: { opacity: 1 }
          }}
          
        >
          <div   onClick="" className="pink blush" />
          <div   onClick="" className="blue blush" />
          <div   onClick="" className="container">
            <Suspense fallback={null}>
              <Shapes
                onClick=""
                isHover={isHover}
                isPress={isPress}
                mouseX={mouseX}
                mouseY={mouseY}
              />
            </Suspense>
          </div>
        </motion.div>
        <motion.div
          variants={{ hover: { scale: 0.85 }, press: { scale: 1.1 } }}
          className="label"
        >
           <div className="home">
      <motion.div animate={{ scale: [45, 45, 1] }} >
        <h1>Everyone!</h1>
        
      </motion.div>
        </div>
        
        </motion.div>
      </motion.button>
    </MotionConfig>




       
  <Bottom>
  <Footer />
  </Bottom>

      


      
      </div>
  )
}

export default Home