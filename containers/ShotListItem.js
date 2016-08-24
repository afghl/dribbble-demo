import React, { Component, PropTypes } from 'react'

export default class ShotListItem extends Component {
  render() {
    const { shot } = this.props
    const { images, viewsCount, likesCount, commentsCount, user } = shot
    const { avatarUrl, name } = user

    return (
      <li className="shot-item">
        <div className="shot-card">
          <div className="shot-image">
            <img src={images.normal}/>
          </div>
          <ul className="shot-extra">
            <li>{viewsCount}</li>
            <li>{likesCount}</li>
            <li>{commentsCount}</li>
          </ul>
        </div>
        <h2 className="attribution">
          <span className="avater">
            <img src={avatarUrl}/>
          </span>
          {name}
        </h2>
      </li>
    );
  }
}
