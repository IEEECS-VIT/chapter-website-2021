import React, {useState} from "react"
import Style from './index.module.css'
import Slider from './components/Slider/Slider'
import EventsMain from './components/EventsMain/EventsMain'
const Events = () => {
    const [showSlider,setshowSlider ] = useState(false)
  return (
    <div className={Style.Events}>
      <EventsMain showSlider={showSlider} setshowSlider={setshowSlider}/>
      {showSlider?<Slider />:null}
    </div>
  )
}

export default Events
