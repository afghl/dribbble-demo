import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadShots } from '../actions/index'

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onClick: () => { dispatch(loadShots()) }
//   }
// }

class TestBtn extends Component {

  render() {
    const { loadShots } = this.props


    return (
      <button onClick={loadShots} className={'test-btn'}>TestBtn</button>
    )
  }
}

export default connect(null, { loadShots })(TestBtn)
