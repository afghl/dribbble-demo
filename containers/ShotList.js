import React, { Component } from 'react'
import List from '../components/List'
import ShotListItem from './ShotListItem'

export default class ShotList extends Component {

  renderShotListItem() {
    return (
      <ShotListItem />
    )
  }

  render() {
    return (
      <List renderItem={() => <ShotListItem />}
            items={[{}, {}]}
      />
    )
  }
}
