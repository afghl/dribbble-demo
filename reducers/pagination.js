import merge from 'lodash/merge'
import union from 'lodash/union'
import { combineReducers } from 'redux'
import * as shotsActions from '../actions/shots'
import * as commentsActions from '../actions/comments'

const comments = (state = {
  page: 1,
  ids: [],
  isFetching: false,
  failTimes: 0
}, action) => {
  switch (action.type) {
    case commentsActions.COMMENTS_REQUEST:
      return merge({}, state, {
        isFetching: true
      })
    case commentsActions.COMMENTS_SUCCESS:
      return merge({}, state, {
        ids: union(state.ids, action.response.result),
        page: state.page + 1,
        isFetching: false
      })
    default:
      return state
  }
}
const shots = (state = {
  params: {
    sort: 'all', list: 'all', timeframe: 'all', per: 10
  },
  page: 1,
  ids: [],
  isFetching: false,
  failTimes: 0
}, action) => {
  switch (action.type) {
    case shotsActions.SHOTS_REQUEST:
      return merge({}, state, {
        isFetching: true
      })
    case shotsActions.SHOTS_SUCCESS:
      return merge({}, state, {
        ids: union(state.ids, action.response.result),
        page: state.page + 1,
        isFetching: false
      })
    case shotsActions.SHOTS_FAILURE:
      const { failTimes } = state

      return merge({}, state, {
        isFetching: false,
        failTimes: failTimes + 1
      })
    case shotsActions.UPDATE_SHOTS_PARAMS:
      return Object.assign({}, state, {
        params: merge({}, state.params, action.params),
        ids: [],
        page: 1,
        isFetching: false
      })
    default:
      return state
  }
}

export default combineReducers({
  shots,
  comments
})
