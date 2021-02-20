import React from "react"
import { useThemeValue } from "../utils/context"

const Navbar = () => {
  const { toggleTheme, isDark } = useThemeValue()

  return (
    <>
      <h1>Navbar</h1>
      <h2>Dark Mode: {JSON.stringify(isDark)}</h2>
      <button onClick={toggleTheme}>Toggle</button>
    </>
  )
}

export default Navbar
