import React from 'react'
import Footer from '../minicomp/Footer'

import {motion} from "framer-motion"

function Home() {
  return (
    <div> 

   
    <div class="home">
      <motion.div animate={{ scale: [2, 2, 1] }} >
      <h1>Welcome!</h1>
        </motion.div>
        </div>

        {/*Move animated div over to center */}


        <div class="hero min-h-screen">
  <div class="hero-overlay bg-opacity-60"></div>
  <div class="hero-content text-center text-neutral-content">
    <div class="max-w-md">
      <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
      <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
<Footer />
      

      <br/>
      


      
      </div>
  )
}

export default Home