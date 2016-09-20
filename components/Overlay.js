import React, { Component, PropTypes } from 'react'

export default class OverLay extends Component {
  render() {
    const { onClose, className, children } = this.props

    return (
      <div
        className={className}
        onClick={onClose}
      >
        <a
          href="javascript:;"
          className='close-overlay'
          onClick={onClose}
        >
        </a>
        {children}
      </div>
    )
  }
}
