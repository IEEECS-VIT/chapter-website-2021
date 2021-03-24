import React from "react"
import "./bg.css"

const Background = ({ children }) => {
  return (
    <div className="bgg">
      <img className="cir" src={require("./Circle.png")} alt="circle" />
      <img className="dot" src={require("./Dots.png")} alt="dot" />
      <img
        className="triangle"
        src={require("./Triangle.png")}
        alt="triangle"
      />
      <img className="square" src={require("./Square.png")} alt="square" />
      <img className="square2" src={require("./Square.png")} alt="square" />
      <img
        className="triangle2"
        src={require("./Triangle.png")}
        alt="triangle"
      />
      <img className="dot2" src={require("./Dots.png")} alt="dot" />
      <div className="fill"></div>
      <img className="cir2" src={require("./Circle.png")} alt="circle" />
      <div className="cir3"></div>
      <div className="inner_cir"></div>
      <img
        className="triangle3"
        src={require("./Triangle.png")}
        alt="triangle"
      />

      {children}
    </div>
  )
}
export default Background
