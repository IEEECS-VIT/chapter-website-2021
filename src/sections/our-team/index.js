import React from "react"
import { useThemeValue } from "../../utils/context"
import TeamCard from "./components/teamCard"

import classes from "./styles.module.css"

const OurTeamSection = () => {
  const { isDark } = useThemeValue()

  const cardInfos = [
    {
      name: "Siddhant Malpani",
      image:
      "https://i.postimg.cc/WzZvmc4J/image.png",
        // "https://res.cloudinary.com/dk0rcup52/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,b_rgb:262c35/v1681496693/ieee-cs/Vidipt_ollf5m.jpg",
      position: "Chairperson",
      linkedIn: "https://www.linkedin.com/in/siddhant-malpani-247199235/",
      github: "https://github.com/SiddhantMalpani",
    },

    {
      name: "Dharrsan Amarnath",
      image:
         "https://i.postimg.cc/25nSP8pP/image.png",
      position: "Vice Chairperson",
      linkedIn: "https://www.linkedin.com/in/dharrsan-amarnath-75017221a",
      github: "https://github.com/viper-18",
    },

    {
      name: "Theresa Jacob",
      image:
      "https://i.postimg.cc/Kz5BDXPL/image.png",
      position: "Secretary",
      linkedIn: "https://www.linkedin.com/in/theresa-jacob/",
      github: "https://github.com/Theresa-dot",
    },

    {
      name: "Atharva Singh",
      image:
        "https://i.postimg.cc/1tjLvdcC/image.png",
      position: "Co-Secretary",
      linkedIn: "https://www.linkedin.com/in/rohan-gupta-51b16615a",
      github: "https://github.com/Rohan1572",
    },

    {
      name: "Aryan Jain",
      image:
        "https://i.postimg.cc/KcTc3757/image.png",
        position: "Technical Head",
      linkedIn: "https://www.linkedin.com/in/aryan-jain-254185220",
      github: "https://github.com/JainnyAryan",
    },

    {
      name: "Kartik Gupta",
      image:
        "https://i.postimg.cc/G3WqQDsx/image.png",
      position: "Projects Head",
      linkedIn: "https://www.linkedin.com/in/kartik-gupta-96394722b",
      github: "https://github.com/KartikGupta3",
    },

    {
      name: "Akash Kumar",
      image:
        "https://i.postimg.cc/rm6z0f74/image.png",
      position: "Events Head",
      linkedIn: "https://in.linkedin.com/in/akashkumarv",
      github: "https://github.com/IEEECS-VIT",
    },

    {
      name: "Hasmita Patnana",
      image:
        "https://i.postimg.cc/jSYC8gMS/image.png",
      position: "Publicity Head",
      linkedIn: "https://www.linkedin.com/in/hasmita-patnana-392980230",
      github: "https://github.com/hasmita-patnana7",
    },

    {
      name: "Ishi Singh",
      image:
        "https://i.postimg.cc/nh9MT845/image.png",
      position: "Design Head",
      linkedIn: "https://www.linkedin.com/in/ishi-singh-b9584a21b",
      github: "https://github.com/IshiSingh210",
    },

    {
      name: "Prantik Chakraborty",
      image:
      "https://i.postimg.cc/tCcP5Nxr/image.png",
      position: "Research and Development Head",
      linkedIn: "https://www.linkedin.com/in/prantik-chakraborty-a22b8922a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com/IEEECS-VIT",
    },

    {
      name: "Aryan Saxena",
      image:
        "https://i.postimg.cc/L43TM8Cz/image.png",
      position: "Editorial Lead",
      linkedIn: "https://www.linkedin.com/in/aryan-saxena-19544b243/",
      github: "https://github.com/IEEECS-VIT",
    },

    {
      name: "Prathyush Kodhanpur",
      image:
        "https://i.postimg.cc/zvF9SfvN/image.png",
      position: "Web Lead",
      linkedIn: "https://in.linkedin.com/in/prathyush-k-350b8b175",
      github: "https://github.com/Prathyush-KKK",
    },

    {
      name: "Nitish Narayan",
      image:
        "https://i.postimg.cc/GpXs4PdJ/image.png",
      position: "DevOps Lead",
      linkedIn: "https://www.linkedin.com/in/nitish-narayanan-5b8202224",
      github: "https://github.com/Nitish2004/",
    },

    {
      name: "Panchal Nayak",
      image:
        "https://i.postimg.cc/FsZmXhv8/image.png",
      position: "AI/ML Lead",
      linkedIn: "https://www.linkedin.com/in/nitish-narayanan-5b8202224",
      github: "https://github.com/Nitish2004/",
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
