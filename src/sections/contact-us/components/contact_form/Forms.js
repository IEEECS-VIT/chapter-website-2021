import React from "react"
import './formstyles.css'


const Forms=()=>{

return(

 <form>
 <div className="form_div">
 <input id="contact_name" type="text" className="form-control" required placeholder="Your Name" ></input>


<br></br>

 <input type="email" className="form-control" required placeholder="&#x2709;Your Email"></input>

<br></br>

 <textarea id="msg" cols="30" rows="7" className="form-control" required placeholder="Your Message"></textarea>

<br>
</br>   
<button className="btn" >Submit</button>
</div>
</form> 
)}
export default Forms