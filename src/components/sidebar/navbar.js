import React,{useState} from "react"
import { useThemeValue } from "../../utils/context"
import useWindowScrollPosition from "@rehooks/window-scroll-position";

import logo from "../../images/logo.png"
import darklogo from "../../images/darklogo.png"

import styles from './sidebar.module.css'


const Menu = ({ open ,setOpen}) => {
  const { toggleTheme, isDark } = useThemeValue()
 return (
 
 
  <div >

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
  const { isDark } = useThemeValue()
  
 
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
   const { isDark } = useThemeValue()
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();

  const [change, setChange] = useState(false);
  const changePosition = 80;

  let position = useWindowScrollPosition();

  if (position.y > changePosition && !change) {
    setChange(true);
  }

  if (position.y <= changePosition && change) {
    setChange(false);
  }
 
  return (
      <>

      
      
      
      <div ref={node} className={`${styles.showNav} ${isDark? styles.dark:null}`}
      style={{backgroundColor: change? "#393e46":"transparent" , transitionTimingFunction: "ease-in"}}>
      <img className={styles.logo}src={isDark? darklogo:logo}  alt="IEEE logo"/>
        <Burger open={open} setOpen={setOpen} />
      
        <Menu open={open} setOpen={setOpen} />
        </div>
      
    
    </>
  )  
}


export default Header;


