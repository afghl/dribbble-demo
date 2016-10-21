import React, { Component } from 'react'

export default class ShotDetailShotImage extends Component {
  render() {
    const { images, title } = this.props.shot
    const { hidpi, normal } = images
    return (
      <div className="the-shot">
        <div className="single group">
          <div className="single-grid">
            <div className="single-img">
              <img src={hidpi || normal} alt={title} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
