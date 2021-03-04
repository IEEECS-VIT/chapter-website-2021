import React from 'react'
import Style from './EventsMain.module.css'
import dots from '../svg/dots.png'
import ellipse from '../svg/ellipse.svg'
import semiEllipse from '../svg/semiEllipse.svg'

const EventsMain = (props)=>{
    let classList = Style.EventsMain
    console.log('here')
    if(props.showSlider){
        classList = classList + ' ' + Style.Disappear
    }
    window.onscroll = ()=>{
        if(!props.showSlider){
            const EventDiv = document.getElementsByClassName(Style.EventsMain)[0]
            console.log(window.scrollY)
            if(EventDiv.offsetTop   < window.scrollY ){
                EventDiv.classList.add(Style.Active)
                console.log('active')
            }
            else{
                EventDiv.classList.remove(Style.Active)
            }
        }
    }  
    return(
        <div className={classList}>
            <img className={Style.Semi1} src={semiEllipse} />
            <img className={Style.Semi2} src={semiEllipse} />
            <img className={Style.Half1}  src={ellipse} />
            <img className={Style.Half2} src={ellipse} />
            <div className={Style.Middle}>
                <div className={Style.Text}>
                    <h3>We have amazing</h3>
                    <h1>EVENTS</h1>
                    <div>Planning an event feels like a dream that reality can never live up to, till we end up pulling it off. Organizing events help not only the attendees but also all of us, both as coders and as people.</div>
                    <button onClick={()=>{console.log("click");props.setshowSlider(true)}}>Learn More</button>
                </div>
                <div className={Style.Mirror}></div>
                <img className={Style.Dot1} src={dots} />
                <img className={Style.Dot2} src={dots} />
                <div className={Style.Gray}></div>
                <div className={Style.Yellow}></div>
            </div>
        </div>
    )
}

export default EventsMain;