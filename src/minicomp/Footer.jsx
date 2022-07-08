

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faGoogle,
  } from "@fortawesome/free-brands-svg-icons";
  import background from '../assets/background.jpg'


function Footer() {
    const footerYear = new Date().getFullYear()




  return (
    <div > 
      <br/>
      
    <footer class="footer items-center p-5 bg-pink-900 shadow-xl shadow-orange-600/20  ">
   
  <div class="items-center grid-flow-col">
    <img src={background} width="60" height ="60"/>
    <p>Copyright © 2022 - All rights reserved</p>
  </div> 
  <div class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
  
      <a href="https://www.google.com/maps/place/El+Cazador/@40.9292339,-73.8948539,15z/data=!4m5!3m4!1s0x0:0x49546978e331c14!8m2!3d40.9290201!4d-73.8950004"
        className="google social">
        <FontAwesomeIcon icon={faGoogle} size="2x" />
      </a>
      <a href="https://facebook.com"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
  </div>
</footer>
<br/>


</div>
  )
}

export default Footer