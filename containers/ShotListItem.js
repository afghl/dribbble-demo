import React, { Component, PropTypes } from 'react'
import { updateDisplayMode } from '../actions/displayMode'
import { connect } from 'react-redux'


const mapStateToProps = (state) => {
  const { listStyle } = state
  return { listStyle }
}

class ShotListItem extends Component {
  shouldShowMeta() {
    const { listStyle: { withMeta } } = this.props

    return withMeta
  }

  renderExtra() {
    if (!this.shouldShowMeta())
      return

    const { viewsCount, likesCount, commentsCount } = this.props.shot

    return (
      <ul className="shot-extra">
        <li className="likes-count">{likesCount}</li>
        <li className="view-count">{viewsCount}</li>
        <li className="comments-count">{commentsCount}</li>
      </ul>
    )
  }
  renderAttribution() {
    if (!this.shouldShowMeta())
      return

    const { user: { avatarUrl, name } } = this.props.shot

    return (
      <h2 className="attribution">
        <span className="avater"><img src={avatarUrl}/></span>
        {name}
      </h2>
    )
  }

  renderOver() {
    const { shot: { title, description } } = this.props
    return (
      <div className="shot-over" href="javascript:;">
        <strong>{title}</strong>
        <span className="comment" dangerouslySetInnerHTML={{__html: description}}></span>
        <em className="timestamp">about 7 hours ago</em>
      </div>
    )
  }

  showDetail() {
    const { updateDisplayMode } = this.props
    updateDisplayMode('detail')
  }

  render() {
    const { images } = this.props.shot

    return (
      <li className="shot-item">
        <div
          className="shot-card"
          onClick={this.showDetail.bind(this)}
          >
          <div className="shot-image">
            <img src={images.normal}/>
            {this.renderOver()}
          </div>
          {this.renderExtra()}
        </div>
          {this.renderAttribution()}
      </li>
    );
  }
}

export default connect(
  mapStateToProps,
  { updateDisplayMode }
)(ShotListItem)
