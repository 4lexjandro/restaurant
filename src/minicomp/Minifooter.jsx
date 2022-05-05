import Social from './Social'


function Minifooter() {
    const footerYear = new Date().getFullYear()




  return (
    
    
    <footer className='footer p-0 bg-black-900 shadow-xl shadow-cyan-600/20 
    text-primary-content footer-center '>
    
    <div>
      <Social />
       
        
        <p>Created by @4lexmendez</p>

    </div>
    </footer>
  )
}

export default Minifooter