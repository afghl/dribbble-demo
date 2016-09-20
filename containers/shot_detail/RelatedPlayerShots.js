import React, { Component } from 'react'
import { connect } from 'react-redux'
import List from '../../components/List'
import { loadRelated } from '../../actions/relatedShots'
import { showShotDetail } from '../../actions/shotDetail'
import * as status from '../../reducers/paginate'

const mapStateToProps = (state, ownProps) => {
  const {
    entities: { shots },
    pagination: {
      related: { fetchStatus, ids, failTimes }
    }
  } = state
  const related = ids.map(id => shots[id])

  return {
    related,
    fetchStatus,
    failTimes
  }
}

class ShotDetailRelatedPlayerShots extends Component {

  shouldFetchRelated(props) {
    return !!props.user && props.fetchStatus == status.PENDING
  }

  componentWillMount() {
    if (this.shouldFetchRelated(this.props)) {
      this.props.loadRelated(this.props.user.id)
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.shouldFetchRelated(nextProps)) {
      this.props.loadRelated(nextProps.user.id)
    }
  }

  renderItem(shot) {
    const { user, showShotDetail } = this.props

    return (
      <li className="multi-thumb">
        <a href="#" onClick={() => {showShotDetail(shot.id, user.id)}}>
          <img alt={shot.title} src={shot.images.teaser}/>
        </a>
      </li>
    )
  }

  render() {
    const { user, related } = this.props

    return (
      <div className="related-player-shots">
        <h3 className="meta-head">
          More from {user.name}
        </h3>

        <List
          className="more-thumbs"
          items={related}
          renderItem={this.renderItem.bind(this)}
        />
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  { loadRelated, showShotDetail }
)(ShotDetailRelatedPlayerShots)
