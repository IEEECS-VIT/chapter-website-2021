import React from "react"
import { Helmet } from "react-helmet"
import AboutUs from "../sections/about-us"

import Achievements from "../sections/achievement"
import Announcement from "../sections/announcement"

import ContactUs from "../sections/contact-us"
import Events from "../sections/events"
import OurTeam from "../sections/our-team"
import Template from "../components/template"
import Landing from "../sections/landing"
import Circle from "../sections/Circle"
import favicon from "../images/logoicon.png"

const Index = () => {
  if (typeof window !== "undefined") {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0)
    }
  }
  return (
    <div>
      <Helmet>
        <title>IEEE Computer Society</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="icon" type="image/png" href={favicon} sizes="16x16" />

        <link rel="stylesheet" href="./global.css" />
      </Helmet>
      <div>
        <Template>
          <Circle />
          <Landing />
          <div id="About">
            <AboutUs />
          </div>
          <div id="Events">
            <Events />
          </div>
          <div id="Achievements">
            <Achievements />
          </div>
          <div id="Team">
            <OurTeam />
          </div>
          <div id="Contact">
            <ContactUs />
          </div>
        </Template>
      </div>
    </div>
  )
}

export default Index
