
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    
    faGithub,
    
    faLinkedin
  } from "@fortawesome/free-brands-svg-icons";





export default function SocialFollow() {
  return (
    
        
      


    <div className="grid grid-flow-col gap-40 bg-black-900 shadow-xl shadow-orange-600/20">
      
 


      <a href="https://github.com/4lexmendez"
        className="github social">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>

      <a href="https://www.linkedin.com/in/alexjandro-mendoza-17b28a19b/" className="linkedin social">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      
      
      
     


     


      

      </div>
     
    );
  }