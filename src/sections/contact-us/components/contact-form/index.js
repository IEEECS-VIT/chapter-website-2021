import React, { useState } from "react"
import classes from "./styles.module.css"
import axios from "axios"

const ContactForm = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const validateContent = () => {
    if (!/^[\w.-]+@[\w.-]+\.\w+$/.test(email)) {
      // invalid email
    }
    if (name.length < 2) {
      // invalid name
    }
    if (message.length < 3) {
      // invalid message
    }
  }
  const handleSubmit = event => {
    event.preventDefault()
    validateContent()
    axios
      .post(
        "/.netlify/functions/send-mail",
        {
          name,
          email,
          message,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(res => {
        if (res.status === 200) {
          // success
          setEmail("")
          setName("")
          setMessage("")
        } else if (res.status === 403) {
          // validation error
        } else {
          // some other error
        }
      })
      .catch(err => {
        // some error
      })
  }
  return (
    <form className={classes.formContainer} onSubmit={handleSubmit}>
      <div className={classes.formgroup}>
        <input
          id="contact_name"
          type="text"
          className={classes.formInput}
          value={name}
          onChange={e => {
            setName(e.target.value)
          }}
          required
          placeholder="Your Name"
        />
      </div>
      <div className={classes.formgroup}>
        <input
          type="email"
          value={email}
          onChange={e => {
            setEmail(e.target.value)
          }}
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
          value={message}
          onChange={e => {
            setMessage(e.target.value)
          }}
          className={classes.formInput}
          required
          placeholder="Your Message"
        />
      </div>
      <div className={classes.formgroup}>
        <button className={classes.submitButton} type="submit">
          Submit
        </button>
      </div>
    </form>
  )
}

export default ContactForm
