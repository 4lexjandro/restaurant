import {FaHome} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import Footer from '../minicomp/Footer'
import {motion} from "framer-motion"
import styled from "styled-components";



const NotFound = () => {

  const Bottom = styled.div`
    position:fixed;
    bottom:-3%;
    width:100%;
    color: rgb(255, 255, 255);
`;

  return (
    <main className='hours'>
     <motion.div animate={{ scale: [2, 2, 1] }} >

    <div className="text-center hero-content">
        <div className="max-w-lg">
          <h1 className="text-8xl font-bold mb-8">
          Error
          </h1>
          <p className="text-5xl mb-8">404 - Page Not Found</p>
          <Link to='/' className='btn px-1 py-1 bg-pink-900 shadow-xl shadow-orange-600/20 sm:px-1 btn-lg' >
          <FaHome className='hours' />
          <p className="hours">Back To Home</p>
          </Link>
        </div>
      </div>



      </motion.div>
      <Bottom> 
      <Footer />
      </Bottom>
  
    </main>
  )
}

export default NotFound

