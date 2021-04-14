
import React from "react"
import ThemeProvider from "../utils/theme"
import Navbar from "./sidebar/navbar"

import Footer from "./Footer"

const Template = ({ children }) => {
  return (
    <ThemeProvider>
      <div>
        <Navbar />
        {children}
        <Footer/>
        </div>
    </ThemeProvider>
  )
}

export default Template
