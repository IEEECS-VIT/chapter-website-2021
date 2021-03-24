import React, { useState } from "react"
import styles from "./announcementstyle.module.css"
import close from "../../images/close.png"
<<<<<<< HEAD
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
=======
class Announcement extends React.Component {
  constructor() {
    super()
    this.state = {
      isClosed: false,
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState({ isClosed: true })
  }
  render() {
    return (
      <div
        className={this.state.isClosed ? styles.hideclass : styles.announcement}
      >
        <div className={styles.text}>
          Announcement: Lorem ipsum dolor sit amet,
          <img
            src={close}
            className={styles.close}
            onClick={this.handleClick}
          ></img>
        </div>
      </div>
    )
  }
>>>>>>> 🎨 format with prettier
}

export default Announcement
