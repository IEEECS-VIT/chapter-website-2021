
import React from "react"
import { FaLinkedinIn,
    FaFacebookF,
          FaInstagram,
          FaTwitter} from 'react-icons/fa';
import './socialstyles.css'
 
const Social=()=>{


return(
     <div className="social">
     <a  className="s1" href="https://www.linkedin.com/company/ieee-computer-society-vit-vellore/">
   <span className="boxx"> 
   <FaLinkedinIn className="iconstyle"/>
   </span>
   </a>
   <a  className="s1"href="https://twitter.com/ieeecsvit?lang=en">
   <span className="boxx">
     
   <FaTwitter  className="iconstyle"/>
   </span>
   </a>
   <a className="s1">
    <span className="boxx">
   <FaFacebookF className="iconstyle"/>
</span> 
</a>
<a  className="s1" href="https://www.instagram.com/ieeecs_vit/">
   <span className="boxx">
   <FaInstagram  className="iconstyle"/>
   </span>
</a>
</div>
)}
export default Social