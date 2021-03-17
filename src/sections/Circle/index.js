import useWindowScrollPosition from "@rehooks/window-scroll-position";
import React,{useState} from "react"
import { useThemeValue } from "../../utils/context"
import styles from "./styles.module.css"

const Circle=()=>{
const { isDark } = useThemeValue()
const [change, setChange] = useState(false);
  const changePosition = 100;
  let position = useWindowScrollPosition();

  if (position.y > changePosition && !change) {
    setChange(true);
  }

  if (position.y <= changePosition && change) {
    setChange(false);
  }
  var visible = change? styles.hide:styles.show

  return (
  <>
  <div className={`${styles.circle} ${visible}`}></div>
  <div className={`${styles.smallcircle} ${visible}`}
 style={{backgroundColor:isDark? "white":"black"}}></div>
 </>
  )
}

  export default Circle