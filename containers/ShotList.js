import React, { Component } from 'react'
import { connect } from 'react-redux'
import List from '../components/List'
import ShotListItem from './ShotListItem'
import { loadShots } from '../actions/shots'
import * as status from '../reducers/paginate'

const mapStateToProps = (state, ownProps) => {
  const {
    entities: {
      shots
    },
    pagination: {
      shots: {
        fetchStatus,
        ids,
        failTimes
      }
    },
    pageStyle: {
      list: {
        size,
        withMeta
      }
    }
  } = state

  const shotList = ids.map(id => shots[id])

  return {
    shots: shotList,
    fetchStatus,
    failTimes,
    size,
    withMeta
  }
}

class ShotList extends Component {
  componentWillMount() {
    if (this.shouldLoadShots(this.props)) {
      this.props.loadShots()
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.shouldLoadShots(nextProps)) {
      this.props.loadShots()
    }
  }

  shouldLoadShots(props) {
    const { shots, fetchStatus, failTimes } = props
    return shots.length == 0 && fetchStatus == status.PENDING && failTimes < 10
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
