import React from 'react'
import MENU from "../assets/MENU.pdf";
import Footer from '../minicomp/Footer'


function Menu() {
  return (
    <div>
      <h2>Menu Below!</h2>
      <br/>
      <br/>
    <main className='container mx-auto px-10 pb-0'>  
    
    


      
      <button class="btn btn-active w-20 h-10 p-2 bg-pink-900 shadow-xl shadow-orange-600/20 sm:px-1 rounded-md animate-bounce">
      <a href={MENU} download="MENU.pdf">Menu</a>
      
      </button>
      <button class="btn btn-active  w-20 h-10 p-2 bg-pink-900 shadow-xl shadow-orange-600/20 sm:px-1 rounded-md animate-bounce">
      <a href={MENU} download="MENU.pdf">Menu</a>
      
      </button>
      <button class="btn btn-active  w-20 h-10 p-2 bg-pink-900 shadow-xl shadow-orange-600/20 sm:px-1 rounded-md animate-bounce">
      <a href={MENU} download="MENU.pdf">Menu</a>
      
      </button>
      

      </main>

      <div className="bottom"> 
      <Footer />
      </div>
      
      
      
      
      
      </div>
      

    

    
    
  )
}

export default Menu