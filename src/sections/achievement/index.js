import React from "react"
import { useThemeValue } from "../../utils/context"
// import "./achievements.styles.css"
import classes from "./achievements.module.css"

const Achievements = () => {
  const { isDark } = useThemeValue()
  return (
    <div className={`${classes.container} ${isDark && classes.dark}`}>
      <div className={classes.headerWrapper}>
        <h3 className={`${classes.header} ${isDark && classes.dark}`}>
          What We
        </h3>

        <h3 className={classes.title}>Achieved</h3>
      </div>

      <div className={classes.content}>
        2-time ‘Most Outstanding Student Chapter’ Award Winners in the years
        2017 and 2019 at All India IEEE Computer Society Student &amp; Young
        Professional Congress , 22+ Hack-a-thons conquered, some organized by
        NASA, AngelHack, and PayPal and 23 research papers published with 2
        being featured in the IEEE journal are just the tip of the iceberg. We
        have represented the country at CanSat 18 and the European Rover
        Challenge’18 organized by the European Space Agency. The prestigious
        Richard E. Merwin scholarship has been awarded to 3 of our very own
        members for their valuable contributions to the Computer Society. The
        Student branch has been a remarkable administrator for providing
        proactive volunteers in official IEEE events like IEEE YESIST12, IEEE
        WIE PBL, IEEE Compute, TechX’19 IEEE Kolkata Section, IEEE IPL to name a
        few. Some of our members have headed and set new bars for the events
        like IEEE CSIS, AICSSYC'19, STEP’20 IEEE Madras Section by serving there
        as Team Leads.
      </div>
      <div className={classes.numberContainer}>
        <div className={classes.box}>
          <div className={classes.bgimg}>
            <img
              className={classes.background}
              src={require("./bg.png")}
              alt="bg"
            />
          </div>

          <div className={classes.circle}>
            <span className={`${classes.num} ${isDark && classes.darkOne}`}>
              15+
            </span>
          </div>

          <br></br>
          <br></br>

          <div className={classes.caption}>Hackathon Winnners</div>
        </div>

        <div className={classes.box}>
          <div className={classes.bgimg}>
            <img
              className={classes.background}
              src={require("./bg.png")}
              alt="bg"
            />
          </div>

          <div className={classes.circle}>
            <span className={`${classes.one} ${isDark && classes.darkOne}`}>
              1
            </span>
          </div>

          <br></br>
          <br></br>

          <div className={classes.caption}>Merwin Scholar</div>
        </div>
        <div className={classes.box}>
          <div className={classes.bgimg}>
            <img
              className={classes.background}
              src={require("./bg.png")}
              alt="bg"
            />
          </div>

          <div className={classes.circle}>
            <span className={`${classes.one} ${isDark && classes.darkOne}`}>
              2
            </span>
          </div>

          <br></br>
          <br></br>

          <div className={classes.caption}>Best Chapter Awards</div>
        </div>
      </div>
    </div>
  )
}

export default Achievements
