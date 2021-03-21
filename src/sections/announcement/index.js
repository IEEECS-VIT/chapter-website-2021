import React from "react"
import styles from "./announcementstyle.module.css"
import close from '../../images/close.png'
class Announcement extends React.Component {
  constructor(){
    super();
    this.state={
      isClosed:false
    }
    this.handleClick=this.handleClick.bind(this)
  }
  handleClick(){
    this.setState({isClosed:true})
  }
  render(){
   
  return (
    <div className={this.state.isClosed?styles.hideclass:styles.announcement}>
      <div className={styles.text}>Announcement: Lorem ipsum dolor sit amet,
      <img src={close} className={styles.close} onClick={this.handleClick}></img>
      </div>
    </div>
  )
}
}

export default Announcement
