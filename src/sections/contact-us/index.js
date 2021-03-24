import React from "react"
import "./contact.styles.css"
import Background from "./components/background/bg"
import Social from "./components/socials/social"
import Forms from "./components/contact_form/Forms"

const ContactUs = () => {
  return (
    <div>
      <Background>
        <h1 id="heading">Contact Us</h1>
        <Forms />
        <Social />
      </Background>
    </div>
  )
}

export default ContactUs
