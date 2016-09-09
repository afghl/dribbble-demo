import React, { Component, PropTypes } from 'react'

export default class OverLay extends Component {
  render() {
    const { onClose, className } = this.props

    return (
      <div
        className={className}
      >
        <a
          href="javascript:;"
          className='close-overlay'
          onClick={onClose}
        >
        </a>
      </div>
    )
  }
}
