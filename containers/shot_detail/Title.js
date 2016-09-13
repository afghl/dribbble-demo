import React, { Component } from 'react'

export default class ShotDetailTitle extends Component {
  render() {
    console.log(this.props.shot);
    const { title, user, team, createdAt } = this.props.shot

    return (
      <div id="screenshot-title-section" className="full">
        <div className="picture">
          <img src={user.avatarUrl} />
        </div>

        <div className="slat-header user ">
          <h1>{title}</h1>

          <h2 className="shot-byline">
            <span className="attribution ">
                by <a className="url hoverable" rel="contact" href="javascript:;">{user.name}</a>
            </span>
            {this.renderTeam()}

            <span className="shot-byline-date">
              on <a href="javascript:;" className="date">Sep 8, 2016</a>
            </span>
          </h2>

        </div>
      </div>
    )
  }

  renderTeam() {
    const { team } = this.props.shot
    if (!team) return

    return (
      <span className="attribution">
        for <a href="javascript:;">{team.name}</a>
      </span>
    )
  }
}
