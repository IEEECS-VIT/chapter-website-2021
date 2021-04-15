import React, { useState } from "react"

import { ThemeContext } from "./context"

const ThemeProvider = ({ children }) => {
  let prefersDark = true
  if (typeof window !== "undefined") {
    let savedState = window.localStorage.getItem("theme-data")
    if (savedState === "lightTheme") {
      prefersDark = false
    } else {
      savedState = "darkTheme"
    }
    window.localStorage.setItem("theme-data", savedState)
  }
  const [isDark, setIsDark] = useState(prefersDark)
  const toggleTheme = () => {
    if (typeof window !== "undefined") {
      if (isDark) {
        window.localStorage.setItem("theme-data", "lightTheme")
      } else {
        window.localStorage.setItem("theme-data", "darkTheme")
      }
    }
    isDark ? setIsDark(false) : setIsDark(true)
  }
  return (
    <ThemeContext.Provider value={{ toggleTheme, isDark }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
