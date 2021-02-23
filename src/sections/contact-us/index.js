import React from "react"
<<<<<<< HEAD

const ContactUs = () => {
  return (
    <div>
      <h1>Contact Us</h1>
    </div>
=======
import './contact.styles.css'
const ContactUs = () => {
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
     
     
</div>
    
    
>>>>>>> closes #3
  )
}

export default ContactUs
