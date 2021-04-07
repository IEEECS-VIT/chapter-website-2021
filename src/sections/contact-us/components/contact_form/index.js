import React from "react"
import "./styles.css"

const Forms = () => {
  return (
    <form className="form-div">
      <input
        id="contact_name"
        type="text"
        className="form-control"
        required
        placeholder="Your Name"
      ></input>

      <br></br>

      <input
        type="email"
        className="form-control"
        required
        placeholder="Your Email"
      ></input>

      <br></br>

      <textarea
        id="msg"
        cols="30"
        rows="7"
        className="form-control"
        required
        placeholder="Your Message"
      ></textarea>

      <br></br>
      <button className="btn">Submit</button>
    </form>
  )
}
export default Forms
