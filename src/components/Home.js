import React, { Fragment, Component } from "react"

import Section from "./Section"
import { getUsers } from "../APIs"

export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    this.setState({ users: getUsers() })
  }

  render() {
    const { users } = this.state
    return (
      <Fragment>
        <h1>Stories</h1>
        <div>
          {Object.keys(users).map(status => (
            <div key={status}>
              <h2 className="stories-header">{status} Products</h2>
              <Section users={users[status]} />
            </div>
          ))}
        </div>
      </Fragment>
    )
  }
}
