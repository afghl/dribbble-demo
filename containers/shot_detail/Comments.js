import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadComments } from '../../actions/comments'
import * as status from '../../reducers/paginate'
import List from '../../components/List'
import merge from 'lodash/merge'

const mapStateToProps = (state, ownProps) => {
  const {
    entities: { shots, users, comments },
    pagination: {
      comments: { params: { shotId }, fetchStatus, ids, failTimes }
    }
  } = state
  const shot = shots[shotId]
  const commentsList = ids.map(id => comments[id])
                          .map(comment => merge(comment, { user: users[comment.user] }))

  return {
    shot,
    comments: commentsList,
    fetchStatus
  }
}

class ShotDetailComments extends Component {

  shouldFetchComment(props) {
    return !!props.shot && props.fetchStatus == status.PENDING
  }

  componentWillMount() {
    if (this.shouldFetchComment(this.props)) {
      this.props.loadComments(this.props.shot.id)
    }
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
          <span className="url hoverable" rel="contact">
            <img className="photo" src={user.avatarUrl}/>
            {user.name}
          </span>
        </h2>
        <div className="comment-body" dangerouslySetInnerHTML={{__html: comment.body}}></div>
        <span className="comment-meta-likes">
          <span className="likes-list">{comment.likesCount}     likes</span>
        </span>
        <p className="comment-meta">
          <span className="posted">about 12 hours ago</span>
        </p>
      </li>
    )
  }

  render() {
    const { props: { comments }, renderComment } = this

    return (
      <div id="comments-section">
        <h2 className="count section ">
          {comments.length} Responses
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
