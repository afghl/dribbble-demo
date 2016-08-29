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
      <button
        onClick={loadShots}
        className={isFetching ? 'load-more hide' : 'load-more'}
      >
        LoadMoreBtn
      </button>
    )
  }
}

export default connect(mapStateToProps, { loadShots })(LoadMoreBtn)
