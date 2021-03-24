import React from "react"
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa"

import classes from "./socialstyles.module.css"

const Social = () => {
  return (
    <div className={classes.social}>
      <a
        className={classes.s1}
        href="https://www.linkedin.com/company/ieee-computer-society-vit-vellore/"
      >
        <span className={classes.boxx}>
          <FaLinkedinIn className={classes.iconstyle} />
        </span>
      </a>
      <a className={classes.s1} href="https://twitter.com/ieeecsvit?lang=en">
        <span className={classes.boxx}>
          <FaTwitter className={classes.iconstyle} />
        </span>
      </a>
      <a className={classes.s1} href="https://www.facebook.com">
        <span className={classes.boxx}>
          <FaFacebookF className={classes.iconstyle} />
        </span>
      </a>
      <a className={classes.s1} href="https://www.instagram.com/ieeecs_vit/">
        <span className={classes.boxx}>
          <FaInstagram className={classes.iconstyle} />
        </span>
      </a>
    </div>
  )
}
export default Social
