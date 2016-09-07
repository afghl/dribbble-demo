import React, { Component, PropTypes } from 'react'

export default class OverLay extends Component {
  render() {
    const { renderChild, onClose } = this.props

    return (
      <div className='over-lay'>
        <a href="javascript:;" className='close-overlay' onClick={onClose}></a>
        {renderChild()}
      </div>
    )
  }
}
