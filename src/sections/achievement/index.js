import React from "react"

<<<<<<< HEAD
const Achievements = () => {
<<<<<<< HEAD
  return (
    <h1>Achievements</h1>
=======
import './achievements.styles.css'


const Achievements = () => {
  
  return (
    <div className="header">
     
        <div id="we"><b>What We</b></div>
        <div id="eve"><b>Achieved</b></div>
        <div className='content'>
        Having won the award for "Best Chapter" twice, once in 2017 and then again in 2019, 
            we at IEEE Computer Society VIT have no shortage of achievements. 
            Our members have won 18 hackathons some of which were conducted by giants such as PayPal, AngelHack and NASA.
             We are also recognized globally, our members represented the country at CANSAT18 organised by NASA and the European Rover challenge 18 organized by European space agency. 
              14 research papers have been published by our members, 2 being featured in the IEEE journal itself.
               Not just this, but our members have been the recipient of the prestigious Richard E Merwin scholarship. 
               It’s not just about winning but also participation and leadership. Our members actively work with IEEE,
               by volunteering for IEEE Compute and other such features. 
               Our members have also served as the team leads for IEEE CSIS and AICSSYC’19.
               </div>
               <div className="container">

                  <div className="box">
             <div className="bgimg">
                <img className="background" src={require("./bg.png")}/>
                </div>
               
               <div className="circle">
               
               <span id="num">15+</span>
              
               </div>
               
               
               <br></br><br></br>
               
               <div className="caption">Hackathon Winnners</div>
              
            
        </div>
               <div className="box">
             <div className="bgimg">
                <img className="background" src={require("./bg.png")}/>
                </div>
               
               <div className="circle">
               
               <span className="one">1</span>
              
               </div>
               
               
               <br></br><br></br>
               
               <div className="caption">Merwin Scholar</div>
              
            
        </div>
        <div className="box">
             <div className="bgimg">
                <img className="background" src={require("./bg.png")}/>
                </div>
               
               <div className="circle">
               
               <span className="one">2</span>
              
               </div>
               
               
               <br></br><br></br>
               
               <div className="caption">Best Chapter Awards</div>
              
            
        </div>
       
































              
              
              
               </div>
                 
                 
              
        </div>
        
>>>>>>> closes #3
  )
=======
  return <h1>Achievements</h1>
>>>>>>> 🎨 format with prettier
}

export default Achievements
