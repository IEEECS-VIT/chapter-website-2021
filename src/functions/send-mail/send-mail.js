// with thanks to https://github.com/Urigo/graphql-modules/blob/8cb2fd7d9938a856f83e4eee2081384533771904/website/lambda/contact.js
const process = require("process")

const nodemailer = require("nodemailer")

const { validateEmail, validateLength } = require("./validations")

const NAME_MIN_LENGTH = 3
const NAME_MAX_LENGTH = 50
const DETAILS_MIN_LENGTH = 10
const DETAILS_MAX_LENGTH = 1e3

const handler = async event => {
  if (!process.env.CONTACT_EMAIL) {
    process.env.CONTACT_EMAIL = "lakhannad1999@gmail.com"
  }

  const body = JSON.parse(event.body)

  try {
    validateLength("body.name", body.name, NAME_MIN_LENGTH, NAME_MAX_LENGTH)
  } catch (error) {
    return {
      statusCode: 403,
      body: error.message,
    }
  }

  try {
    validateEmail("body.email", body.email)
  } catch (error) {
    return {
      statusCode: 403,
      body: error.message,
    }
  }

  try {
    validateLength(
      "body.message",
      body.message,
      DETAILS_MIN_LENGTH,
      DETAILS_MAX_LENGTH
    )
  } catch (error) {
    return {
      statusCode: 403,
      body: error.message,
    }
  }
  const smtpTransport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_LOGIN,
      pass: process.env.EMAIL_PASS,
    },
  })
  const descriptor = {
    from: `${body.email}`,
    to: process.env.CONTACT_EMAIL,
    subject: `${body.name} sent you a message from IEEE-CS Website`,
    html: `
    <p> Name: ${body.name} </p>
    <p> Email: ${body.email} </p>
    <p>Message: ${body.message}</p>`,
  }

  try {
    await smtpTransport.sendMail(descriptor)
    return { statusCode: 200, body: "" }
  } catch (error) {
    return { statusCode: 500, body: "Unable to send email" }
  }
}

module.exports = { handler }
