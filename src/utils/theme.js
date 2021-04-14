import React, { useState } from "react"

import { ThemeContext } from "./context"

const ThemeProvider = ({ children }) => {
  let prefersDark = true
  if (typeof window !== "undefined") {
    prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
  }
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
