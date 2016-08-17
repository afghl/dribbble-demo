import React, { Component } from 'react'

export default class ScreenshotAction extends Component {
  constructor(props) {
    super(props)

    this.state = this.getState()
  }

  getState() {
    return { visiting: false }
  }

  render() {
    const ulClassName = this.state.visiting ? 'shot-display' : 'shot-display hide'

    return (
      <div className="screenshot-menu">
        <a className="menu-button" onClick={this._onMenuClick.bind(this)}></a>
        <div className={ulClassName}>
          <h3>display options</h3>
          <ul>
            <li>large</li>
            <li>small</li>
          </ul>
        </div>
      </div>
    )
  }

  _onMenuClick() {
    this.setState({visiting: !this.state.visiting})
  }
}
