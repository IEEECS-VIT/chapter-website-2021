import React from "react"
import styles from './aboutusstyle.module.css';
import clubimg from '../../images/club.png'
import dot from '../../images/Bg_Lisght.png'
import { useThemeValue } from "../../utils/context"
const AboutUs = () => {
  const { isDark } = useThemeValue()
  return (
    <div className={`${styles.about} ${isDark && styles.dark}`}>
                <div className={styles.hollowcircle}></div>
                <img className={styles.dot} src={dot} alt="dotted"></img>
                <div className={styles.aboutus}>About Us</div>
                <img className={styles.clubimg} src={clubimg} alt="club"></img>
                <div className={styles.text}>We, here at IEEECS, nurture the coders and leaders of tomorrow. We empower and support new ideas giving them a platform to shine. IEEECS has been a home to great ideas capable of bringing a better future for all.<br></br> Its been almost a decade since IEEECS VIT has been operating and it has sent out capable individuals out into the world. One of the best technical chapters in VIT, IEEECS has maintained a sense of curiosity and wonder among the students of this campus in the field of technology by hosting events pertaining to the trending technology.<br></br> But above all, IEEECS has been a home to all those who are technologically inclined and has been responsible for sparking curiosity in the minds of today's techies. </div>
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