import React from "react"
import { Helmet } from "react-helmet"
import AboutUs from "../sections/about-us"
import ContactUs from "../sections/contact-us"
import Events from "../sections/events"
import OurTeam from "../sections/our-team"
import Template from "../components/template"
import Landing from "../sections/landing"
import Circle from "../sections/Circle"

const Index = () => {
  return (
    <div>
      <Helmet>
        <title>IEEE-CS Website</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="stylesheet" href="./global.css" />
      </Helmet>
      <div>
        <Template>
          <Circle />
          <Landing />
          <AboutUs />
          <Events />
          <div id="Team">
            <OurTeam />
          </div>
          <ContactUs />
        </Template>
      </div>
    </div>
  )
}

export default Index
