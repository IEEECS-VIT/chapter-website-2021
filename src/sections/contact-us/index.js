import React from "react"
import classes from "./contact.module.css"
import Background from "./components/background/bg"
import Social from "./components/socials/social"
import Forms from "./components/contact_form/Forms"
import { useThemeValue } from "../../utils/context"

const ContactUs = () => {
  const { isDark } = useThemeValue()

  return (
    <div className={isDark && classes.dark}>
      <Background>
        <h1 className={classes.heading}>Contact Us</h1>
        <Forms />
        <Social />
      </Background>
    </div>
  )
}

export default ContactUs
