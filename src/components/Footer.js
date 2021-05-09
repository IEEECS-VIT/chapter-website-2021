import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import { useThemeValue } from "../utils/context"
import classes from "./styles.module.css"

const Footer = () => {
  const { isDark } = useThemeValue()
  return (
    <div className={`${classes.footer} ${isDark && classes.dark}`}>
      <div className={classes.footerWrapper}>
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
              <p
                onClick={() => {
                  scrollTo("#About")
                }}
              >
                About
              </p>
              <p
                onClick={() => {
                  scrollTo("#Events")
                }}
              >
                Events
              </p>
              <p
                onClick={() => {
                  scrollTo("#Team")
                }}
              >
                Team
              </p>
              <p
                onClick={() => {
                  scrollTo("#Contact")
                }}
              >
                Contact
              </p>
                {/* <p>About</p>
                <p>Events</p>
                <p>Gallery</p>
                <p>Contact</p> */}
              </div>
            </div>
            {/* <div className={classes.col1}>
              <span className={classes.title}>Events</span>
              <div className={classes.para}>
                <p>Arcs</p>
                <p>Hackbattle</p>
                <p>Mozdev</p>
              </div>
            </div> */}
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
                <p><a href="mailto:ieeecsvit@gmail.com">ieeecsvit@gmail.com</a></p>
              </div>
            </div>
            <div className={classes.footerAbout}>
              <p>We, here at IEEECS, nurture the coders and leaders of tomorrow. We empower and support new ideas giving them a platform to shine. 
                IEEECS has been a home to great ideas capable of bringing a better future for all. </p>
            </div>
          </div>
          <div className={`${classes.mobileLogoDiv}`} style={{ flexGrow: 2 }}>
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
        <div></div>
      </div>
    </div>
  )
}
export default Footer
