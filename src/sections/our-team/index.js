import React from "react"
import { useThemeValue } from "../../utils/context"
import TeamCard from "./components/teamCard"

import classes from "./styles.module.css"

const OurTeamSection = () => {
  const { isDark } = useThemeValue()

  const cardInfos = [
    {
      name: "Vidipt Khetriwal",
      image:
        "https://res.cloudinary.com/dk0rcup52/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,b_rgb:262c35/v1681496693/ieee-cs/Vidipt_ollf5m.jpg",
      position: "Chairperson",
      linkedIn: "https://www.linkedin.com/in/vidiptkhetriwal/",
      github: "https://github.com/vidipt-khetriwal",
    },

    {
      name: "Shreyas Bhardwaj",
      image:
        "https://res.cloudinary.com/dk0rcup52/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,b_rgb:262c35/v1681484860/ieee-cs/Shreyas_kjhjja.jpg",
      position: "Vice Chairperson",
      linkedIn: "https://www.linkedin.com/in/shreyas-bhardwaj01/",
      github: "https://github.com/shreyas-bhardwaj",
    },

    {
      name: "Swayam Mehta",
      image:
        "https://res.cloudinary.com/dk0rcup52/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,b_rgb:262c35/v1681486752/ieee-cs/Swayam_nrhccu.jpg",
      position: "Joint Secretary",
      linkedIn: "https://www.linkedin.com/in/swayam-mehta-80b287221",
      github: "https://github.com/SwayamMehta10",
    },

    {
      name: "Rohan Gupta",
      image:
        "https://res.cloudinary.com/dk0rcup52/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,b_rgb:262c35/v1681484867/ieee-cs/Rohan_nfcadn.jpg",
      position: "Joint Secretary",
      linkedIn: "https://www.linkedin.com/in/rohan-gupta-51b16615a",
      github: "https://github.com/Rohan1572",
    },

    {
      name: "Anusha Garg",
      image:
        "https://res.cloudinary.com/dk0rcup52/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,b_rgb:262c35/v1681487207/ieee-cs/Anusha_ugmbzt.png",
      position: "Marketing and HR",
      linkedIn: "https://www.linkedin.com/in/anusha-garg-67a214205",
      github: "https://github.com/anushagarg-10",
    },

    {
      name: "Krushn Pathak",
      image:
        "https://res.cloudinary.com/dk0rcup52/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,b_rgb:262c35/v1681485410/ieee-cs/Krushn_i2gyct.jpg",
      position: "Technical Head",
      linkedIn: "https://www.linkedin.com/in/krushn-pathak-646974204/",
      github: "https://github.com/Krushnpathak",
    },

    {
      name: "Amirth Raj Puramcheriyil",
      image:
        "https://res.cloudinary.com/dk0rcup52/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,b_rgb:262c35/v1681484860/ieee-cs/Amirth_mlumi0.jpg",
      position: "Projects Head",
      linkedIn: "https://www.linkedin.com/in/amirth-raj-puramcheriyil/",
      github: "https://github.com/AmirthRaj2002",
    },

    {
      name: "Anubhav Agarwal",
      image:
        "https://res.cloudinary.com/dk0rcup52/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,b_rgb:262c35/v1681484853/ieee-cs/Anubhav_kwlzty.jpg",
      position: "Events Head",
      linkedIn: "https://www.linkedin.com/in/anubhav-agarwal-6ab029252",
      github: "https://github.com/Zeus0305",
    },

    {
      name: "Akanksha Dhar",
      image:
        "https://res.cloudinary.com/dk0rcup52/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,b_rgb:262c35/v1681484938/ieee-cs/Akanksha_j0f05v.png",
      position: "Outreach Head",
      linkedIn: "https://www.linkedin.com/in/akanksha-dhar-1b8303205",
      github: "https://github.com/akankshadhar2",
    },

    {
      name: "Adith Narein T",
      image:
        "https://res.cloudinary.com/dk0rcup52/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,b_rgb:262c35/v1681484941/ieee-cs/Adith_e7qev6.jpg",
      position: "Deisgn Head",
      linkedIn: "https://www.linkedin.com/in/adith-narein-t-005603207/",
      github: "https://github.com/adith13",
    },

    {
      name: "Harsh Rajpal",
      image:
        "https://res.cloudinary.com/dk0rcup52/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,b_rgb:262c35/v1681484871/ieee-cs/Harsh_nsn7ji.jpg",
      position: "Research and Development Head",
      linkedIn: "https://www.linkedin.com/in/harsh-rajpal/",
      github: "https://github.com/harsh-rajpal",
    },

    {
      name: "Jahnavi Gundakaram",
      image:
        "https://res.cloudinary.com/dk0rcup52/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,b_rgb:262c35/v1681485859/ieee-cs/Jahnavi_xxasbh.jpg",
      position: "Strategic Head",
      linkedIn: "https://www.linkedin.com/in/jahnavi-gundakaram-43074a1b5/",
      github: "https://github.com/jahnavigundakaram",
    },

    {
      name: "Likhit Ajeesh",
      image:
        "https://res.cloudinary.com/dk0rcup52/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,b_rgb:262c35/v1681484853/ieee-cs/Likhit_po7xuf.jpg",
      position: "Web Lead",
      linkedIn: "https://www.linkedin.com/in/likhit-ajeesh",
      github: "https://github.com/Likkiii",
    },

    {
      name: "Garv Tandon",
      image:
        "https://res.cloudinary.com/dk0rcup52/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,b_rgb:262c35/v1681496472/ieee-cs/Garv_hgnrrf.jpg",
      position: "App Lead",
      linkedIn: "linkedin.com/in/garv-tandon-5b79921a3",
      github: "github.com/garvsgit",
    },

    {
      name: "Karthik Remesh",
      image:
        "https://res.cloudinary.com/dk0rcup52/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,b_rgb:262c35/v1681484858/ieee-cs/Karthik_scfiy5.jpg",
      position: "UI/UX Lead",
      linkedIn: "https://www.linkedin.com/in/karthik-remesh-03066a24a",
      github: "https://github.com/karthik-remesh",
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
