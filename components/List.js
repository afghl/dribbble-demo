import React, { Component, PropTypes } from 'react'

export default class List extends Component {
  render() {
    const { items, renderItem, className } = this.props

    return (
      <ul className={className}>
        {items.map(renderItem)}
      </ul>
    )
  }
}

List.propTypes = {
  renderItem: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired
}
