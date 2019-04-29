import React, { Component } from "react"
import Slider, { slickPlay } from "react-slick"
import { Link } from "react-router-dom"

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
    const background = "https://picsum.photos/id/452/1080/1920"
    const storyStyle = {
      backgroundImage: `url(${background})`
    }

    return (
      <Slider {...settings}>
        {[1, 2, 3].map(cur => (
          <div key={cur}>
            <div className="story" style={storyStyle} onClick={slickPlay}>
              <div className="story-header">
                <span>
                  <Link to="/">Back</Link>
                </span>
                <span className="story-username">Anirudh B S</span>
                <span className="story-time">7 hours ago</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    )
  }
}

export default SimpleSlider
