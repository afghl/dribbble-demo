import React, { Component } from 'react'
import { connect } from 'react-redux'
import List from '../components/List'
import ShotListItem from './ShotListItem'
import { loadShots } from '../actions/index'

const mapStateToProps = (state, ownProps) => {
  const {
    shots,
    pagination: {
      isFetching,
      ids,
      failTimes
    },
    listStyle: {
      size,
      withMeta
    }
  } = state
  const shotList = ids.map(id => shots[id])
  return {
    shots: shotList,
    isFetching,
    failTimes,
    size,
    withMeta
  }
}

class ShotList extends Component {
  componentWillMount() {
    const { loadShots } = this.props
    if (this.shouldLoadShots(this.props)) {
      loadShots()
    }
  }

  componentWillReceiveProps(nextProps) {
    const { loadShots } = nextProps
    if (this.shouldLoadShots(nextProps)) {
      loadShots()
    }
  }

  shouldLoadShots(props) {
    const { shots, isFetching, failTimes } = props
    return shots.length == 0 && !isFetching && failTimes < 10
  }

  renderShotItem(shot) {
    return (
      <ShotListItem
        shot={shot}
      />
    )
  }

  render() {
    const { shots, size, withMeta } = this.props
    let className = `shot-list ${size}`

    if (withMeta) {
      className += ' with-meta'
    }

    return (
      <List
        renderItem={this.renderShotItem}
        items={shots}
        className={className}
      />
    )
  }
}

export default connect(
  mapStateToProps,
  { loadShots }
)(ShotList)
