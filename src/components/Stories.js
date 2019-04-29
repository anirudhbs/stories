import React, { Component } from "react"
import Carousel from "./Carousel"

class Stories extends Component {
  render() {
    const { username } = this.props.match.params
    return (
      <div>
        <Carousel username={username} />
      </div>
    )
  }
}

export default Stories
