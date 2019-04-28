import React, { Fragment } from "react"
import Section from "./Section"

function Home() {
  const status = ["Seen", "Unseen"]
  return (
    <Fragment>
      <h1>Stories</h1>
      {status.map(cur => (
        <Section key={cur} status={cur} />
      ))}
    </Fragment>
  )
}

export default Home
