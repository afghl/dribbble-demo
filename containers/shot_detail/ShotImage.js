import React, { Component } from 'react'

export default class ShotDetailShotImage extends Component {
  render() {
    const { images: { hidpi }, title } = this.props.shot

    return (
      <div className="the-shot">
        <div className="single group">
          <div className="single-grid">
            <div className="single-img">
              <img src={hidpi} alt={title} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
