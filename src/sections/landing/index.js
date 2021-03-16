import React from "react"
import styles from "./styles.module.css"
import { useThemeValue } from "../../utils/context"
import LightArrow from "../../images/Down_light.png"
import DarkArrow from "../../images/Down_dark.png"
import scrollTo from 'gatsby-plugin-smoothscroll';
import useWindowScrollPosition from "@rehooks/window-scroll-position";
import {useState} from "react"

const Landing = () => {
  const { isDark } = useThemeValue()
  const [change, setChange] = useState(false);
  const changePosition = 150;
  let position = useWindowScrollPosition();

  if (position.y > changePosition && !change) {
    setChange(true);
  }

  if (position.y <= changePosition && change) {
    setChange(false);
  }
  var visible = change? styles.hide:styles.show
  return (
    
    <div id="Home" className={`${styles.home} ${styles.backg} ${isDark && styles.dark}`}>
     
    
  
    <div className={styles.heading}>
     <p > WHAT ARE WE ?</p>
     <h1>An Elite Group of</h1>
     <h1>Engineers</h1>
     </div>
     <div className={styles.announcement}  ></div>
     <p className={styles.text} >We strive to be the leading provider of technical information,
     community services, and personalized support to the world’s
    computer science and technology communities </p>
    <button onClick={()=>scrollTo ("#About")} className={styles.btn}><img className={styles.arrow} src={isDark? LightArrow:DarkArrow} alt="Arrow-btn"/></button>
    <div className={`${styles.circle} ${visible}`}></div>
    <div className={`${styles.smallcircle} ${visible}`}
    style={{backgroundColor:isDark? "white":"black"}}></div>
    </div>
     
  )
}

export default Landing
