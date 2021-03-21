import React from "react"
import styles from "./announcementstyle.module.css"
import close from "../../images/close.png"
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
        <img
          src={close}
          className={styles.close}
          onClick={this.handleClick}
        ></img>
        <div className={styles.text}>
          Announcement: Lorem ipsum dolor sit amet,
        </div>
      </div>
    )
  }
}

export default Announcement
