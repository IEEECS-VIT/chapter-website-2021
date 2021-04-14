import React from "react"
import { useThemeValue } from "../../../../../utils/context"
import classes from "./style.module.css"

const SmallSreenBackground = () => {
  const { isDark } = useThemeValue()

  return (
    <>
      <div className={`${classes.background} ${isDark && classes.dark}`}>
        <img
          className={classes.top_triangles}
          src={require("../triangle.png")}
          alt="triangle"
        />
        <img
          className={classes.left_triangles}
          src={require("../triangle.png")}
          alt="triangle"
        />
        <img
          className={classes.bottom_triangles}
          src={require("../triangle.png")}
          alt="triangle"
        />
        <div className={classes.ball}></div>
      </div>
    </>
  )
}

export default SmallSreenBackground
