
import React from 'react'
import './template.styles.css'


const Footer=()=>
{ return(
<div className="footer">
        <div className="main">
                <div className="line"></div>

  <div id="ieee">IEEE Computer Society
 
  </div>
   

  <div className="line"></div>

        </div>
        <div id="vit">VIT Chapter</div>
        <div className="mainbox">
        <div className="logo">
                <img className="ieee_logo"src={require("./logo.png")}/>
                <br></br>
                <span id="text">
                Accrete Your Knowledge
                </span>
        </div>
        <div className="columns">
            <div className="col1" >
                <span className="title">Menu</span>
                <div className="para">
                <p>About</p>
                <p>Events</p>
                <p>Gallery</p>
                <p>Contact</p>
                </div>
           </div>
           <div className="col1" >
                <span className="title">Events</span>
                <div className="para">
                <p>Arcs</p>
                <p>Hackbattle</p>
                <p>Mozdev
                </p>
                </div>
                
           </div>
           <div className="col1">
                <span className="title">Projects</span>
                <div className="para">
                <p>Project_1</p>
                <p>Project_2</p>
                <p>Project_3</p>
                </div>
                
           </div>

           <div className="col1" >
                <span className="title">Contact us </span>
                <div className="para">
                <p>ieeecs@vit.ac.in</p>
                </div>
          </div>
        </div>
        </div>
        </div>

       
      
)
    }
    export default Footer