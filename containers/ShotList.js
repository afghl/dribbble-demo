import React, { Component } from 'react'
import { connect } from 'react-redux'
import List from '../components/List'
import ShotListItem from './ShotListItem'
import { loadShots } from '../actions/index'

// TODO
const mapStateToProps = (state, ownProps) => {
  const { shots } = state
  return { shots }
}

class ShotList extends Component {
  componentDidMount() {
    const { loadShots } = this.props
    if (this.shouldLoadShots()) {
      loadShots()
    }
  }

  shouldLoadShots() {
    const { shots } = this.props
    return shots !== null && shots !== []
  }

  renderShotItem(shot) {
    return (
      <ShotListItem
        shot={shot}
      />
    )
  }

  render() {
    const { shots } = this.props

    return (
      <List
        renderItem={this.renderShotItem}
        items={shots}
        className={"shot-list"}
      />
    )
  }
}

export default connect(
  mapStateToProps,
  { loadShots }
)(ShotList)
