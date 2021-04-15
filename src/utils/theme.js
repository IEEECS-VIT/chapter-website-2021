import React, { useEffect, useState } from "react"

import { ThemeContext } from "./context"

const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true)
  const toggleTheme = () => {
    if (typeof window !== "undefined") {
      if (isDark) {
        window.localStorage.setItem("theme-data", "lightTheme")
      } else {
        window.localStorage.setItem("theme-data", "darkTheme")
      }
    }
    setIsDark(!isDark)
  }
  useEffect(() => {
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
    if (prefersDark === false) {
      toggleTheme()
    }
  }, [])
  return (
    <ThemeContext.Provider value={{ toggleTheme, isDark }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
