import React, { Component, PropTypes } from 'react'
import MenuItem from './MenuItem'
import List from '../components/List'
import { names, list } from '../static_data/categories'

export default class ShotMenu extends Component {
  renderMenuItem(name) {
    const items = list[name]

    return(
      <MenuItem
        key={name}
        categoryType={name}
        items={items}
      />
    )
  }

  render() {
    return(
      <div className="shot-menu">
        <List renderItem={this.renderMenuItem}
              items={names}
        />
      </div>
    )
  }
}
