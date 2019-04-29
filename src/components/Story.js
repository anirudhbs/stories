import React, { Component, Fragment } from "react"
import { Link } from "react-router-dom"

export default class Story extends Component {
  constructor() {
    super()
    this.state = {
      showSeeMore: false
    }
    this.toggleSeeMore = this.toggleSeeMore.bind(this)
  }

  toggleSeeMore() {
    this.setState({
      showSeeMore: !this.state.showSeeMore
    })
  }

  render() {
    const { showSeeMore } = this.state
    const background = "https://picsum.photos/id/452/1080/1920"
    const storyStyle = {
      backgroundImage: `url(${background})`
    }

    return (
      <Fragment>
        <div className="story" style={storyStyle}>
          <div className="story-header">
            <span>
              <Link to="/">Back</Link>
            </span>
            <span className="story-username">Anirudh B S</span>
            <span className="story-time">7 hours ago</span>
          </div>
          <div
            className="see-more-container"
            onClick={this.toggleSeeMore}
            style={{ top: showSeeMore ? "27vh" : "90vh" }}
          >
            <div>See more</div>
          </div>
          {showSeeMore && <div className="see-more-details">hello world</div>}
        </div>
      </Fragment>
    )
  }
}
