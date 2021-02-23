import React from "react"

import './circle.styles.css'
const Circle = ({info})=>{
    const{
        text,
        caption
    }=info
    return(
         <div className="box">
             <div className="img">
               
               <span className="circle">
               <span id="one">{text}</span>
               </span>
               
               
               <br></br><br></br>
               
               <span id="caption">{caption}</span>
              
            </div>
        </div>

               
               
            
    )
}
export default Circle