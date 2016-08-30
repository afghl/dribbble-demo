import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadShots } from '../actions/index'

const mapStateToProps = (state) => {
  const { pagination: { isFetching } } = state
  return { isFetching }
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
          Load More!
        </button>
      </div>
    )
  }
}

export default connect(mapStateToProps, { loadShots })(LoadMoreBtn)
