import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadComments } from '../../actions/comments'
import List from '../../components/List'
import merge from 'lodash/merge'

const mapStateToProps = (state, ownProps) => {
  const {
    entities: { shots, users, comments },
    pagination: {
      comments: { params: { shotId }, isFetching, ids, failTimes }
    }
  } = state
  const shot = shots[shotId]
  const commentsList = ids.map(id => comments[id])
                          .map(comment => merge(comment, { user: users[comment.user] }))

  return {
    shot,
    comments: commentsList,
    isFetching
  }
}

class ShotDetailComments extends Component {

  shouldFetchComment(props) {
    return !props.shot.comments && !props.isFetching
  }

  componentWillMount() {
    this.props.loadComments(this.props.shot.id)
  }

  componentWillReceiveProps(nextProps) {
    if (this.shouldFetchComment(nextProps)) {
      this.props.loadComments(nextProps.shot.id)
    }
  }

  renderComment(comment) {
    const { user } = comment

    return (
      <li className="response comment group ">
        <h2>
          <a className="url hoverable" rel="contact" href="/kalee">
            <img className="photo" src={user.avatarUrl}/>
            {user.name}
          </a>
        </h2>
        <div className="comment-body" dangerouslySetInnerHTML={{__html: comment.body}}></div>
        <span className="comment-meta-likes">
          <a className="likes-list" href="javascript:;">{comment.likesCount}</a><span className="hide">likes</span>
        </span>
        <p className="comment-meta">
        <a href="#comment-5558831" className="posted">about 12 hours ago</a>
          <span className="sep">|</span>
            <a className="likes" href="javascript:;">Like?</a>
        </p>
      </li>
    )
  }

  render() {
    const { props: { comments }, renderComment } = this

    return (
      <div id="comments-section">
        <h2 className="count section ">
          7 Responses
        </h2>
        <div className="comments-sort">
            <a className="oldest selected" href="javascript:;">oldest</a>
            <a className="newest " href="javascript:;">newest</a>
            <a className="liked " href="javascript:;">liked</a>
        </div>
        <List
          className="comments"
          items={comments}
          renderItem={renderComment}
        />
      </div>
    )
  }
}

export default connect(mapStateToProps, {
  loadComments
})(ShotDetailComments)
