import React, { Component } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  const { pagination: { isFetching } } = state
  return { isFetching }
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
