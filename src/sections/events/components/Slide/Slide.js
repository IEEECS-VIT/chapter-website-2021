import React from 'react'
import Style from './Slide.module.css'

const Slide = (props)=>{
    return(
        <div onTouchStart={props.touchStart} onTouchMove={props.touchMove} onTouchEnd={props.touchEnd} onMouseDown={props.touchStart} onMouseMove={props.onTouchMove} onMouseLeave={props.touchEnd} onMouseUp={props.touchEnd} className={Style.Slide}>
            {props.children}
        </div>
    )
}

export default Slide;