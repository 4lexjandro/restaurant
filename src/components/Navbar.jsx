import React, { useState } from 'react';
import { FiMenu, FiAlignLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import background from '../assets/background.jpg'
import '../styles.scss'
import {motion} from "framer-motion"




const Navbar = () => {
	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);
	};

	const closeMenu = () => {
		setOpen(false);
	};

	return (

    <header >
    <div >
    <div >

    
    
    <a class=" normal-case text-xl" href="/home">
    <img class="LOGO" alt ="" src={background} width="80" height="30"/>
      </a>
      <a class=" normal-case text-xl" href="/home">
    <img class="LOGO2" alt ="" src={background} width="80" height="30"/>
      </a>
   

      
     
     </div>



  <div class="flex-none">
  
		<nav className="navbar">
			
			<div onClick={handleClick} className="nav-icon">
				{open ? <FiAlignLeft /> : <FiMenu />}
        <a class=" normal-case text-xl" href="/home">
    <img class="picture" alt ="" src={background} width="80" height="30"/>
      </a>

			</div>
			<ul className={open ? 'nav-links active' : 'nav-links'}>
				<li className="nav-item">
          
					<Link to="/" className="nav-link"  onClick={closeMenu}>
						Home
					</Link>
				</li>
				<li className="nav-item">
        
					<Link to="/gallery" className="nav-link" onClick={closeMenu}>
						Gallery
					</Link>
				</li>
				<li className="nav-item">
        
					<Link to="/hours" className="nav-link" onClick={closeMenu}>
						Hours
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/contact" className="nav-link" onClick={closeMenu}>
						Contact
					</Link>
				</li>
			</ul>
      
		</nav>
    

    
    </div>
    </div>
    </header>
	);
};

export default Navbar;