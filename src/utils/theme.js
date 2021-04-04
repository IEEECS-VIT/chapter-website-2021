import React, { useState } from "react"

import { ThemeContext } from "./context"

const ThemeProvider = ({ children }) => {
  const prefersDark = window.matchMedia("(prefers-color-scheme: light)").matches
  const [isDark, setIsDark] = useState(prefersDark)

  const toggleTheme = () => {
    isDark ? setIsDark(false) : setIsDark(true)
  }

  return (
    <ThemeContext.Provider value={{ toggleTheme, isDark }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
