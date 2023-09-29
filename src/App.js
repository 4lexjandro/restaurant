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
import flame from './assets/flame.jpeg';
import styled from "styled-components";
import Footer from './minicomp/Footer'
import { useState, useEffect, CSSProperties } from "react";
import MoonLoader from 'react-spinners/ClipLoader';





const Bottom = styled.div`
    position:fixed;
    bottom:-3%;
    width:100%;
    color: rgb(255, 255, 255);
`;

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  
};


function App() {

  const [loading, setLoading] = useState(false)

 

  useEffect(()=> {
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },500)
    
  },[])



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
      <img src={flame} className="vid" alt=''/>
     </div> 
  
     {
    loading ?
    <MoonLoader color={'maroon'} 
    loading={loading} 
    size={100} 
    cssOverride={override}
   /> 
    : 

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
}     


 
      </div>
      </div>

    
    <Bottom> 
      <Footer />
      </Bottom>

    </>
  
  );
}

export default App;
