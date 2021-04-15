import React, { useEffect, useState } from "react"
import Style from "./index.module.css"
import Slider from "./components/Slider/Slider"
import EventsMain from "./components/EventsMain/EventsMain"
import { useThemeValue } from "../../utils/context"
const Events = () => {
  const [showSlider, setshowSlider] = useState(false)
  const [showMain, setshowMain] = useState(false)
  const { isDark } = useThemeValue()
  const scrollFunc = () => {
    const EventDiv = document.getElementsByClassName(Style.Events)[0]
    if (EventDiv.offsetTop - EventDiv.clientHeight / 3 < window.scrollY) {
      setshowMain(true)
    } else if (EventDiv.offsetTop - EventDiv.clientHeight > window.scrollY) {
      setshowMain(false)
      setshowSlider(false)
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", scrollFunc)
    return () => {
      window.removeEventListener("scroll", scrollFunc)
    }
  }, [])
  return (
    <div className={`${Style.Events} ${isDark && Style.Dark}`}>
      <EventsMain
        isDark={isDark}
        showMain={showMain}
        showSlider={showSlider}
        setshowSlider={setshowSlider}
      />
      {showSlider ? <Slider isDark={isDark} /> : null}
    </div>
  )
}

export default Events
