import React from "react"
import { useThemeValue } from "../../utils/context"
import TeamCard from "./components/teamCard"

import classes from "./styles.module.css"

const OurTeamSection = () => {
  const { isDark } = useThemeValue()

  const cardInfos = [
    {
      name: "Ram Krishna",
      image: "https://cidcuhpuhx.ufs.sh/f/YGMgB3VOGZCWQ0Q7rxmNc3x6oSgLftpe9Ydh45vRMTuCKj7B",
      position: "Chairperson",
      linkedIn: "https://www.linkedin.com/in/ramkrishna2967",
      github: null,
    },
    {
      name: "Anubhav Batra",
      image: "https://cidcuhpuhx.ufs.sh/f/YGMgB3VOGZCW1C8vy9oSz25JvCDndZjKOg7PGAia4rIR6N0s",
      position: "Vice Chairperson",
      linkedIn: "https://www.linkedin.com/in/anubhav-batra-9ba7271b1/",
      github: null,
    },
    {
      name: "Aditya Verma",
      image: "https://cidcuhpuhx.ufs.sh/f/YGMgB3VOGZCWeGpdS8Q2yNDZhMKWBsJjrSHARu1FmoQ8avUP",
      position: "Secretary",
      linkedIn: "https://www.linkedin.com/in/adityaverma121",
      github: null,
    },
    {
      name: "Arjun Bector",
      image: "https://cidcuhpuhx.ufs.sh/f/YGMgB3VOGZCWyXgVI3qlYpqZKeWm64naogFMuEwcL9dQ21z5",
      position: "Co-Secretary",
      linkedIn: "https://www.linkedin.com/in/arjun-bector-348118248/",
      github: "https://github.com/arjunbector",
    },
    {
      name: "Ansh Mehta",
      image: "https://cidcuhpuhx.ufs.sh/f/YGMgB3VOGZCWyT2GOkqlYpqZKeWm64naogFMuEwcL9dQ21z5",
      position: "Technical Head",
      linkedIn: "https://www.linkedin.com/in/anshmehta/",
      github: "https://github.com/anshmehta7x",
    },
    {
      name: "Akshit Anand",
      image: "https://cidcuhpuhx.ufs.sh/f/YGMgB3VOGZCWZG7KqoL6H9zSAaVip8vXf1RMoumtxw7nOCdP",
      position: "Projects Head",
      linkedIn: "https://www.linkedin.com/in/akshit-anand-10a90b219/",
      github: "https://github.com/akshit1003",
    },
    {
      name: "Dhriti Sharma",
      image: "https://cidcuhpuhx.ufs.sh/f/YGMgB3VOGZCW2Zx6ztTnXLKmIdqBW8NfJsyDcv0h3QSR69Fr",
      position: "Events Head",
      linkedIn: "https://www.linkedin.com/in/dhriti-sharma-b03014275/",
      github: null,
    },
    {
      name: "Varun Shirsath",
      image: "https://cidcuhpuhx.ufs.sh/f/YGMgB3VOGZCWXtAPjjyN9UsL2gtiX4xvrhOVoQWYk7alnz3m",
      position: "Publicity Head",
      linkedIn: "https://www.linkedin.com/in/varun-shirsath-50403534b",
      github: null,
    },
    {
      name: "Parth Jadhav",
      image: "https://cidcuhpuhx.ufs.sh/f/YGMgB3VOGZCWXZcnP3PyN9UsL2gtiX4xvrhOVoQWYk7alnz3",
      position: "Design Head",
      linkedIn: "https://www.linkedin.com/in/parthjadhav2004",
      github: null,
    },
    {
      name: "Gouri Kanade",
      image: "https://cidcuhpuhx.ufs.sh/f/YGMgB3VOGZCWtQgUQCH0GT15KReO3s0LUm8kcavwP4WyiSXf",
      position: "Research and Development Head",
      linkedIn: "https://www.linkedin.com/in/gourikanade1012/",
      github: null,
    },
    {
      name: "Medhansh Jain",
      image: "https://cidcuhpuhx.ufs.sh/f/YGMgB3VOGZCWw0aQ23brOtUyIMGHs98e1KmLY6kRjb2DP0lV",
      position: "Web Lead",
      linkedIn: "https://www.linkedin.com/in/medhansh-jain",
      github: "https://github.com/medhansh17",
    },
    {
      name: "Krish Mehta",
      image: "https://cidcuhpuhx.ufs.sh/f/YGMgB3VOGZCWUXWKtVrIdfVg0CpQBN4X2aUt7HhrRnbZA5x3",
      position: "App Lead",
      linkedIn: "https://www.linkedin.com/in/krish-mehta-7a4037252",
      github: "https://github.com/krish-1604",
    },
    {
      name: "Arya Patil",
      image: "https://cidcuhpuhx.ufs.sh/f/YGMgB3VOGZCWnI7DeLJDB7lxSoRwye2TGi3WXK8CUpO6QE1V",
      position: "IOT Lead",
      linkedIn: "https://www.linkedin.com/in/arya-patil-2a8366330/",
      github: "https://github.com/Arya-S-Patil",
    },
  ]
  return (
    <div className={`${classes.container} ${isDark && classes.dark}`}>
      <div className={classes.headerWrapper}>
        {/* Header */}
        <h3 className={`${classes.header} ${isDark && classes.dark}`}>
          And Here We Have
        </h3>
        <h1 className={classes.title}>Our Team</h1>
        <p className={`${classes.subTitle} ${isDark && classes.dark}`}>
          " Teamwork is the ability to work together towards a common vision. It
          is the fuel that allows common people to attain uncommon results. "
        </p>
        <h6 className={`${classes.subTitle} ${isDark && classes.dark}`}>
          -Andrew Carnegie
        </h6>
      </div>

      {/* Cards Body */}
      <div className={classes.cardsWrapper}>
        {cardInfos.map(cardInfo => (
          <TeamCard cardInfo={cardInfo} />
        ))}
      </div>
    </div>
  )
}

export default OurTeamSection
