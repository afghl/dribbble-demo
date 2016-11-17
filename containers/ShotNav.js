import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { showNext, showPrev } from '../actions/shotDetail'

const mapStateToProps = (state, ownProps) => {
  return {}
}

class ShotNav extends Component {
  render() {
    const {showNext, showPrev} = this.props

    return (
      <ul className="shot-nav">
        <li className="shot-nav-prev">
          <a href="javascript:;" onClick={showPrev}></a>
        </li>
        <li className="shot-nav-next">
          <a href="javascript:;" onClick={showNext}></a>
        </li>
      </ul>
    )
  }
}

export default connect(
  mapStateToProps,
  { showNext, showPrev }
)(ShotNav)
