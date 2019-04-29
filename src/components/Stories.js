import React, { Component } from "react"
import Slider from "react-slick"

import Story from "./Story"

class Stories extends Component {
  constructor(props) {
    super(props)
    this.next = this.next.bind(this)
  }

  next() {
    this.slider.slickNext()
  }

  render() {
    const { username } = this.props.match.params

    const settings = {
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      infinite: false,
      cssEase: "linear",
      autoplay: false
    }

    return (
      <Slider ref={slider => (this.slider = slider)} {...settings}>
        {[1, 2, 3].map(cur => (
          <div key={cur}>
            <Story username={username} next={this.next} />
          </div>
        ))}
      </Slider>
    )
  }
}

export default Stories
