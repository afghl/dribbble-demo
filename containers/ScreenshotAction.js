import React, { Component } from 'react'
import items from '../components/ScreenshotItems'
import { connect } from 'react-redux'
import { updateListStyle } from '../actions/listStyle'

const mapStateToProps = (state, ownProps) => {
  return { currentStyle: state.listStyle }
}

class ScreenshotAction extends Component {
  constructor(props) {
    super(props)
    this.renderItem = this.renderItem.bind(this)
    this.state = this.getState()
  }

  getState() {
    return { visiting: false }
  }

  renderItem(item) {
    const { currentStyle } = this.props
    return (
      <li
        className={item.name == currentStyle ? `${item.name} current` : item.name}
        onClick={this.updateSelected(item.name)}
      >
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

  updateSelected(styleType) {
    const { updateListStyle } = this.props

    return () => {
      this.setState({visiting: false})
      updateListStyle(styleType)
    }
  }
}

export default connect(
  mapStateToProps,
  { updateListStyle }
)(ScreenshotAction)
