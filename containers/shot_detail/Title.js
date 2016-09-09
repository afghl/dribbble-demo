import React, { Component } from 'react'

export default class ShotDetailTitle extends Component {
  render() {
    return (
      <div id="screenshot-title-section" className="full">
        <div className="slat-header user ">
          <h1>Become Seller</h1>

          <h2 className="shot-byline">
            <span className="attribution ">
              <span className="shot-byline-user">
                by <a className="url hoverable" rel="contact" href="javascript:;">Barthelemy Chalvet</a>
              </span>
            </span>

            <span className="attribution">
              <span className="shot-byline-project">
                in <a href="/BarthelemyChalvet/projects/311677-MarketMe">MarketMe</a>
              </span>
            </span>

            <span className="shot-byline-date">
              on <a href="/shots?date=2016-09-08">Sep 8, 2016</a>
            </span>
          </h2>

        </div>
      </div>
    )
  }
}
