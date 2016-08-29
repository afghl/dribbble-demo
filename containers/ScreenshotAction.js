import React, { Component } from 'react'
import items from '../components/ScreenshotItems'

export default class ScreenshotAction extends Component {
  constructor(props) {
    super(props)

    this.state = this.getState()
  }

  getState() {
    return { visiting: false }
  }

  renderItem(item) {
    return (
      <li className={item.name}>
        {item.component()}
      </li>
    )
  }

  render() {
    const ulClassName = this.state.visiting ? 'shot-display' : 'shot-display hide'

    return (
      <div className="screenshot-menu">
        <a
          className={ this.state.visiting ? 'menu-button active' : 'menu-button' }
          onClick={this.onMenuClick.bind(this)}
        >
        <span></span>
        </a>
        <div className={ulClassName}>
          <h3>display options</h3>
          <ul>
            {items.map(this.renderItem)}
          </ul>
        </div>
      </div>
    )
  }

  onMenuClick() {
    this.setState({visiting: !this.state.visiting})
  }
}
