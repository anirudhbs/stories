import React from "react"

import User from "./User"

function Section(props) {
  const { users } = props
  return (
    <ul>
      {users.map(user => (
        <User key={user} username={user} />
      ))}
    </ul>
  )
}

export default Section
