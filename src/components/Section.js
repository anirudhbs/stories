import React, { Component } from "react"
import { getUsers } from "../APIs"
import User from "./User"

class Section extends Component {
  render() {
    const { status } = this.props
    const users = getUsers()
    return (
      <div>
        <h2 className="stories-header">{status} Products</h2>
        <ul>
          {users.map(user => (
            <User key={user} username={user} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Section
