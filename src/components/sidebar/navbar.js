import React,{useState} from "react"
import { useThemeValue } from "../../utils/context"
import useWindowScrollPosition from "@rehooks/window-scroll-position";
import scrollTo from 'gatsby-plugin-smoothscroll';
import logo from "../../images/logo.png"
import darklogo from "../../images/darklogo.png"
import styles from './sidebar.module.css'


const Menu = ({ open ,setOpen}) => {
  const { toggleTheme, isDark } = useThemeValue()
 return (
 
  <div>

  <nav className={`${styles.StyledMenu} ${isDark? styles.darkmode:styles.lightmode}`} 
  style={{transform: !(open) ? "translateX(100%)": "translateX(0)"}}>
      
      <button  onClick={() => {setOpen(!open) ;scrollTo("#Home")}}>Home</button>
      <button onClick={() => {setOpen(!open);scrollTo("#About")}}>About</button>
      <button onClick={() => {setOpen(!open);scrollTo("#Events")}} >Events</button>
      <button onClick={() => {setOpen(!open);scrollTo("#Team")}} >Team</button>
      <button  onClick={() => {setOpen(!open);scrollTo("#Gallery")}}>Gallery</button>
      <button onClick={() => {setOpen(!open);scrollTo("#Contact")}} >Contact</button>
     
      <br/><br/><br/>
    

      <span>Toggle Theme</span>
      <input type="checkbox" id="switch" onClick={toggleTheme} /><label for="switch"></label>

    </nav>
    
    </div>
    
  )
}




const Burger = ({ open, setOpen ,change}) => {
  const { isDark } = useThemeValue()
  var openClose=  (open)? styles.open:styles.close
  var mode=(isDark||(change &&(!open))) ? styles.darkmode:styles.lightmode
 
  return (
 
  
    <button 
    onClick={() => setOpen(!open)} 
    className={styles.styledBurger} > 
  
      <div className={`${openClose} ${mode}`} />
      <div className={`${openClose} ${mode}`}/>
      <div className={`${openClose} ${mode}`}/>
      
    </button>
  
  )
}


const Header = () => {
   const { isDark } = useThemeValue()
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();

  const [change, setChange] = useState(false);
  const changePosition = 100;

  let position = useWindowScrollPosition();

  if (position.y > changePosition && !change) {
    setChange(true);
  }

  if (position.y <= changePosition && change) {
    setChange(false);
  }
 
  return (
      <> 
      <div ref={node} className={`${styles.showNav} ${isDark? styles.dark:null} `}
      style={{backgroundColor: change? "#393e46":"transparent"}}>
      <img className={styles.logo} src={isDark||change? darklogo:logo}  alt="IEEE logo"/>
        <Burger open={open} setOpen={setOpen} change={change}/>
        <Menu open={open} setOpen={setOpen} />
        </div>
      
    
    </>
  )  
}


export default Header;


