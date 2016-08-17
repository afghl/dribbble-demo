import React, { Component, PropTypes } from 'react'
import menus from '../static_data/menus'
import MenuItem from '../components/MenuItem'
import List from '../components/List'

export default class ShotMenu extends Component {
  renderMenuItem(menu) {
    return(
      <MenuItem item={menu} />
    )
  }

  render() {
    return(
      <div className="shot-menu">
        <List renderItem={this.renderMenuItem}
              items={menus}
        />
      </div>
    )
  }
}
