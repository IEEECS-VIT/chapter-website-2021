import React from "react"
import styles from "./aboutusstyle.module.css"
import clubimg from "../../images/club.png"
import dot from "../../images/Bg_Lisght.png"
import { useThemeValue } from "../../utils/context"
const AboutUs = () => {
  const { isDark } = useThemeValue()
  return (
    <div className={`${styles.about} ${isDark && styles.dark}`}>
      <div className={styles.hollowcircle}></div>
      <img className={styles.dot} src={dot} alt="dotted"></img>
      <div className={styles.aboutus}>About Us</div>
      <img
        className={styles.clubimg}
        src="https://res.cloudinary.com/dk0rcup52/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1684223624/ieee-cs/IEEE-CS_vpg3yh.jpg"
        alt="club"
      ></img>
      <div className={styles.text}>
        IEEE Computer Society, VIT, is an eminent Student Branch belonging to
        the Madras Section of IEEE Region 10. Formed in the February of 2012, we
        aim to solve the modern-day problems by understanding and harnessing
        cutting-edge technologies. We empower and support new ideas and
        innovations, as well as strive to provide them a platform to rise and
        shine. We are at the forefront for conducting and participating in elite
        technical events, workshops, sessions and delivering high quality
        projects to our partners and collaborators.<br></br> Internationally
        recognized as the symbol of technical expertise and professionalism,
        IEEE Computer Society has been a home to all inquisitive minds out
        there, encouraging, motivating, and shaping them to face present-day
        challenges, and conquer the same.{" "}
      </div>
      <div className={styles.circle1}></div>
      <div className={styles.circle2}></div>
      <div className={styles.circle3}></div>
      <div className={styles.circle4}></div>
      <div className={styles.circle5}></div>
      <div className={styles.circle6}></div>
    </div>
  )
}

export default AboutUs
