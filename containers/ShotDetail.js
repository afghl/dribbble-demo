import React, { Component } from 'react'
import { connect } from 'react-redux'

class ShotDetail extends Component {

  render() {
    return (
      <div className="shot-detail">
        春夏秋冬
      </div>
    )
  }
}

export default connect()(ShotDetail)
