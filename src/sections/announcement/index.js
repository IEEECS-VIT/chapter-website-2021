import React, { useState } from "react"
import styles from "./announcementstyle.module.css"
import close from "../../images/close.png"
import closeWhite from "../../images/close_white.png"
import { useThemeValue } from "../../utils/context"
import { AiOutlineInfoCircle } from "react-icons/ai"
import scrollTo from "gatsby-plugin-smoothscroll"

const Announcement = () => {
  const [isClosed, setIsClosed] = useState(false)

  const { isDark } = useThemeValue()
  const source = isDark ? closeWhite : close

  const handleClick = () => {
    setIsClosed(true)
  }

  return (
    <div
      className={`${isClosed && styles.hideclass} ${styles.announcement} ${
        isDark && styles.dark
      }`}
    >
      <div className={styles.text}>
        <AiOutlineInfoCircle size="1.5rem" />
        &ensp; Want to get in touch?&nbsp;
        <button
          onClick={() => {
            scrollTo("#Contact")
          }}
        >
          Message Us!
        </button>
      </div>
      <button
        onKeyPress={handleClick}
        onClick={handleClick}
        style={{ display: "contents" }}
      >
        <img src={source} className={styles.close} alt="cross" />
      </button>
    </div>
  )
}

export default Announcement
