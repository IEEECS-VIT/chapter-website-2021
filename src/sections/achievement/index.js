import React from "react"
import { useThemeValue } from "../../utils/context"


import "./achievements.styles.css"

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
        Having won the award for "Best Chapter" twice, once in 2017 and then
        again in 2019, we at IEEE Computer Society VIT have no shortage of
        achievements. Our members have won 18 hackathons some of which were
        conducted by giants such as PayPal, AngelHack and NASA. We are also
        recognized globally, our members represented the country at CANSAT18
        organised by NASA and the European Rover challenge 18 organized by
        European space agency. 14 research papers have been published by our
        members, 2 being featured in the IEEE journal itself. Not just this, but
        our members have been the recipient of the prestigious Richard E Merwin
        scholarship. It’s not just about winning but also participation and
        leadership. Our members actively work with IEEE, by volunteering for
        IEEE Compute and other such features. Our members have also served as
        the team leads for IEEE CSIS and AICSSYC’19.
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
