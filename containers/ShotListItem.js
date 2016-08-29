import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return { listStyle: state.listStyle }
}

class ShotListItem extends Component {
  shouldShowExtra() {
    const { listStyle } = this.props

    return listStyle == "large-with-meta"
  }

  renderExtra() {
    if (!this.shouldShowExtra())
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
    if (!this.shouldShowExtra())
      return

    const { user: { avatarUrl, name } } = this.props.shot

    return (
      <h2 className="attribution">
        <span className="avater"><img src={avatarUrl}/></span>
        {name}
      </h2>
    )
  }

  render() {
    const { images } = this.props.shot

    return (
      <li className="shot-item">
        <div className="shot-card">
          <div className="shot-image">
            <img src={images.normal}/>
          </div>
          {this.renderExtra()}
        </div>
          {this.renderAttribution()}
      </li>
    );
  }
}

export default connect(
  mapStateToProps
)(ShotListItem)
