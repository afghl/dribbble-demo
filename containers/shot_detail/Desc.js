import React, { Component } from 'react'

export default class ShotDetailDesc extends Component {
  render() {
    const { description } = this.props.shot

    return (
      <div className="shot-desc" dangerouslySetInnerHTML={{__html: description}}>
      </div>
    )
  }
}
