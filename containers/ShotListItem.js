import React, { Component, PropTypes } from 'react'

export default class ShotListItem extends Component {
  renderExtra() {
    const { viewsCount, likesCount, commentsCount } = this.props.shot

    return (
      <ul className="shot-extra">
        <li>{viewsCount}</li>
        <li>{likesCount}</li>
        <li>{commentsCount}</li>
      </ul>
    )
  }

  render() {
    const { images, user } = this.props.shot
    const { avatarUrl, name } = user

    return (
      <li className="shot-item">
        <div className="shot-card">
          <div className="shot-image">
            <img src={images.normal}/>
          </div>
          {this.renderExtra()}
        </div>
        <h2 className="attribution">
          <span className="avater"><img src={avatarUrl}/></span>
          {name}
        </h2>
      </li>
    );
  }
}
