import React, { useState } from 'react';
import { FiMenu, FiMinus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import background from '../assets/background.jpg'
import {motion} from "framer-motion"


const Junk = () => {
	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);
	};

	const closeMenu = () => {
		setOpen(false);
	};

	return (




    
    <header>

    
    
      
    <a class=" normal-case text-xl" href="/home">
    <img class="" src={background} width="100" height="100"/>
      </a>
     
  <div class="flex-none">
  
		<nav className="navbar">
			
			<div onClick={handleClick} className="nav-icon">
				{open ? <FiMinus /> : <FiMenu />}
			</div>
			<ul className={open ? 'nav-links active' : 'nav-links'}>
      
				<li className="nav-item">
					<Link to="/" className="nav-link" onClick={closeMenu}>
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
    

    
   
    </header>
    
	);
};

export default Junk;