import React from "react"
import { useThemeValue } from "../../utils/context"
import TeamCard from "./components/teamCard"

import classes from "./styles.module.css"

const OurTeamSection = () => {
  const { isDark } = useThemeValue()

  const cardInfo1 = {
    name: "Mohit Hotwani",
    image: require("./images/mohit.jpg"),
    position: "Chairperson",
    linkedIn: "https://www.linkedin.com/in/mohit-hotwani-719492167/",
	  github: "https://github.com/mohithotwani01",
  }

  const cardInfo2 = {
    name: "Aayushi Tated",
    image: require("./images/aayushi.jpg"),
    position: "Vice Chairperson",
    linkedIn: "https://www.linkedin.com/in/aayushi-tated-898805193/",
    github: "https://github.com/aayushi2000",
    personal: "https://auth.geeksforgeeks.org/user/aayushitated2000/articles"
  }

  const cardInfo3 = {
    name: "Prerna Sultania",
    image: require("./images/prerna.png"),
    position: "HR & Operations Head",
    linkedIn: "https://www.linkedin.com/in/prerna-sultania-762b79177/",
    github: "https://github.com/PrernaSultania"
  }

  const cardInfo4 = {
    name: "Lakhan Nad",
    image: require("./images/lakhan.png"),
    position: "Technical Head",
    linkedIn: "https://www.linkedin.com/lakhan-nad",
    github:"https://github.com/Lakhan-Nad",
  }

  const cardInfo5 = {
    name: "Aditya Menon",
    image: require("./images/aditya.png"),
    position: "Projects Head",
    personal: "https://www.supraditya.com/",
    linkedIn: "https://www.linkedin.com/in/supraditya/",
    github: "https://github.com/supraditya"
  }

  const cardInfo6 = {
    name: "Nikita Anand",
    image: require("./images/nikita.png"),
    position: "Design Head",
    linkedIn: "https://www.linkedin.com/in/nikita-anand-381608195/",
    github:"https://github.com/nikitaanand16",
  }

  const cardInfo7 = {
    name: "Arpit Bhattar",
    image: require("./images/arpit.png"),
    position: "Finance Head",
    linkedIn: "https://www.linkedin.com/in/arpit-bhattar-6b5a04184",
    github: "https://github.com/apt-bhattar"
  }

  const cardInfo8 = {
    name: "Kaustubh Singh",
    image: require("./images/kaustubh.png"),
    position: "Public Relations Head",
    personal: "http://www.kaustubh.live/",
    linkedIn: "https://www.linkedin.com/in/kaustubh72/",
    github: "https://github.com/Kaustubh72"
  }

  const cardInfo9 = {
    name: "Ayush Roy",
    image: require("./images/ayush.png"),
    position: "Events Head",
    linkedIn: "https://www.linkedin.com/in/ayush-roy-40838b191/",
    github: "https://github.com/ayushroy64"
  }

  const cardInfo10 = {
    name: "Ipsita Goel",
    image: require("./images/ipsita.png"),
    position: "Marketing & Outreach Head",
    linkedIn: "https://www.linkedin.com/in/ipsitagoel/",
    github:"https://github.com/ipsitagoel",
  }

  const cardInfo11 = {
    name: "Shaolin Kataria",
    image: require("./images/shaolin.png"),
    position: "Research Head",
    linkedIn: "https://www.linkedin.com/in/shaolink/",
    github: "https://github.com/shaolink8",
    youtube: "https://www.youtube.com/user/ShaolinKataria",
  }

  const cardInfo12 = {
    name: "Kamlendra Pratap Singh",
    image: require("./images/kamlendra.png"),
    position: "Strategic Head",
    linkedIn: "https://www.linkedin.com/in/kamlendra-pratap-singh-372427192/",
    github: "https://github.com/kps1310"
  }

  const cardInfo13 = {
    name: "Sunjol Singh",
    image: require("./images/sunjol.png"),
    position: "Technical Lead",
    linkedIn: "https://www.linkedin.com/in/sunjol-singh-paul",
    github: "https://github.com/sunjol",
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
          is the fuel that allows common people to attain uncommon results."
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
        <TeamCard cardInfo={cardInfo4} />
        <TeamCard cardInfo={cardInfo5} />
        <TeamCard cardInfo={cardInfo6} />
        <TeamCard cardInfo={cardInfo7} />
        <TeamCard cardInfo={cardInfo8} />
        <TeamCard cardInfo={cardInfo9} />
        <TeamCard cardInfo={cardInfo10} />
        <TeamCard cardInfo={cardInfo11} />
        <TeamCard cardInfo={cardInfo12} />
        <TeamCard cardInfo={cardInfo13} />
      </div>
    </div>
  )
}

export default OurTeamSection
