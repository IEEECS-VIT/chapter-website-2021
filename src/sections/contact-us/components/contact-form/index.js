import React from "react"
import classes from "./styles.module.css"

const ContactForm = () => (
  <form className={classes.formContainer}>
    <div className={classes.formgroup}>
      <input
        id="contact_name"
        type="text"
        className={classes.formInput}
        required
        placeholder="Your Name"
      />
    </div>
    <div className={classes.formgroup}>
      <input
        type="email"
        className={classes.formInput}
        required
        placeholder="Your Email"
      />
    </div>
    <div className={classes.formgroup}>
      <textarea
        id="msg"
        cols="30"
        rows="7"
        className={classes.formInput}
        required
        placeholder="Your Message"
      />
    </div>
    <div className={classes.formgroup}>
      <button className={classes.submitButton}>Submit</button>
    </div>
  </form>
)

export default ContactForm
