import React from "react"
import styles from './aboutusstyle.module.css';
import clubimg from '../../images/club.png'
import dot from '../../images/Bg_Lisght.png'
const AboutUs = () => {
  return (
    <div className={styles.about}>
                <div className={styles.hollowcircle}></div>
                <img className={styles.dot} src={dot} alt="dotted"></img>
                <div className={styles.aboutus}>About Us</div>
                <img className={styles.clubimg} src={clubimg} alt="club"></img>
                <div className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec lacinia velit. Phasellus tempor in est sed fringilla. Etiam nec sem elit. Nunc rhoncus hendrerit arcu at mattis. Cras a erat at lacus aliquam sodales. Etiam id metus arcu. Fusce porttitor pharetra turpis sit amet lobortis. Quisque aliquet purus nec purus dignissim sodales. Phasellus ac auctor magna, eget feugiat ipsum..</div>
                <div className={styles.circle1}></div>
                <div className={styles.circle2}></div>
                <div className={styles.circle3}></div>
                <div className={styles.circle4}></div>
                <div className={styles.circle5}></div>
                <div className={styles.circle6}></div>
                <div className={styles.mcircle1}></div>
                <div className={styles.mcircle2}></div>
                <div className={styles.mcircle3}></div>
                <div className={styles.mcircle4}></div>
                <div className={styles.mcircle5}></div>
                <div className={styles.mcircle6}></div>
    </div>
  )
}

export default AboutUs
