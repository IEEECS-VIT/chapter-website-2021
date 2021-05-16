import React from "react"
import Style from "./EventsMain.module.css"
import dots from "../svg/dots.svg"
import ldots from "../svg/dots.png"
import ellipse from "../svg/ellipse.svg"
import semiEllipse from "../svg/semiEllipse.svg"

const EventsMain = props => {
  let classList = [Style.EventsMain]
  if (props.showSlider) {
    classList.push(Style.Disappear)
  } else {
    classList.filter(a => {
      return a !== Style.Disappear
    })
  }
  if (props.showMain) {
    classList.push(Style.Active)
  } else {
    classList.filter(a => {
      return a !== Style.Active
    })
  }

  return (
    <div className={`${classList.join(" ")} ${props.isDark && Style.Dark}`}>
      <img className={Style.Semi1} src={semiEllipse} alt="semi1" />
      <img className={Style.Semi2} src={semiEllipse} alt="semi2" />
      <img className={Style.Half1} src={ellipse} alt="half1" />
      <img className={Style.Half2} src={ellipse} alt="half2" />
      <div className={Style.Middle}>
        <div className={Style.Text}>
          <h3>Have you been to any of our</h3>
          <h1>
            <super>EVENTS</super>
          </h1>
          <div>You should some time!</div>
          <button
            onClick={() => {
              props.setshowSlider(true)
            }}
          >
            Learn More
          </button>
        </div>
        <img
          className={Style.Dot1}
          src={props.isDark ? dots : ldots}
          alt="dots"
        />
        <img
          className={Style.Dot2}
          src={props.isDark ? dots : ldots}
          alt="dots"
        />
        <div className={Style.Yellow}></div>
        <div className={Style.Mirror}></div>
        <div className={Style.Gray}></div>
      </div>
    </div>
  )
}

export default EventsMain
