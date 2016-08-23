import React, { Component } from 'react'
import { connect } from 'react-redux'
import List from '../components/List'
import ShotListItem from './ShotListItem'

class ShotList extends Component {
  render() {
    return (
      <List
        renderItem={() => <ShotListItem />}
        items={[{}, {}]}
      />
    )
  }
}

export default connect()(ShotList)
