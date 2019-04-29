import React, { Component, Fragment } from "react"
import { Link } from "react-router-dom"

import SeeMore from "./SeeMore"

export default class Story extends Component {
  constructor() {
    super()
    this.state = {
      showSeeMore: false
    }
    this.toggleSeeMore = this.toggleSeeMore.bind(this)
    this.nextStory = this.nextStory.bind(this)
  }

  toggleSeeMore(e) {
    e.stopPropagation()
    this.setState({
      showSeeMore: !this.state.showSeeMore
    })
  }

  nextStory() {
    this.setState({
      showSeeMore: false
    })
    this.props.next()
  }

  render() {
    const { username } = this.props
    const { showSeeMore } = this.state
    const background = "https://picsum.photos/id/452/1080/1920"
    const storyStyle = {
      backgroundImage: `url(${background})`
    }

    const seeMoreContainerStyle = {
      top: showSeeMore ? "27vh" : "90vh"
    }

    const seeMoreDetailsStyle = {
      top: showSeeMore ? "35vh" : "100vh"
    }

    return (
      <Fragment>
        <div className="story" style={storyStyle} onClick={this.nextStory}>
          <div className="story-header">
            <span>
              <Link to="/">Back</Link>
            </span>
            <span className="story-username">{username}</span>
            <span className="story-time">3 hours ago</span>
          </div>
          <div
            className="see-more-container"
            onClick={this.toggleSeeMore}
            style={seeMoreContainerStyle}
          >
            <div>See more</div>
          </div>
          <div className="see-more-details" style={seeMoreDetailsStyle}>
            <SeeMore />
          </div>
        </div>
      </Fragment>
    )
  }
}
