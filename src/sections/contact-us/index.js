import React from "react"
import classes from "./contact.module.css"
import Background from "./components/background"
import Social from "./components/socials/social"
import Forms from "./components/contact_form/"
import { useThemeValue } from "../../utils/context"

const ContactUs = () => {
  const { isDark } = useThemeValue()

  return (
    <div className={`${classes.container} ${isDark && classes.dark}`}>
      <Background />
      <h1 className={classes.title}>Contact Us</h1>
      <Forms />
      <Social />
    </div>
  )
}

export default ContactUs
