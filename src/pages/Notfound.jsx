import {FaHome} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import Footer from '../minicomp/Footer'
import {motion} from "framer-motion"

function NotFound() {
  return (
    <div className='hero'>
      <motion.div animate={{ x: 200,rotate:180 }}   
transition={{ duration: 2, repeat: Infinity }} >
  <h1>pow</h1>
</motion.div>
      
      
    </div>
  )
}

export default NotFound


{/*
orignal code

<div className="text-center hero-content">
        <div className="max-w-lg">
          <h1 className="text-8xl font-bold mb-8">
          oops!
          </h1>
          <p className="text-5xl mb-8">404 - Page Not Found</p>
          <Link to='/' className='btn px-1 py-1 bg-pink-900 shadow-xl shadow-orange-600/20 sm:px-1 btn-lg' >
          <FaHome className='mr-2' />
          Back To Home
          </Link>
        </div>
      </div>
      <div className="bottom"> 
      <Footer />
      </div>*/}