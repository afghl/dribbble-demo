import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadShots } from '../actions/shots'
import * as status from '../reducers/paginate'

const mapStateToProps = (state) => {
  const { fetchStatus } = state.pagination.shots

  return { isFetching: fetchStatus == status.FETCHING }
}

class LoadMoreBtn extends Component {
  render() {
    const { loadShots, isFetching } = this.props

    return (
      <div className="load-more">
        <button
          onClick={loadShots}
          className={isFetching ? 'hide' : ''}
        >
        </button>
      </div>
    )
  }
}

export default connect(mapStateToProps, { loadShots })(LoadMoreBtn)
