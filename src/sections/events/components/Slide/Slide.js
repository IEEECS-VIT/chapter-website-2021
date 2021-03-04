import React from 'react'
import Style from './Slide.module.css'

const Slide = (props)=>{
    return(
        <div className={Style.Slide}>
            {props.children}
        </div>
    )
}

export default Slide;