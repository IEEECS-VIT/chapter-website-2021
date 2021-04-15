import React, { useState } from "react"
import Style from "./Slider.module.css"
import Slide from "../Slide/Slide"
import bg1 from "../../components/svg/bgSvg/bgSvg1.png"
import bg2 from "../../components/svg/bgSvg/bgSvg2.png"
import bg3 from "../../components/svg/bgSvg/bgSvg3.png"
import img1 from "../../components/svg/sliderImg/img1.png"
import img2 from "../../components/svg/sliderImg/img2.png"
import img3 from "../../components/svg/sliderImg/img3.png"
import img4 from "../../components/svg/sliderImg/img4.png"
import img5 from "../../components/svg/sliderImg/img5.png"

const Slider = props => {
  const [isDragging, setisDragging] = useState(false)
  const [currentTranslate, setcurrentTranslate] = useState(0)
  const [prevTranslate, setprevTranslate] = useState(0)
  const [startPos, setstartPos] = useState(0)
  const [animationID, setanimationID] = useState(null)
  const [currentIndex, setcurrentIndex] = useState(0)
  const [transform, setTransform] = useState("translateX(0px)")
  const getPositionX = event => {
    return event.type.includes("mouse") ? event.pageX : event.touches[0].clientX
  }
  const touchStart = (event, index) => {
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
  const setPositionByIndex = (state = currentIndex) => {
    setcurrentTranslate(state * -window.innerWidth)
    setcurrentTranslate(state => {
      setprevTranslate(state)
      setSliderPosition(state)
      return state
    })
  }
  const touchEnd = () => {
    cancelAnimationFrame(animationID)
    setisDragging(false)
    const movedBy = currentTranslate - prevTranslate
    if (movedBy < -50 && currentIndex < 5) {
      setcurrentIndex(currentIndex + 1)
    } else if (movedBy > 50 && currentIndex > 0) {
      setcurrentIndex(currentIndex - 1)
    }
    setcurrentIndex(state => {
      setPositionByIndex(state)
      return state
    })
  }

  const animation = () => {
    setSliderPosition()
    if (isDragging) requestAnimationFrame(animation)
  }

  const buttonSelect = i => {
    if (i >= 0 && i <= 6) {
      setcurrentIndex(i)
      setcurrentIndex(state => {
        setPositionByIndex(state)
        return state
      })
    }
  }
  const setSliderPosition = (state = currentTranslate) => {
    setTransform(`translateX(${state}px)`)
  }
  window.addEventListener("resize", setPositionByIndex)
  let buttons = []
  for (let i = 0; i < 7; i++) {
    buttons.push(
      <button
        key={i}
        className={currentIndex === i ? Style.ActiveButton : null}
        onClick={() => {
          buttonSelect(i)
        }}
      >
        slide {i}
      </button>
    )
  }
  return (
    <div className={`${Style.Slider} ${props.isDark && Style.Dark}`}>
      <div
        className={[Style.Arrow, Style.Prev].join(" ")}
        onClick={() => {
          buttonSelect(currentIndex - 1)
        }}
      >
        previous
      </div>
      <div
        className={[Style.Arrow, Style.Next].join(" ")}
        onClick={() => {
          buttonSelect(currentIndex + 1)
        }}
      >
        next
      </div>
      <div className={Style.SliderFrame} style={{ transform: transform }}>
        <Slide
          isActive={currentIndex === 0}
          touchStart={event => {
            touchStart(event, 0)
          }}
          touchEnd={touchEnd}
          touchMove={touchMove}
          bgImg={bg1}
          isDark={props.isDark}
          head="Rivera Cyber Hunt"
          subHead="Coding Treasure Hunt"
          img={img1}
          isLeft={true}
        >
          Riviera is the Annual International Sports and Cultural Carnival of
          the VIT, Vellore. In the spirit of the carnival, IEEE- Computer
          Society organizes informal events for the students. For Riviera IEEE
          Computer Society organized Cyber Hunt.
        </Slide>
        <Slide
          isActive={currentIndex === 1}
          touchStart={event => {
            touchStart(event, 1)
          }}
          touchEnd={touchEnd}
          touchMove={touchMove}
          bgImg={bg2}
          isDark={props.isDark}
          head="ARCS"
          subHead="Our Flagship Event"
          img={img2}
        >
          ARCS is a technical colloquium hosted by IEEE-Computer Society (VIT),
          which aims at improving the knowledge of the young enthusiastic minds.
          The 2019 edition of ARCS had five workshops, a Hack-A-Thon of 36 hours
          and convoke . It witnessed participation of thousands of students from
          all over the country.
        </Slide>
        <Slide
          isActive={currentIndex === 2}
          touchStart={event => {
            touchStart(event, 2)
          }}
          touchEnd={touchEnd}
          touchMove={touchMove}
          bgImg={bg3}
          isDark={props.isDark}
          head="Convoke"
          subHead="A 2-Day Conclave"
          img={img3}
          isLeft={true}
        >
          A 2-Day Conclave which will give you an opportunity to stand witness
          to amazing sessions from impactful orators and spell-bounding artists,
          who have a lot to offer for our future endeavors.
        </Slide>
        <Slide
          isActive={currentIndex === 3}
          touchStart={event => {
            touchStart(event, 3)
          }}
          touchEnd={touchEnd}
          touchMove={touchMove}
          bgImg={bg3}
          isDark={props.isDark}
          head="HackBattle"
          subHead="36 hour Hack-A-Thon"
          img={img4}
        >
          A 2-Day Conclave which will give you an opportunity to stand witness
          to amazing sessions from impactful orators and spell-bounding artists,
          who have a lot to offer for our future endeavors.
        </Slide>
        <Slide
          isActive={currentIndex === 4}
          touchStart={event => {
            touchStart(event, 4)
          }}
          touchEnd={touchEnd}
          touchMove={touchMove}
          bgImg={bg3}
          isDark={props.isDark}
          head="MozDev"
          subHead="Hands-on Web Development Workshop"
          img={img5}
          isLeft={true}
        >
          MozDev is a hands-on workshop, which provides you an insight into the
          field of web development. This 6-hour
          workshop conducted by industry experts from Mozilla
          Open-Source Community will get you the best possible
          exposure.
        </Slide>
        <Slide
          isActive={currentIndex === 5}
          touchStart={event => {
            touchStart(event, 5)
          }}
          touchEnd={touchEnd}
          touchMove={touchMove}
          bgImg={bg3}
          isDark={props.isDark}
          head="Cicada 3302"
          subHead="Cryptography Event"
          img={img1}
        >
          Have a knack for puzzles and cryptography? Then Cicada 3302 is just
          the event for you, an event which has unique and brain teasing puzzle
          tracks, paying homage to ancient and modern methods of code-breaking,
          with endless fun and hidden meanings.
        </Slide>
        <Slide
          isActive={currentIndex === 6}
          touchStart={event => {
            touchStart(event, 6)
          }}
          touchEnd={touchEnd}
          touchMove={touchMove}
          bgImg={bg3}
          isDark={props.isDark}
          head="Think Before Code"
          subHead="Competitive Coding Event"
          img={img2}
          isLeft={true}
        >
          It has always been an incredible adventure for a programmer to learn
          and to compete when it comes to coding. Wouldn't it be
          interesting if you could solve programs with more than
          one algorithm? Get ready with all your coding skills and you gonna enjoy the ride of this
          competitive programming competition,
        </Slide>
      </div>
      <div className={Style.Buttons}>{buttons}</div>
    </div>
  )
}

export default Slider
