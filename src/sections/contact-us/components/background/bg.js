import React from 'react'
import './bg.css'

const Background=({ children })=>{
    return(
    
        <div className="bgg">
         
         <img className="cir" src={require('./Circle.png')}/>
         <img className="dot" src={require('./Dots.png')}/>
         <img className="triangle" src={require('./Triangle.png')}/> 
         <img className="square" src={require('./Square.png')}/>  
         <img className="square2" src={require('./Square.png')}/> 
         <img className="triangle2" src={require('./Triangle.png')}/> 
         <img className="dot2" src={require('./Dots.png')}/>
         <div className="fill"></div>
         <img className="cir2" src={require('./Circle.png')}/>
         <img className="cir3" src={require('./Circle.png')}/>
        
         { children } 
        
     
     
       
      
    
     </div>
        
    )}
export default Background