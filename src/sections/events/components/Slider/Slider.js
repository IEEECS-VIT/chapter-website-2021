import React, {useState} from 'react'
import Style from './Slider.module.css'
import Slide from '../Slide/Slide'
const Slider = (props)=>{
    const [slideNumber,setslideNumber] = useState(0)
    let buttons = []
    for(let i=0;i<6;i++){
        buttons.push(<button className={slideNumber===i?Style.ActiveButton:null} onClick={()=>{setslideNumber(i)}}></button>)                    
    }
    return(
        <div className={Style.Slider}>
            <div style={{transform:`translateX(-${100*slideNumber}%)`}} className={Style.SliderFrame}>
                <Slide><h1>slide 1</h1></Slide>
                <Slide><h1>slide 2</h1></Slide>
                <Slide><h1>slide 3</h1></Slide>
                <Slide><h1>slide 4</h1></Slide>
                <Slide><h1>slide 5</h1></Slide>
                <Slide><h1>slide 6</h1></Slide>
            </div>
            <div className={Style.Buttons}>
                {buttons}
            </div>
        </div>
    )
}

export default Slider;