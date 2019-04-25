import React from "react"
import { BrowserRouter, Route } from "react-router-dom"

import Home from "./Home"
import Stories from "./Stories"

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/stories/:username" component={Stories} />
    </BrowserRouter>
  )
}

export default App
