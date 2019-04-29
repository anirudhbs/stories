import React, { Component } from "react"
import Slider from "react-slick"

import Story from "./Story"

class SimpleSlider extends Component {
  render() {
    const settings = {
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      autoplaySpeed: 3000,
      pauseOnFocus: true,
      infinite: false
      // autoplay: true
    }

    return (
      <Slider {...settings}>
        {[1, 2, 3].map(cur => (
          <div key={cur}>
            <Story />
          </div>
        ))}
      </Slider>
    )
  }
}

export default SimpleSlider
