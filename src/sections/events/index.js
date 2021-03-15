import React, {useEffect, useState} from "react"
import Style from './index.module.css'
import Slider from './components/Slider/Slider'
import EventsMain from './components/EventsMain/EventsMain'
const Events = () => {
    const [showSlider,setshowSlider ] = useState(false)
    const [showMain,setshowMain ] = useState(false)
    useEffect(()=>{
      window.onscroll = ()=>{
          const EventDiv = document.getElementsByClassName(Style.Events)[0]
          console.log(window.scrollY)
          if(EventDiv.offsetTop - EventDiv.clientHeight/3  < window.scrollY ){
              setshowMain(true)
          }
          else if(EventDiv.offsetTop - EventDiv.clientHeight  > window.scrollY ){
              setshowMain(false)
              setshowSlider(false)
          }
      }
    });
  return (
    <div className={Style.Events}>
      <EventsMain showMain={showMain} showSlider={showSlider} setshowSlider={setshowSlider}/>
      {showSlider?<Slider />:null}
    </div>
  )
}

export default Events
