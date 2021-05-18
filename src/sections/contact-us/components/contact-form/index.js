import React, { useState } from "react"
import classes from "./styles.module.css"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const ContactForm = () => {
  const [isSubmitting, setSubmitting] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const notify = status => {
    if (status === "success") {
      // Success toast
      toast.success("Form Submitted!", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      })
    } else if (status === "validation") {
      // Validation error toast
      toast.warning("Some Form Fields are Incorrectly Filled ", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      })
    } else if (status === "error") {
      // Other Error toast
      toast.error(
        "An Error Occurred During Submission. Please Try Again Later",
        {
          position: "bottom-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        }
      )
    } else if (status === "network-error") {
      // network error toast
      toast.error("Unable to Send Request", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      })
    }
  }
  const handleSubmit = event => {
    event.preventDefault()
    setSubmitting(true)
    fetch("/.netlify/functions/send-mail", {
      body: JSON.stringify({
        name,
        email,
        message,
      }),
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      method: "POST",
      referrerPolicy: "no-referrer",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(res => {
        if (res.status === 200) {
          // success
          setEmail("")
          setName("")
          setMessage("")
          notify("success")
        } else if (res.status === 403) {
          notify("validation")
        } else {
          notify("error")
        }
        setSubmitting(false)
      })
      .catch(err => {
        notify("network-error")
        setSubmitting(false)
      })
  }
  return (
    <form
      className={classes.formContainer}
      onSubmit={handleSubmit}
      noValidate={false}
    >
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
          minLength={5}
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
        <button
          className={classes.submitButton}
          type="submit"
          disabled={isSubmitting}
        >
          Submit
        </button>
        <ToastContainer />
      </div>
    </form>
  )
}

export default ContactForm
