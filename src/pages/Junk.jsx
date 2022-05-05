import {motion} from "framer-motion"

function Junk() {


  


  return (
    <div>

<motion.div
  initial={{ x: "100%" }}
  animate={{ x: "calc(100vw - 50%)" }}
>


    <p>pow</p>
</motion.div>









    </div>
  )
}

export default Junk