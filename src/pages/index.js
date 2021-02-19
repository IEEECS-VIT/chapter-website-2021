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

const Index = () => {
  return (
    <>
      <Helmet>
        <title>IEEE-CS Website</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <body>
        <Template>
          <Landing />
          <AboutUs />
          <Achievements />
          <Announcement />
          <Events />
          <OurTeam />
          <ContactUs />
        </Template>
      </body>
    </>
  )
}

export default Index
