import {FaHome} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import {motion} from "framer-motion"







const NotFound = () => {

  

  return (
    <>
    


     <div className= "numbers">
    
    <main className="hours"></main>
    <main className='hours'>
     <motion.div animate={{ scale: [2, 2, 1] }} >

    <div className="text-center hero-content">
        <div className="max-w-lg">
          <h1 className="text-8xl font-bold mb-8">
          Error
          </h1>
          <p className="text-5xl mb-8">404 - Page Not Found</p>
          <Link to='/' className='btn glass px-1 py-1 bg-pink-900 shadow-xl shadow-red-600/20 sm:px-1 btn-lg' >
          <FaHome className='glassButton' />
          <p className="glassButton">Back To Home</p>
          </Link>
        </div>
      </div>



      </motion.div>







      </main>
      </div>
      


    </>
  )
}

export default NotFound

