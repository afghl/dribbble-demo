import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchShots } from '../actions/index'

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => { dispatch(fetchShots('hehe')) }
  }
}

class TestBtn extends Component {

  render() {
    const { onClick } = this.props

    return (
      <button onClick={onClick} className={'test-btn'}>TestBtn</button>
    )
  }
}

export default connect(null, mapDispatchToProps)(TestBtn)
