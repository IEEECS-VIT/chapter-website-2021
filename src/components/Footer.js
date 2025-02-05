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
              </div>
            </div>
            <div className={classes.col1}>
              <span className={classes.title}>Contact&nbsp;us </span>
              <div className={classes.para}>
                <p><a href="mailto:ieeecs@vit.ac.in" targrt="_blank" rel="noopener noreferrer">ieeecs@vit.ac.in</a></p>
              </div>
              <div className={classes.para}>
                <p><a href="tel:+919380302937" targrt="_blank" rel="noopener noreferrer">+91 93803 02937</a></p>
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
