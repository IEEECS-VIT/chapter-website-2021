import React from "react"
<<<<<<< HEAD

const ContactUs = () => {
  return (
    <div>
      <h1>Contact Us</h1>
    </div>
=======
import './contact.styles.css'
import { FaLinkedinIn,
  FaFacebookF,
        FaInstagram,
        FaTwitter} from 'react-icons/fa';
import { withAssetPrefix } from "gatsby";

const ContactUs = () => {
  let box={display:"inline-flex",borderRadius:"40%",background:"black",padding:"3px",fontSize:"40px"};
  let iconstyle={color:"white",fontSize:"25px"};
  return (
    <div className="outer">
  
      <h1 className="heading">Contact Us</h1>
      <form>
        <input id="contact_name" type="text" className="form-control" required placeholder="Your Name"></input>
      
      <br></br>
      
        <input type="email" className="form-control" required placeholder="Your Email"></input>
      
      <br></br>
      
        <textarea id="msg" cols="30" rows="7" className="form-control" required placeholder="Your Message"></textarea>
     
<br>
</br>   
<button className="btn">Submit</button>
     </form> 


     <div className="social">
       <a href="https://www.linkedin.com/company/ieee-computer-society-vit-vellore/">
     <span style={box}> 
     <FaLinkedinIn style={iconstyle}/>
     </span>
     </a>
     <a href="https://twitter.com/ieeecsvit?lang=en">
     <span style={box}>
       
     <FaTwitter style={iconstyle}/>
     </span>
     </a>
     <span style={box}>
     <FaFacebookF style={iconstyle}/>
  </span>
  <a href="https://www.instagram.com/ieeecs_vit/">
     <span style={box}>
     <FaInstagram style={iconstyle}/>
     </span>
  </a>
 </div>
     
     
</div>
    
    
>>>>>>> closes #3
  )
}

export default ContactUs
