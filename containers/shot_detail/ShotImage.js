import React, { Component } from 'react'

export default class ShotDetailShotImage extends Component {
  constructor(props) {
    super(props)
    this.toggleZooming = this.toggleZooming.bind(this)
    this.state = this.getState()
  }

  getState() {
    return { isZooming: false }
  }

  toggleZooming() {
    this.setState({ isZooming: !this.state.isZooming })
  }

  render() {
    const { images, title } = this.props.shot
    const { hidpi, normal } = images
    const { state: { isZooming }, toggleZooming } = this
    return (
      <div
        className={isZooming ? 'the-shot zooming' : 'the-shot'}
        onClick={toggleZooming}
      >
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
