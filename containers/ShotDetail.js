import React, { Component } from 'react'
import { connect } from 'react-redux'
import Title from './shot_detail/Title'
import Comments from './shot_detail/Comments'
import Desc from './shot_detail/Desc'
import RelatedPlayerShots from './shot_detail/RelatedPlayerShots'
import ShotImage from './shot_detail/ShotImage'
import ShotStats from './shot_detail/ShotStats'
import TagSession from './shot_detail/TagSession'

class ShotDetail extends Component {
  render() {
    return (
      <div className="shot-detail">
        <Title />
        <div className="main-shot zoomable">
          <ShotImage />
          <div className="screenshot-info-wrapper">
            <div className="screenshot-conversation">
              <Desc />
              <Comments />
            </div>
            <div className="screenshot-meta">
              <ShotStats />
              <RelatedPlayerShots />
              <TagSession />
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default connect()(ShotDetail)
