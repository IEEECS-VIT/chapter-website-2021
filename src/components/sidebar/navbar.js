import React from "react"
import { useThemeValue } from "../../utils/context"

import logo from "../../images/logo.png"
import darklogo from "../../images/darklogo.png"

import styles from './sidebar.module.css'


const Menu = ({ open ,setOpen}) => {
  const { toggleTheme, isDark } = useThemeValue()
 
  
  return (
  <div className={styles.navbar}>
  <img src={isDark? darklogo:logo} />
  <nav className={`${styles.StyledMenu} ${isDark? styles.darkmode:styles.lightmode}`} 
  style={{transform: !(open) ? "translateX(100%)": "translateX(0)"}}>
      <a href="#Home" onClick={() => setOpen(!open)}>Home</a>
      <a href="#About" onClick={() => setOpen(!open)}>About</a>
      <a href="#Events" onClick={() => setOpen(!open)} >Events</a>
      <a href="#Team" onClick={() => setOpen(!open)} >Team</a>
      <a href="#Gallery"  onClick={() => setOpen(!open)}>Gallery</a>
      <a href="#Contact" onClick={() => setOpen(!open)} >Contact</a>
      <br/><br/><br/>
      <span>Toggle Theme</span>
      <input type="checkbox" id="switch" onClick={toggleTheme} /><label for="switch"></label>

    </nav>
    </div>
  )
}




const Burger = ({ open, setOpen }) => {
  const { toggleTheme, isDark } = useThemeValue()
  return (
    <button 
    onClick={() => setOpen(!open)} 
    className={styles.styledBurger} > 
  
      <div className={`${(open) ? styles.open: styles.closed} ${isDark? styles.darkmode:styles.lightmode}`} />
      <div className={`${(open) ? styles.open: styles.closed} ${isDark? styles.darkmode:styles.lightmode}`}/>
      <div className={`${(open) ? styles.open: styles.closed} ${isDark? styles.darkmode:styles.lightmode}`}/>
      
    </button>
  )
}


const Header = () => {
   const { toggleTheme, isDark } = useThemeValue()
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();
  return (
  
      <div className={isDark? styles.dark:null}>
      <div ref={node}>
      
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
    </div>
  )  
}


export default Header;


