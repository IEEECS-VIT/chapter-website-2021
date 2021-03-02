import React from "react"
import styles from "./styles.module.css"
import { useThemeValue } from "../../utils/context"
import LightArrow from "../../images/Down_light.png"
import DarkArrow from "../../images/Down_dark.png"
import Darkbg from "../../images/darkbg.png"
import Lightbg from "../../images/Lightbg.png"

const Landing = () => {
  const { isDark } = useThemeValue()
  const color = isDark === true ?  "white" :"black";
  const backgroundColor = isDark === true ?  "black":"white";
  console.log(isDark)

  document.body.style.color = color;
  document.body.style.backgroundColor = backgroundColor;

  
  return (
    
    <div id="Home" className={`${styles.home} ${styles.backg}`}
    style={{backgroundImage:isDark? `url(${Lightbg})`:`url(${Darkbg})`}}>
    
  
    <div className={styles.heading}>
     <p > WHAT ARE WE </p>
     <h1>An elite group of</h1>
     <h1>Engineers</h1>
     </div>
     <div className={styles.announcement}  ></div>
     <p className={styles.text} >We strive to be the leading provider of technical information,
     community services, and personalized support to the world’s
    computer science and technology communities </p>
    <a href="#About" className={styles.btn}><img className={styles.arrow} src={isDark? LightArrow:DarkArrow}/></a>
    </div>
    
  )
}

export default Landing
