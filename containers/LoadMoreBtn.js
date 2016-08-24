import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadShots } from '../actions/index'

class LoadMoreBtn extends Component {
  render() {
    const { loadShots } = this.props

    return (
      <button onClick={loadShots} className={'test-btn load-more'}>LoadMoreBtn</button>
    )
  }
}

export default connect(null, { loadShots })(LoadMoreBtn)
