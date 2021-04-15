import React from "react"
import classes from "./Slide.module.css"
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
      className={`${classes.Slide} ${props.isLeft && classes.Left} ${
        props.isDark && classes.Dark
      } ${props.isActive && classes.Active}`}
      role="slideable"
    >
      <img className={classes.Ellipse} src={ellipse} alt="ellipse" />
      <div className={classes.Tside}>
        <img src={props.bgImg} alt="background" />
        <div className={classes.Text}>
          <h1>{props.head}</h1>
          <h2>{props.subHead}</h2>
          <p>{props.children}</p>
        </div>
      </div>
      <div className={classes.Iside}>
        <div className={classes.SmallYellow}></div>
        <div className={classes.Yellow}></div>
        <img className={classes.DisImg} src={props.img} alt="main" />
        <img
          className={classes.Dot1}
          src={!props.isDark ? ldots : dots}
          alt="dots1"
        />
        <img
          className={classes.Dot2}
          src={!props.isDark ? ldots : dots}
          alt="dots2"
        />
      </div>
    </div>
  )
}

export default Slide
