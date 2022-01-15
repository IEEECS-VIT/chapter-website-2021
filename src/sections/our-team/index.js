import React from "react"
import { useThemeValue } from "../../utils/context"
import TeamCard from "./components/teamCard"

import classes from "./styles.module.css"

const OurTeamSection = () => {
  const { isDark } = useThemeValue()

  const cardInfos = [
    {
      name: "Aashish Sharma",
      image:
        "https://res.cloudinary.com/ieeecs-vit/image/upload/c_scale,q_100,w_300/v1642240709/Chapter%20Website%202022%20assets/Aashish_tl08s2.jpg",
      position: "Chairperson",
      linkedIn: "https://www.linkedin.com/in/aashish-sharma-1621261a3",
      github: "https://github.com/aashish1502",
    },

    {
      name: "Parag Bramh",
      image:
        "https://res.cloudinary.com/ieeecs-vit/image/upload/c_scale,q_100,w_300/v1642242961/Chapter%20Website%202022%20assets/Parag_mhenmt.jpg",
      position: "Vice Chairperson",
      linkedIn: "https://www.linkedin.com/in/parag-bramh15/",
      github: "https://github.com/paragbramh",
      personal: "paragbramh.github.io/AboutParag/ParagBramh",
    },

    {
      name: "Samriddhi Agarwal",
      image:
        "https://res.cloudinary.com/ieeecs-vit/image/upload/c_scale,q_100,w_300/v1642243053/Chapter%20Website%202022%20assets/Samriddhi_uwlopu.jpg",
      position: "Joint Secretary",
      linkedIn: "https://www.linkedin.com/in/samriddhi-agarwal-3520851b8/",
      github: "https://github.com/samriddhiag",
    },

    {
      name: "Yash Ray",
      image:
        "https://res.cloudinary.com/ieeecs-vit/image/upload/c_scale,q_100,w_300/v1642243332/Chapter%20Website%202022%20assets/Yash_e5tn7y.jpg",
      position: "Joint Secretary",
      linkedIn: "https://www.linkedin.com/in/yash-ray-cri80vt/",
      github: "https://github.com/Yash-Ray",
      personal: "https://www.yashray.co/",
    },

    {
      name: "Harsh Kanani",
      image:
        "https://res.cloudinary.com/ieeecs-vit/image/upload/c_scale,q_100,w_300/v1642242867/Chapter%20Website%202022%20assets/Harsh_hpx9dv.jpg",
      position: "Technical Head",
      personal: "https://harshkanani014.github.io/",
      linkedIn: "https://www.linkedin.com/in/harsh-kanani-69a45818b/",
      github: "https://github.com/harshkanani014",
    },

    {
      name: "Dipti Lulla",
      image:
        "https://res.cloudinary.com/ieeecs-vit/image/upload/c_scale,q_100,w_300/v1642243571/Chapter%20Website%202022%20assets/Dipti_ob13wc.jpg",
      position: "Projects Head",
      linkedIn: "https://www.linkedin.com/in/dipti-lulla-499062164",
      github: "https://github.com/diptilulla",
    },

    {
      name: "Mohammad Ayaazuddina",
      image:
        "https://res.cloudinary.com/ieeecs-vit/image/upload/c_scale,q_100,w_300/v1642242440/Chapter%20Website%202022%20assets/Ayaaz_lnyskg.jpg",
      position: "Events Head",
      personal:
        "https://drive.google.com/file/d/15KiOALup02E8-F5cy8eNo_8W4JTw3eUi/view",
      linkedIn: "https://in.linkedin.com/in/ayaazuddin-mohammad-2750311b3",
      github: "https://github.com/ayaazuddin",
    },

    {
      name: "Akshita Verma",
      image:
        "https://res.cloudinary.com/ieeecs-vit/image/upload/c_scale,q_100,w_300/v1642242112/Chapter%20Website%202022%20assets/Akshita_lxgahd.jpg",
      position: "Outreach Head",
      linkedIn: "https://www.linkedin.com/in/akshita-verma-5a491818b",
      github: "https://github.com/aku134",
    },

    {
      name: "Aditya Anavekar",
      image:
        "https://res.cloudinary.com/ieeecs-vit/image/upload/c_scale,q_100,w_300/v1642242000/Chapter%20Website%202022%20assets/Aditya_kvwsor.jpg",
      position: "Design Head",
      linkedIn: "https://www.linkedin.com/in/aditya-anavekar-7549831bb/",
      github: "https://github.com/anavekaraditya",
    },

    {
      name: "Arkajit Datta",
      image:
        "https://res.cloudinary.com/ieeecs-vit/image/upload/c_scale,q_100,w_300/v1642242315/Chapter%20Website%202022%20assets/Arkajit_whajpn.jpg",
      position: "Research and Development Head",
      linkedIn: "www.linkedin.com/in/arkajitdatta/",
      github: "https://github.com/Arkajit-techie",
    },

    {
      name: "Vijeta Priya",
      image:
        "https://res.cloudinary.com/ieeecs-vit/image/upload/c_scale,q_100,w_300/v1642243332/Chapter%20Website%202022%20assets/Vijeta_hszpfc.jpg",
      position: "Strategic Head",
      linkedIn: "https://www.linkedin.com/in/vijeta-priya-731ab01aa",
      github: "https://github.com/vijeta04",
    },

    {
      name: "Shivang Kohli",
      image:
        "https://res.cloudinary.com/ieeecs-vit/image/upload/c_scale,q_100,w_300/v1642243084/Chapter%20Website%202022%20assets/Shivang_v2jdzg.jpg",
      position: "Web Lead",
      linkedIn: "https://www.linkedin.com/in/shivang-kohli-6a4226192",
      github: "https://github.com/Shivang244",
    },

    {
      name: "Amit Agarwal",
      image:
        "https://res.cloudinary.com/ieeecs-vit/image/upload/c_scale,q_100,w_300/v1642242180/Chapter%20Website%202022%20assets/Amit_jqwsmo.jpg",
      position: "App Lead",
      linkedIn: "https://www.linkedin.com/in/amitchas/",
      github: "https://github.com/AmitAgarwalChas",
    },

    {
      name: "Shruti Shreya",
      image:
        "https://res.cloudinary.com/ieeecs-vit/image/upload/c_scale,q_100,w_300/v1642243188/Chapter%20Website%202022%20assets/Shruti_bfxdmf.jpg",
      position: "UI/UX Lead",
      linkedIn: "https://www.linkedin.com/in/shruti-shreya-9b898718b",
      github: "https://github.com/sSh0111",
      personal: "https://www.behance.net/shruti_shreya",
    },

    {
      name: "Chirayu Rathi",
      image:
        "https://res.cloudinary.com/ieeecs-vit/image/upload/c_scale,q_100,w_300/v1642242520/Chapter%20Website%202022%20assets/Chirayu_kl1ttv.jpg",
      position: "Projects mentor",
      linkedIn: "https://www.linkedin.com/in/chirayu-rathi-038461189",
      github: "https://github.com/chirayurathi",
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
          "Teamwork is the ability to work together towards a common vision. It
          is the fuel that allows common people to attain uncommon results."
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
