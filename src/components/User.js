import React, { Component } from "react"
import { Link } from "react-router-dom"

class User extends Component {
  render() {
    const { username } = this.props
    return (
      <Link to={`/stories/${username}`}>
        <li className="user">
          <div className="user-icon">
            <img
              src="https://avatars0.githubusercontent.com/u/25001871?s=460&v=4"
              alt="user avatar"
              width="50px"
            />
          </div>
          <div className="user-text">
            <div>{username}</div>
            <div className="upload-time">3 hours ago</div>
          </div>
        </li>
      </Link>
    )
  }
}
export default User
