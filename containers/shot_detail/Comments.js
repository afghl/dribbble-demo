import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadComments, updateCommentsParams } from '../../actions/comments'
import * as status from '../../reducers/paginate'
import List from '../../components/List'
import merge from 'lodash/merge'
import moment from 'moment'

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

  constructor(props) {
    super(props)
    this.state = this.getState()
  }

  getState() {
    return { selectedSort: 'oldest' }
  }

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
    const { user, createdAt } = comment
    const time = moment(createdAt).fromNow()
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
          <span className="posted">{time}</span>
        </p>
      </li>
    )
  }

  render() {
    const {
      props: { comments },
      renderComment,
      updateComments
    } = this
    const { selectedSort } = this.state

    const renderSort = (sort) => (
      <a href="javascript:;"
        className={selectedSort == sort ? "selected" : ""}
        onClick={this.updateComments(sort)}>{sort}</a>
    )

    return (
      <div id="comments-section">
        <h2 className="count section ">
          {comments.length} Responses
        </h2>
        <List
          className="comments-sort"
          items={['oldest', 'newest', 'liked']}
          renderItem={renderSort}
        />
        <List
          className="comments"
          items={comments}
          renderItem={renderComment}
        />
      </div>
    )
  }

  updateComments(sort) {
    const { updateCommentsParams } = this.props
    return () => {
      this.setState({selectedSort: sort})
      updateCommentsParams({sort})
    }
  }
}

export default connect(mapStateToProps, {
  loadComments,
  updateCommentsParams
})(ShotDetailComments)
