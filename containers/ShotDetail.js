import React, { Component } from 'react'
import { connect } from 'react-redux'
import find from 'lodash/find'
import Title from './shot_detail/Title'
import Comments from './shot_detail/Comments'
import Desc from './shot_detail/Desc'
import RelatedPlayerShots from './shot_detail/RelatedPlayerShots'
import ShotImage from './shot_detail/ShotImage'
import ShotStats from './shot_detail/ShotStats'
import TagSession from './shot_detail/TagSession'

const mapStateToProps = (state, ownProps) => {
  const { selected: { shotId }, shots } = state
  if (shotId == null) {
    return { shotId }
  }
  const shot = shots[shotId]

  return {
    shotId,
    shot
  }
}

class ShotDetail extends Component {

  canShowDetail() {
    return this.props.shotId != null;
  }

  render() {
    if (!this.canShowDetail()) return null

    const { shot } = this.props

    return (
      <div className="shot-detail">
        <Title
          shot={shot}
        />
        <div className="main-shot zoomable">
          <ShotImage
            shot={shot}
          />
          <div className="screenshot-info-wrapper">
            <div className="screenshot-conversation">
              <Desc
                shot={shot}
              />
              <Comments />
            </div>
            <div className="screenshot-meta">
              <ShotStats
                shot={shot}
              />
              <RelatedPlayerShots />
              <TagSession
                shot={shot}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(ShotDetail)
