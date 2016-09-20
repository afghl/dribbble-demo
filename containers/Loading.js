import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as status from '../reducers/paginate'

const mapStateToProps = (state, ownProps) => {
  const { spy } = ownProps
  const { fetchStatus } = state.pagination[spy]

  return { isFetching: fetchStatus == status.FETCHING }
}

class Loading extends Component {
  render() {
    const { content, isFetching } = this.props

    return (
      <div className={isFetching ? 'loading' : 'loading hide'}>
        <span>{content}</span>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Loading)
