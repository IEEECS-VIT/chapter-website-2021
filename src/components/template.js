import React from "react"
import ThemeProvider from "../utils/theme"
import Navbar from "./sidebar/navbar"

const Template = ({ children }) => {
  return (
    <ThemeProvider>
      <div>
        <Navbar />
        {children}
        <h1>Footer</h1>
      </div>
    </ThemeProvider>
  )
}

export default Template
