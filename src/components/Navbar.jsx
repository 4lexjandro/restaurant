import styled from "styled-components";
import '../styles.css'
import {Link} from 'react-router-dom'
import background from '../assets/background.jpg'

const Nav = styled.nav`
  width: 25rem;
  max-width: 40rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.9s;
  @media only Screen and (max-width: 48em) {
    display: none;
  }
  a {
    font-weight: 600;
    line-height: 1.5;
    color: var(--white);
    &::after {
      content: "";
      display: block;
      height: 3px;
      width: 0;
      background: transparent;
      transition: width 0.5s;
    }
    &:not(:last-child):hover::after {
      width: 100%;
      background: var(--purple);
    }
    /* &:not(:last-child) {
      margin-right: 2rem;
    } */
    /* @media only Screen and (max-width: 48em) {
      &:not(:last-child) {
        margin-right: 1rem;
      }
    } */
  }
`;



  


const Navbar = () => {
{
     return (


    <div className="flex-1 px-8 mx-8 ">
    <header class="sticky top-0 z-30 w-full px-2 py-3 bg-pink-900 shadow-xl shadow-orange-600/20 sm:px-1 ">
    <div class="flex items-center justify-between mx-auto max-w-10xl">
    <div class="flex-1">
    <a class=" normal-case text-xl" href="/home">
    <img class="" src={background} width="80" height="30"/>
      </a>
     </div>
  <div class="flex-none">
  
  <ul class="menu menu-horizontal p-3 gap-7 ">
   <li>
    


   
    
        <button class="btn-xs btn-link link-underline link-underline-black  ">
        <Link to='/menu'>
          Menu
        </Link>
        </button>
      </li>
      
      
      
      <li tabindex="0">
       <button class="btn-xs btn-link link-underline link-underline-black  ">
       <Link to='/gallery'>
          Gallery
        </Link>
       </button>
    
        
      </li>
      <li>
        <button class="btn-xs btn-link link-underline link-underline-black ">
        <Link to='/hours'>
          Hours
        </Link>
        </button>

        
        
      </li>
    </ul>
        </div>
        </div>
      </header>


         
         
     

</div>
  )
}
}

export default Navbar;

