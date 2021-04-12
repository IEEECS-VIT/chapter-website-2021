import React from "react"
import classes from "./styles.module.css"
import Background from "./components/background"
import Social from "./components/socials/social"
import Forms from "./components/contact_form/"
import { useThemeValue } from "../../utils/context"

const ContactUs = () => {
  const { isDark } = useThemeValue()

  return (
    <div className={`${classes.container} ${isDark && classes.dark}`}>
      <Background />
      <div className={classes.headerWrapper}>
        <h1 className={classes.title}>Contact Us</h1>
      </div>
      <Forms />
      <Social />
    </div>
  )
}

export default ContactUs
