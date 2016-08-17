import React, { Component, PropTypes } from 'react'

export default class List extends Component {
  render() {
    const { items, renderItem } = this.props

    return (
      <ul>
        {items.map(renderItem)}
      </ul>
    )
  }
}

List.propTypes = {
  renderItem: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired
}
