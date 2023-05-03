import Navbar from './components/Navbar'
import "swiper/css/bundle";
import "./styles.scss";
import Menu from './pages/Menu'
import Gallery from './pages/Gallery'
import Notfound from './pages/Notfound'
import Home from './pages/Home'
import Hours from './pages/Hours'
import Contact from './pages/Contact'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {




  return (
    <div > 
    <Router> 

    
    
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
              <Route path='/contact' element={<Contact />} />
              <Route path='/notfound' element={<Notfound />} />
             <Route path='/*' element={<Notfound />} />
             
      </Routes>

     
  




      





    </Router>
    </div>
  );
}

export default App;
