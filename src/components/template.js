<<<<<<< HEAD
<<<<<<< HEAD
import React from "react"
import ThemeProvider from "../utils/theme"
import Navbar from "./sidebar/navbar"
=======
import React, { useContext } from "react"
=======
import React from "react"
>>>>>>> 🔧 fixed some errors

import ThemeProvider from "../utils/theme"
import Navbar from "./navbar"

import Footer from "./Footer"
>>>>>>> closes #3

const Template = ({ children }) => {
  return (
    <ThemeProvider>
      <div>
        <Navbar />
        {children}
<<<<<<< HEAD
<<<<<<< HEAD
        <h1>Footer</h1>
      </div>
=======
        <Footer/>
        </div>
>>>>>>> closes #3
=======
        <Footer />
      </div>
>>>>>>> 🔧 fixed some errors
    </ThemeProvider>
  )
}

export default Template
