import React from "react"
import styles from "./styles.module.css"
import { useThemeValue } from "../../utils/context"
import LightArrow from "../../images/Down_light.png"
import DarkArrow from "../../images/Down_dark.png"
import scrollTo from "gatsby-plugin-smoothscroll"
// import Achievements from "../achievement"
import Announcement from "../announcement"

const Landing = () => {
  const { isDark } = useThemeValue()

  return (
    <>
      <div
        id="Home"
        className={`${styles.home} ${styles.backg} ${isDark && styles.dark}`}
      >
        <div className={styles.heading}>
          <p>&nbsp;</p>
          <h1>We Live in a</h1>
          <h1><span className={`${styles.caption}`}>Computer</span> Society.</h1>
        </div>
        <div className={styles.announcementOuter}>
        {/* <Announcement /> */}
        </div>
        <p className={styles.text}>
          We strive to be the leading provider of technical information,
          community services, and personalized support to the world’s computer
          science and technology communities. We are IEEE Computer Society.{" "}
        </p>
        
      
        <button onClick={() => scrollTo("#About")} className={styles.btn}>
          <img
            className={styles.arrow}
            src={isDark ? LightArrow : DarkArrow}
            alt="Arrow-btn"
          />
        </button>
      </div>
    </>
  )
}

export default Landing
