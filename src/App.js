import Navbar from './components/Navbar'
import Footer from './minicomp/Footer'
import Minifooter from './minicomp/Minifooter'
import Menu from './pages/Menu'
import Gallery from './pages/Gallery'
import Notfound from './pages/Notfound'
import Home from './pages/Home'
import Hours from './pages/Hours'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'


function App() {




  return (
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
              <Route path='/notfound' element={<Notfound />} />
             <Route path='/*' element={<Notfound />} />
      </Routes>

     
  




      





    </Router>
  );
}

export default App;
