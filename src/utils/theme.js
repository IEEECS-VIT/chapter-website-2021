import React, { useState } from "react"

import { ThemeContext } from "./context"

const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false)

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
