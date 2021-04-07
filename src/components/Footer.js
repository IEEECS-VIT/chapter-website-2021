import React from "react"
import { useThemeValue } from "../utils/context"
import classes from "./styles.module.css"

const Footer = () => {
  const { isDark } = useThemeValue()
  return (
    <div className={`${classes.footer} ${isDark && classes.dark}`}>
      <div className={`${classes.main} ${isDark && classes.dark}`}>
        {isDark ? (
          <div className={classes.lineDark}></div>
        ) : (
          <div className={classes.line}></div>
        )}

        <div className={classes.ieee}>IEEE Computer Society</div>

        {isDark ? (
          <div className={classes.lineDark}></div>
        ) : (
          <div className={classes.line}></div>
        )}
      </div>
      <div className={classes.vit}>VIT Chapter</div>
      <div className={classes.mainbox}>
        <div className={classes.logo}>
          <img
            className={classes.ieee_logo}
            src={isDark ? require("./logo-dark.png") : require("./logo.png")}
            alt="ieeecs-logo"
          />
          <br></br>
          <span className={classes.text}>Accrete Your Knowledge</span>
        </div>
        <div className={classes.columns}>
          <div className={classes.col1}>
            <span className={classes.title}>Menu</span>
            <div className={classes.para}>
              <p>About</p>
              <p>Events</p>
              <p>Gallery</p>
              <p>Contact</p>
            </div>
          </div>
          <div className={classes.col1}>
            <span className={classes.title}>Events</span>
            <div className={classes.para}>
              <p>Arcs</p>
              <p>Hackbattle</p>
              <p>Mozdev</p>
            </div>
          </div>
          {/* <div className={classes.col1}>
            <span className={classes.title}>Projects</span>
            <div className={classes.para}>
              <p>Project_1</p>
              <p>Project_2</p>
              <p>Project_3</p>
            </div>
          </div> */}

          <div className={classes.col1}>
            <span className={classes.title}>Contact&nbsp;us </span>
            <div className={classes.para}>
              <p>ieeecs@vit.ac.in</p>
            </div>
          </div>

          <div className={classes.col1} style={{ flexGrow: 2 }}>
            <div className={classes.logo_2}>
              <img
                className={classes.ieee_logo}
                src={
                  isDark ? require("./logo-dark.png") : require("./logo.png")
                }
                alt="ieeecs-logo"
              />
              <br></br>
              <span className={classes.text}>Accrete Your Knowledge</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer
