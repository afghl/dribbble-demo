import React, { Component, PropTypes } from 'react'

export default class ShotListItem extends Component {
  render() {
    const { images: { normal } } = this.props
    console.log(normal);

    return (
      <li className="shot-item">
        <div className="shot-card">
          <div className="shot-image">
            <img src={normal}/>
          </div>
          <ul className="shot-extra">
            <li className="view">2910</li>
            <li className="view">18</li>
            <li className="view">387</li>
          </ul>
        </div>
        <h2 className="attribution">
          <span className="avater">
            <img src="https://d13yacurqjgara.cloudfront.net/users/31752/avatars/mini/312157471aa9ba31c98655135988e440.png?1441221178"/>
          </span>
          Nick Slater
        </h2>
      </li>
    );
  }
}
