import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => {
  return {}
}

class ShotNav extends Component {
  render() {
    return (
      <ul className="shot-nav">
        <li className="shot-nav-prev">
          <a href="javascript:;"> </a>
        </li>
        <li className="shot-nav-next">
          <a href="javascript:;"></a>
        </li>
      </ul>
    )
  }
}

export default connect(
  mapStateToProps
)(ShotNav)
