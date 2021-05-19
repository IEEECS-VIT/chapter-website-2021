import React, { useEffect, useState } from "react"
import { useThemeValue } from "../../utils/context"
import useWindowScrollPosition from "@rehooks/window-scroll-position"
import scrollTo from "gatsby-plugin-smoothscroll"
import logo from "../../images/logo.png"
import darklogo from "../../images/darklogo.png"
import styles from "./sidebar.module.css"

const Menu = ({ open, setOpen }) => {
  const { toggleTheme, isDark } = useThemeValue()
  const [checked, setChecked] = useState(isDark)
  useEffect(() => {
    if (isDark !== checked) {
      setChecked(isDark)
    }
  }, [isDark, checked])
  const handleChange = () => {
    toggleTheme()
    setChecked(!checked)
  }
  return (
    <div>
      <nav
        className={`${styles.StyledMenu} ${
          isDark ? styles.darkmode : styles.lightmode
        }`}
        style={{ transform: !open ? "translateX(100%)" : "translateX(0)" }}
      >
        <button
          onClick={() => {
            setOpen(!open)
            scrollTo("#Home")
          }}
        >
          Home
        </button>
        <button
          onClick={() => {
            setOpen(!open)
            scrollTo("#About")
          }}
        >
          About
        </button>
        <button
          onClick={() => {
            setOpen(!open)
            scrollTo("#Events")
          }}
        >
          Events
        </button>
        <button
          onClick={() => {
            setOpen(!open)
            scrollTo("#Achievements")
          }}
        >
          Accolades
        </button>
        <button
          onClick={() => {
            setOpen(!open)
            scrollTo("#Team")
          }}
        >
          Team
        </button>
        <button
          onClick={() => {
            setOpen(!open)
            scrollTo("#Contact")
          }}
        >
          Contact
        </button>
        <br />
        <br />
        <br />
        <span className={styles.toggleSpan}>Toggle Theme</span>
        <input
          type="checkbox"
          id="toggle-dark-switch"
          onChange={handleChange}
          checked={checked}
        />
        <label htmlFor="toggle-dark-switch" aria-label="toggle"></label>
      </nav>
    </div>
  )
}

const Burger = ({ open, setOpen, change }) => {
  const { isDark } = useThemeValue()
  var openClose = open ? styles.open : styles.closed
  var lightStyle = isDark ? styles.lightmode : styles.darkmode
  var mode = !open
    ? change || isDark
      ? styles.darkmode
      : styles.lightmode
    : lightStyle
  return (
    <button
      onClick={() => setOpen(!open)}
      className={styles.styledBurger}
      aria-label="sidebar-toggle"
    >
      <div className={`${openClose} ${mode}`} />
      <div className={`${openClose} ${mode}`} />
      <div className={`${openClose} ${mode}`} />
    </button>
  )
}

const Header = () => {
  const { isDark } = useThemeValue()
  const [open, setOpen] = React.useState(false)
  var openClose = open ? styles.Open : styles.Close
  const [change, setChange] = useState(false)
  const changePosition = 100
  let position = useWindowScrollPosition()

  if (position.y > changePosition && !change) {
    setChange(true)
  } else if (position.y <= changePosition && change) {
    setChange(false)
  }
  return (
    <>
      <div className={`${styles.Blur} ${openClose}`} />
      <div
        className={`${styles.showNav} ${
          isDark ? styles.dark : null
        } ${openClose}`}
        style={{
          backgroundColor: change ? "rgb(59,59,59,0.9)" : "transparent",
        }}
      >
        <img
          className={`${styles.logo} ${openClose}`}
          src={change || isDark ? darklogo : logo}
          alt="IEEE logo"
        />
        <Burger open={open} setOpen={setOpen} change={change} />
        <Menu open={open} setOpen={setOpen} />
      </div>
    </>
  )
}

export default Header
