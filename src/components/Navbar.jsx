import styled from "styled-components";
import '../styles.css'
import {Link} from 'react-router-dom'
import background from '../assets/background.jpg'
import {motion} from "framer-motion"



      



  


const Navbar = () => {
{
     return (

    <div class="flex-1 px-0 mx-0 ">
    <header class="sticky top-0 z-30  px-1 py-1 bg-pink-900 shadow-xl shadow-orange-600/20 sm:px-1 ">
    <div class="flex items-center justify-between mx-auto max-w-10xl">
    <div class="flex-1">
      
    <a class=" normal-case text-xl" href="/home">
    <img class="" src={background} width="80" height="30"/>
      </a>
     </div>
  <div class="flex-none">
  <motion.div
  whileHover={{ scale: 1.2 }}
  onHoverStart={() => console.log("starts")}
  onHoverEnd={() => console.log("ends")}

>
  
  <ul class="menu menu-horizontal p-3 gap-7 ">
   <li>
    

  
<button class="btn-xs btn-link link-underline link-underline-black  ">
        <Link to='/menu'>
          Menu
        </Link>
        </button>


   
    
        
      </li>
      
      
      
      <li tabindex="0">
       <button class="btn-xs btn-link link-underline link-underline-black  ">
       <Link to='/gallery'>
          Gallery
        </Link>
       </button>
    
        
      </li>
      <li>
        <button class="btn-xs btn-link link-underline link-underline-black ">
        <Link to='/hours'>
          Hours
        </Link>
        </button>

        
        
      </li>
    </ul>
    </motion.div>
        </div>
        </div>
      </header>


         
         
     

</div>
  )
}
}

export default Navbar;

