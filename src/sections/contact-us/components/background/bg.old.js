import React from "react"
import { useThemeValue } from "../../../../utils/context"
import classes from "./bg.module.css"

const Background = ({ children }) => {
  const { isDark } = useThemeValue()

  return (
    <div className={`${classes.bgg} ${isDark && classes.dark}`}>
      <img className="cir" src={require("./Circle.png")} alt="circle" />
      <img className="dot" src={require("./Dots.png")} alt="dot" />
      <img
        className={classes.triangle}
        src={require("./Triangle.png")}
        alt="triangle"
      />
      <img
        className={classes.square}
        src={require("./Square.png")}
        alt="square"
      />
      <img
        className={classes.square2}
        src={require("./Square.png")}
        alt="square"
      />
      <img
        className={classes.triangle2}
        src={require("./Triangle.png")}
        alt="triangle"
      />
      <img className={classes.dot2} src={require("./Dots.png")} alt="dot" />
      <div className={classes.fill}></div>
      <img
        className={classes.cir2}
        src={require("./Circle.png")}
        alt="circle"
      />
      <div className={classes.cir3}></div>
      <div className={classes.inner_cir}></div>
      <img
        className={classes.triangle3}
        src={require("./Triangle.png")}
        alt="triangle"
      />

      {children}
    </div>
  )
}
export default Background
