import React from "react"
import { Helmet } from "react-helmet"
import AboutUs from "../sections/about-us"
import Achievements from "../sections/achievement"
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
      <Helmet
        htmlAttributes={{
          lang: "en",
        }}
      >
        <title>IEEE Computer Society - VIT</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
        <meta charset="UTF-8" />
        <meta property="og:title" content="IEEE Computer Society VIT" />
        <meta property="og:image" content="src/images/logoicon.png" />
        <meta property="og:url" content="http://www.ieeecsvit.com" />
        <meta
          property="og:description"
          content="The Official Website of IEEE-CS VIT."
        />
        <meta
          name="keywords"
          content="IEEECS, IEEE, IEEE Computer Society, IEEE Computer Society VIT, IEEE-CS VIT, VIT, vit, ARCS, HackBattle, HackBattle '20, ieeecsvit, ieeecs"
        />
        {/* <link rel="stylesheet" href="./global.css" /> */}
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
