import React, { Component } from 'react'
import items from '../components/ScreenshotItems'
import { connect } from 'react-redux'
import { updateListStyle } from '../actions/listStyle'
import List from '../components/List'

const mapStateToProps = (state, ownProps) => {
  return { currentStyle: state.listStyle }
}

class ScreenshotAction extends Component {
  constructor(props) {
    super(props)
    this.renderItem = this.renderItem.bind(this)
    this.onMenuClick = this.onMenuClick.bind(this)
    this.state = this.getState()
  }

  getState() {
    return { visiting: false }
  }

  renderItem(style) {
    const { currentStyle: { size, withMeta } } = this.props

    return (
      <li
        className={style.size == size && style.withMeta == withMeta ? 'current' : ''}
        onClick={this.updateSelected(style)}
        key={style.name}
      >
        {style.component()}
      </li>
    )
  }

  render() {
    return (
      <div className="screenshot-menu">
        <a
          className={this.state.visiting ? 'menu-button active' : 'menu-button'}
          onClick={this.onMenuClick}
        >
          <span></span>
        </a>
        <div className={this.state.visiting ? 'shot-display' : 'shot-display hide'}>
          <h3>display options</h3>
          <List
            items={items}
            renderItem={this.renderItem.bind(this)}
          />
        </div>
      </div>
    )
  }

  onMenuClick() {
    this.setState({visiting: !this.state.visiting})
  }

  updateSelected(style) {
    const { updateListStyle } = this.props

    return () => {
      this.setState({visiting: false})

      updateListStyle(style)
    }
  }
}

export default connect(
  mapStateToProps,
  { updateListStyle }
)(ScreenshotAction)
