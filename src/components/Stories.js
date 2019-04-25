import React, { Component } from "react"

class Stories extends Component {
  render() {
    const { username } = this.props.match.params
    return <div>This is the stories component for {username}</div>
  }
}

export default Stories
