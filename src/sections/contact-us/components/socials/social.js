
import React from "react"
import { FaLinkedinIn,
    FaFacebookF,
          FaInstagram,
          FaTwitter} from 'react-icons/fa';
import './socialstyles.css'
 
const Social=()=>{

    let box={display:"inline-flex",borderRadius:"40%",background:"black",padding:"3px",fontSize:"40px"};
    let iconstyle={color:"white",fontSize:"25px"};


return(
     <div className="social">
     <a  className="s1" href="https://www.linkedin.com/company/ieee-computer-society-vit-vellore/">
   <span style={box}> 
   <FaLinkedinIn  style={iconstyle}/>
   </span>
   </a>
   <a  className="s1"href="https://twitter.com/ieeecsvit?lang=en">
   <span style={box}>
     
   <FaTwitter  style={iconstyle}/>
   </span>
   </a>
   {/* <span style={box}>
   <FaFacebookF style={iconstyle}/>
</span> */}
<a  className="s1" href="https://www.instagram.com/ieeecs_vit/">
   <span style={box}>
   <FaInstagram  style={iconstyle}/>
   </span>
</a>
</div>
)}
export default Social