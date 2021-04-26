import React from "react"
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa"

import classes from "./styles.module.css"

const Social = () => {
  return (
    <div className={classes.social}>
      <a
        className={classes.link}
        href="https://www.linkedin.com/company/ieee-computer-society-vit-vellore/" target="_blank"
      >
        <span className={classes.icon}>
          <FaLinkedinIn className={classes.iconstyle} />
        </span>
      </a>
      <a className={classes.link} href="https://twitter.com/ieeecsvit?lang=en" target="_blank">
        <span className={classes.icon}>
          <FaTwitter className={classes.iconstyle} />
        </span>
      </a>
      <a className={classes.link} href="https://m.facebook.com/ieeecsvit/" target="_blank">
        <span className={classes.icon}>
          <FaFacebookF className={classes.iconstyle} />
        </span>
      </a>
      <a className={classes.link} href="https://www.instagram.com/ieeecs_vit/" target="_blank">
        <span className={classes.icon}>
          <FaInstagram className={classes.iconstyle} />
        </span>
      </a>
    </div>
  )
}
export default Social
