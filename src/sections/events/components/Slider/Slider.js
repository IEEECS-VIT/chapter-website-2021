import React, {useState} from 'react'
import Style from './Slider.module.css'
import Slide from '../Slide/Slide'
const Slider = (props)=>{
    const [isDragging,setisDragging] = useState(false);
    const [currentTranslate,setcurrentTranslate] = useState(0)
    const [prevTranslate,setprevTranslate] = useState(0)
    const [startPos,setstartPos] = useState(0)
    const [animationID,setanimationID] = useState(null)
    const [currentIndex,setcurrentIndex] = useState(0)
    const [transform,setTransform] = useState('translateX(0px)')
    const getPositionX = (event)=>{
    return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
    }
    const touchStart = (event,index)=>{
        setcurrentIndex(index)
        setstartPos(getPositionX(event))
        setisDragging(true)
        setanimationID(requestAnimationFrame(animation))
    }

    function touchMove(event) {
    if (isDragging) {
        const currentPosition = getPositionX(event)
        setcurrentTranslate(prevTranslate + currentPosition - startPos)
    }
    }
    const setPositionByIndex = (state=currentIndex)=>{
        setcurrentTranslate(state * -window.innerWidth);
        setcurrentTranslate((state)=>{
            setprevTranslate(state);
            setSliderPosition(state);
            return state;
        })
    
    }
    const touchEnd = ()=>{
    cancelAnimationFrame(animationID)
    setisDragging(false)
    const movedBy = currentTranslate - prevTranslate
    if (movedBy < -50 && currentIndex < 5){
        setcurrentIndex(currentIndex+1);
    }
    else if (movedBy > 50 && currentIndex > 0){
        setcurrentIndex(currentIndex-1)
    }
    setcurrentIndex((state)=>{
    setPositionByIndex(state)
    return state;
    })
    }

    const animation = ()=>{
    setSliderPosition()
    if (isDragging) requestAnimationFrame(animation)
    }


    const buttonSelect = (i)=>{
        if(i>=0 && i<=5){
            setcurrentIndex(i);
            setcurrentIndex((state)=>{
                setPositionByIndex(state);
                return state;
            })
        }
    }
    const setSliderPosition = (state=currentTranslate)=>{
    setTransform(`translateX(${state}px)`)
    }
    window.addEventListener('resize', setPositionByIndex)
    let buttons = []
    for(let i=0;i<6;i++){
        buttons.push(<button key={i} className={currentIndex===i?Style.ActiveButton:null} onClick={()=>{buttonSelect(i)}}>slide {i}</button>)                    
    }
    return(
        <div className={Style.Slider} >
            <div className={[Style.Arrow,Style.Prev].join(' ')} onClick={()=>{buttonSelect(currentIndex - 1)}}>previous</div>
            <div className={[Style.Arrow,Style.Next].join(' ')} onClick={()=>{buttonSelect(currentIndex + 1)}}>next</div>
            <div className={Style.SliderFrame} style={{transform:transform}}>
                <Slide touchStart={(event)=>{touchStart(event,0)}} touchEnd={touchEnd} touchMove={touchMove}><h1>slide 1</h1></Slide>
                <Slide touchStart={(event)=>{touchStart(event,1)}} touchEnd={touchEnd} touchMove={touchMove}><h1>slide 2</h1></Slide>
                <Slide touchStart={(event)=>{touchStart(event,2)}} touchEnd={touchEnd} touchMove={touchMove}><h1>slide 3</h1></Slide>
                <Slide touchStart={(event)=>{touchStart(event,3)}} touchEnd={touchEnd} touchMove={touchMove}><h1>slide 4</h1></Slide>
                <Slide touchStart={(event)=>{touchStart(event,4)}} touchEnd={touchEnd} touchMove={touchMove}><h1>slide 5</h1></Slide>
                <Slide touchStart={(event)=>{touchStart(event,5)}} touchEnd={touchEnd} touchMove={touchMove}><h1>slide 6</h1></Slide>
            </div>
            <div className={Style.Buttons}>
                {buttons}
            </div>
        </div>
    )
}

export default Slider;