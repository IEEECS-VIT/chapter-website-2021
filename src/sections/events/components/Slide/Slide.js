import React from "react"
import Style from "./Slide.module.css"
import dots from "../svg/dots.svg"
import ldots from "../svg/dots.png"
import ellipse from "../svg/ellipse.svg"

const Slide = props => {
  return (
    <div
      onTouchStart={props.touchStart}
      onTouchMove={props.touchMove}
      onTouchEnd={props.touchEnd}
      onMouseDown={props.touchStart}
      onMouseMove={props.onTouchMove}
      onMouseLeave={props.touchEnd}
      onMouseUp={props.touchEnd}
      className={`${Style.Slide} ${props.isLeft && Style.Left} ${
        props.isDark && Style.Dark
      } ${props.isActive && Style.Active}`}
    >
      <img className={Style.Ellipse} src={ellipse} alt="ellipse" />
      <div className={Style.Tside}>
        <img src={props.bgImg} alt="background svg" />
        <div className={Style.Text}>
          <h1>{props.head}</h1>
          <h2>{props.subHead}</h2>
          <p>{props.children}</p>
        </div>
      </div>
      <div className={Style.Iside}>
        <div className={Style.SmallYellow}></div>
        <div className={Style.Yellow}></div>
        <img className={Style.DisImg} src={props.img} alt="display image" />
        <img
          className={Style.Dot1}
          src={!props.isDark ? ldots : dots}
          alt="dots1"
        />
        <img
          className={Style.Dot2}
          src={!props.isDark ? ldots : dots}
          alt="dots2"
        />
      </div>
    </div>
  )
}

export default Slide
