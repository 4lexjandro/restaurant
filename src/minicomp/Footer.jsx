

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faGoogle,
  } from "@fortawesome/free-brands-svg-icons";
  


function Footer() {
    




  return (
    <div >
      <br/>
    <footer className="footer items-center text-primary-content footer-center ">

  <div className="grid-flow-col gap-4 text-primary-content footer-center">

   <div className="address"> 20 Park Hill Ave, Yonkers, NY 10705</div>
  
      <a href="https://www.google.com/maps/place/El+Cazador/@40.9292339,-73.8948539,15z/data=!4m5!3m4!1s0x0:0x49546978e331c14!8m2!3d40.9290201!4d-73.8950004"
        className="">
        <FontAwesomeIcon className="footerlogos" icon={faGoogle} size="2x" />
      </a>
      <a href="https://www.facebook.com/people/El-Cazador-Restaurant/100071299341187/"
        className="">
        <FontAwesomeIcon className="footerlogos" icon={faFacebook} size="2x" />
      </a>

  </div>
</footer>
<br/>


</div>
  )
}

export default Footer