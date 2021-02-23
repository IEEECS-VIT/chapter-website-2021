import React from "react"
import { useThemeValue } from "../../utils/context"
import TeamCard from "./components/teamCard"

import classes from "./styles.module.css"

const OurTeamSection = () => {
  const { isDark } = useThemeValue()

  const cardInfo1 = {
    name: "Doggo Pupper",
    image: require("../../images/pupper.jpg"),
    position: "Doggo CEO",
    linkedIn: "https://linkedin.com/",
    twitter: "https://twitter.com/",
    personal: "https://dog.ceo/",
  }

  const cardInfo2 = {
    name: "Doggo Pupper",
    image: require("../../images/pupper.jpg"),
    position: "Doggo CEO",
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    personal: "https://dog.ceo/",
  }

  const cardInfo3 = {
    name: "Doggo Pupper",
    image: require("../../images/pupper.jpg"),
    position: "Doggo CEO",
    linkedIn: "https://linkedin.com/",
    twitter: "https://twitter.com/",
    personal: "https://dog.ceo/",
  }

  return (
    <div className={`${classes.container} ${isDark && classes.dark}`}>
      <div className={classes.headerWrapper}>
        {/* Header */}
        <h3 className={`${classes.header} ${isDark && classes.dark}`}>
          We Have
        </h3>
        <h1 className={classes.title}>Our Team</h1>
        <h6 className={`${classes.subTitle} ${isDark && classes.dark}`}>
          "Teamwork is the ability to work together towards a common vision. It
          is the fuel that allows common people to attain uncommin results."
        </h6>
        <h6 className={`${classes.subTitle} ${isDark && classes.dark}`}>
          -Andrew Carnegie
        </h6>
      </div>

      {/* Cards Body */}
      <div className={classes.cardsWrapper}>
        <TeamCard cardInfo={cardInfo1} />
        <TeamCard cardInfo={cardInfo2} />
        <TeamCard cardInfo={cardInfo3} />
        <TeamCard cardInfo={cardInfo1} />
        <TeamCard cardInfo={cardInfo2} />
        <TeamCard cardInfo={cardInfo3} />
        <TeamCard cardInfo={cardInfo1} />
        <TeamCard cardInfo={cardInfo2} />
        <TeamCard cardInfo={cardInfo3} />
        <TeamCard cardInfo={cardInfo1} />
        <TeamCard cardInfo={cardInfo2} />
        <TeamCard cardInfo={cardInfo3} />
        <TeamCard cardInfo={cardInfo3} />
      </div>
    </div>
  )
}

<<<<<<< HEAD
export default OurTeamSection
=======
export default OurTeam
>>>>>>> closes #3
