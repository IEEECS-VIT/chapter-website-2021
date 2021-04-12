import React from "react"
import { useThemeValue } from "../../../../../utils/context"
import classes from "./style.module.css"

const BigScreenBackground = () => {
  const { isDark } = useThemeValue()

  return (
    <div className={`${classes.background} ${isDark && classes.dark}`}>
      <img
        className={classes.top_left_circle}
        src={require("../circle.png")}
        alt="circle"
      />
      <img
        className={classes.left_dots}
        src={require("../dots.png")}
        alt="dot"
      />
      <img
        className={classes.left_triangles}
        src={require("../triangle.png")}
        alt="triangle"
      />
      <img
        className={classes.left_square}
        src={require("../square.png")}
        alt="square"
      />
      <img
        className={classes.right_triangles}
        src={require("../triangle.png")}
        alt="triangle"
      />
      <img
        className={classes.right_square}
        src={require("../square.png")}
        alt="square"
      />
      <img
        className={classes.right_dots}
        src={require("../dots.png")}
        alt="dot"
      />
      <div className={classes.ball}></div>
      <img
        className={classes.bottom_right_circle}
        src={require("../circle.png")}
        alt="circle"
      />
      <div className={classes.quarter_circle}>
        <div className={classes.outer_quarter_circle}></div>
        <div
          className={`${classes.inner_quarter_circle}  ${
            isDark && classes.dark
          }`}
        ></div>
      </div>
    </div>
  )
}

export default BigScreenBackground
