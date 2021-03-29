import React, { useState } from "react"
import styles from "./announcementstyle.module.css"
import close from "../../images/close.png"
import closeWhite from "../../images/close_white.png"
import { useThemeValue } from "../../utils/context"

const Announcement = () => {
  const [isClosed, setIsClosed] = useState(false)
 
  const { isDark } = useThemeValue()
  const source=isDark?closeWhite:close

  const handleClick = () => {
    setIsClosed(true)
  }

  return (
    <div
      className={`${isClosed && styles.hideclass} ${
        styles.announcement
      } ${isDark && styles.dark}`}
    >
      <div className={styles.text}>
        Announcement: Lorem ipsum dolor sit amet,
      </div>
      <img
          src={source}
          className={styles.close}
          onClick={handleClick}
          alt="cross"
        ></img>
    </div>
  )
}

export default Announcement
