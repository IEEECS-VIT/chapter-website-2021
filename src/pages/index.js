import React from "react"
import { Helmet } from "react-helmet"

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <title>IEEE-CS Website</title>
        <link rel="preconnect" href="https://fonts.gstatic.com">
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap"
            rel="stylesheet"
          ></link>
        </link>
      </Helmet>
    </>
  )
}

export default IndexPage
