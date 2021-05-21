import React, { useEffect, useRef, useState } from "react"
import Style from "./Slider.module.css"
import Slide from "../Slide/Slide"
import bg1 from "../../components/svg/bgSvg/bgSvg1.png"
import bg2 from "../../components/svg/bgSvg/bgSvg2.png"
import bg3 from "../../components/svg/bgSvg/bgSvg3.png"


const Slider = props => {
  const prevBtnRef = useRef(null)
  const nextButtonRef = useRef(null)
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
  const totalEvents = 5
  // Set totalEvents back to 6 in order to include Tech Hunt slide


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
    if (movedBy < -50) {
      setcurrentIndex((currentIndex + 1) % totalEvents)
    } else if (movedBy > 50) {
      setcurrentIndex((currentIndex - 1 + totalEvents) % totalEvents)
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
    i = (i + totalEvents) % totalEvents
    setcurrentIndex(i)
    setcurrentIndex(state => {
      setPositionByIndex(state)
      return state
    })
  }
  const setSliderPosition = (state = currentTranslate) => {
    setTransform(`translateX(${state}px)`)
  }
  const handleKeyDown = function (event) {
    if (event.key === "ArrowLeft") {
      if (prevBtnRef.current !== null) {
        prevBtnRef.current.click()
      }
    } else if (event.key === "ArrowRight") {
      if (nextButtonRef.current !== null) {
        nextButtonRef.current.click()
      }
    }
  }
  useEffect(() => {
    window.addEventListener("resize", setPositionByIndex)
    window.addEventListener("keydown", handleKeyDown)
    return function cleanUp() {
      window.removeEventListener("resize", setPositionByIndex)
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [])
  let buttons = []
  for (let i = 0; i < totalEvents; i++) {
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
    <div
      className={`${Style.Slider} ${props.isDark && Style.Dark}`}
      role="slider"
      aria-valuenow={currentIndex}
    >
      <div
        ref={prevBtnRef}
        className={[Style.Arrow, Style.Prev].join(" ")}
        onClick={() => {
          buttonSelect(currentIndex - 1)
        }}
        role="button"
        onKeyPress={() => {
          buttonSelect(currentIndex - 1)
        }}
      >
        previous
      </div>
      <div
        ref={nextButtonRef}
        className={[Style.Arrow, Style.Next].join(" ")}
        onClick={() => {
          buttonSelect(currentIndex + 1)
        }}
        role="button"
        onKeyPress={() => {
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
          bgImg={bg2}
          isDark={props.isDark}
          head="ARCS"
          subHead="The Flagship event"
          img="https://res.cloudinary.com/ieeecs-vit/image/upload/c_scale,q_100,w_539/v1621358997/Chapter%20Website%202021%20assets/Events/a_hqm2rx.jpg"
        >
          A Technical colloquium where participants learn and get inspired from
          the best in the business through numerous workshops and a Convoke. It
          also has a 36-hr Hack-a-thon wherein ideas come to life. With a big
          prize pool and an even larger participant base, it is one of the most
          popular Solo Events in VIT.
        </Slide>
        <Slide
          isActive={currentIndex === 1}
          touchStart={event => {
            touchStart(event, 1)
          }}
          touchEnd={touchEnd}
          touchMove={touchMove}
          bgImg={bg3}
          isDark={props.isDark}
          head="HackBattle"
          subHead="The Battle of Bright Minds"
          img="https://res.cloudinary.com/ieeecs-vit/image/upload/c_scale,q_100,w_550/v1621358997/Chapter%20Website%202021%20assets/Events/hb_xhcjdc.jpg"
        >
          A 2-day race to innovation, of developers where the most staunch and
          inventive prevail. Where inspiration is served in heaps and bounds by
          our most astounding guests, as they take the stage to shower their
          knowledge.
        </Slide>
        <Slide
          isActive={currentIndex === 2}
          touchStart={event => {
            touchStart(event, 2)
          }}
          touchEnd={touchEnd}
          touchMove={touchMove}
          bgImg={bg1}
          isDark={props.isDark}
          head="MozDev"
          subHead="The Legacy Event"
          img="https://res.cloudinary.com/ieeecs-vit/image/upload/c_scale,q_100,w_550/v1621358997/Chapter%20Website%202021%20assets/Events/moz_quvs0s.jpg"
          isLeft={true}
        >
          A premium 6 hour hands-on session on Web Development for the
          developers of tomorrow. The workshop is delivered by an industry
          experts from the Mozilla Open-Source Community. Novice learners
          looking for a perfect kick-start to their career are most welcomed!
        </Slide>
        <Slide
          isActive={currentIndex === 3}
          touchStart={event => {
            touchStart(event, 3)
          }}
          touchEnd={touchEnd}
          touchMove={touchMove}
          bgImg={bg2}
          isDark={props.isDark}
          head="Cicada 3302"
          subHead="The Colossal Conundrum"
          img="https://res.cloudinary.com/ieeecs-vit/image/upload/c_scale,q_100,w_550/v1621359854/Chapter%20Website%202021%20assets/Events/icada_jmwukt.jpg"
        >
          A virtual maze filled with a series of mind-boggling puzzles and
          hidden messages. The event enjoys extreme popularity amongst the
          cryptic geeks and is one of the most sought-after.
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
          head="Think Before Code"
          subHead="The World is Competitive."
          img="https://res.cloudinary.com/ieeecs-vit/image/upload/q_100/v1621358997/Chapter%20Website%202021%20assets/Events/tbc_x8odjv.jpg"
          isLeft={true}
        >
          An adventure ride for the competitive coders, TBC is your chance to
          unleash the problem solver within you. Get your head gears on, fasten
          the seatbelts you dive into the ocean of critical thinking!
        </Slide>
        {/* <Slide
          isActive={currentIndex === 5}
          touchStart={event => {
            touchStart(event, 5)
          }}
          touchEnd={touchEnd}
          touchMove={touchMove}
          bgImg={bg1}
          isDark={props.isDark}
          head="Tech Hunt"
          subHead="A hunt with Code-Snippets"
          img="https://res.cloudinary.com/ieeecs-vit/image/upload/c_scale,q_100,w_550/v1621358997/Chapter%20Website%202021%20assets/Events/th_hxwscj.jpg"
          isLeft={true}
        >
          Nothing screams adventure more than a Treasure Hunt. IEEE-CS brings
          forth the greatest cyber odyssey every Riviera! Read between the lines
          and rally your coding skills to the ultimate prize.
        </Slide> */}
      </div>
      <div className={Style.Buttons}>{buttons}</div>
    </div>
  )
}

export default Slider
