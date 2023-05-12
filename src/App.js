import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import "swiper/css/bundle";
import "./styles.scss";
import Menu from './pages/Menu'
import Gallery from './pages/Gallery'
import Notfound from './pages/Notfound'
import Home from './pages/Home'
import Hours from './pages/Hours'
import {Helmet} from "react-helmet";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import Cloud from './assets/Cloud.mp4';
import styled from "styled-components";
import Footer from './minicomp/Footer'




const Bottom = styled.div`
    position:fixed;
    bottom:-3%;
    width:100%;
    color: rgb(255, 255, 255);
`;


function App() {
  



  return (
    <>
    
    
    <div> 
    <Helmet>
      <meta charSet="utf-8" />
      <title>El Cazador Cafe</title>
      <link rel="el cazador cafe" href="https://elcazadorcafe.vercel.app/" />
     </Helmet>
      
      <div className="main">
    <div className="overlay">

<video autoPlay={true} 
      loop={true}
      muted playsInline={true} 
      controls={false}
      disablePictureInPicture={true} 
      id='video' className="vid"
      >
        {/* Battery mode may neeed to be off? */}
        <source
          src={Cloud}
          type="video/mp4"
        />
        </video>



     </div>


    <Router> 
      <ScrollToTop/>
<div className="top"><Navbar /></div>
      
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
     

      


     


      <Routes>
              <Route path='/menu' element={<Menu />} />
              <Route path='/gallery' element={<Gallery />} />
              <Route path='/hours' element={<Hours />} />
              <Route path='/' element={<Home />} />
              <Route path='/home' element={<Home />} />
              
              <Route path='/notfound' element={<Notfound />} />
             <Route path='/*' element={<Notfound />} />
             
      </Routes>
    </Router>


 
      </div>
      </div>



    <Bottom> 
      <Footer />
      </Bottom>
    </>
  );
}

export default App;
