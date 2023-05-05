// import React, { useState } from 'react';
// import { FiMenu, FiAlignLeft } from 'react-icons/fi';
// import { Link } from 'react-router-dom';
// import pic5 from '../assets/pic5.png'
// import '../styles.scss'
// import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'




// const Navbar = () => {
// 	const [open, setOpen] = useState(false);

// 	const handleClick = () => {
// 		setOpen(!open);
// 	};

// 	const closeMenu = () => {
// 		setOpen(false);
// 	};

// 	return (

//     <header >
		

    
//     {/* Two images are placed here to perform the option where, if hamburger
//     menu is active, logo stays in the same corner as when burger menu is not present */}
//     <a class=" normal-case text-xl" href="/home">
//       <img class="LOGO" alt ="" src={pic5} width="90" height="30"/>
//     </a>
//     <a class=" normal-case text-xl" href="/home">
//       <img class="LOGO2" alt ="" src={pic5} width="80" height="30"/>
//     </a>
  


//   <div class="flex-none">
// 		<nav className="navbar">
// 			<div onClick={handleClick} className="nav-icon">
// 				{open ? <FiAlignLeft /> : <FiMenu />}

//         <a class=" normal-case text-xl" href="/home">
//     <img class="picture" alt ="" src={pic5} width="80" height="30"/>
//       </a>

// 			</div>


	
// 			<ul className={open ? 'nav-links active' : 'nav-links'}>

// 				<li className="nav-item">
// 					<Link to="/menu" className="nav-link"  onClick={closeMenu}>
// 						Menu
// 					</Link>
// 				</li>
				
// 				<li className="nav-item">
// 					<Link to="/gallery" className="nav-link" onClick={closeMenu}>
// 						Gallery
// 					</Link>
// 				</li>
				


// 				<li className="nav-item">
// 					<Link to="/hours" className="nav-link" onClick={closeMenu}>
// 						Hours
// 					</Link>
// 				</li>


// 				<li className="nav-item">
// 					<Link to="/contact" className="nav-link" onClick={closeMenu}>
// 						Contact
// 					</Link>
// 				</li>

//       </ul>


// 		</nav>
//     </div>
//     </header>
// 	);
// };

// export default Navbar;


import React, { useState } from 'react'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import pic5 from '../assets/pic5.png'





const Navbarr = () => {

    const [expand, updateExpanded] = useState(false);
    const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);


  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container >
        <Navbar.Brand href="/" className="d-flex">
          <img src={pic5} alt="" width="50" height="50" />
          
          
        </Navbar.Brand>
        <br/>

        
		<Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        
        <br/>
        

        




        <Navbar.Collapse id="responsive-navbar-nav" className="centerNav">
          <Nav className="ms-auto" defaultActiveKey="#menu">
            <Nav.Item>
              <Nav.Link as={Link} to="/menu" onClick={() => updateExpanded(false)}>
               Menu
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/hours"
                onClick={() => updateExpanded(false)}
              >
                 Hours
              </Nav.Link>
            </Nav.Item>

            

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/gallery"
                onClick={() => updateExpanded(false)}
              >
                 Gallery
              </Nav.Link>
            </Nav.Item>


			

            


            

            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr;
