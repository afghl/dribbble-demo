import merge from 'lodash/merge'
import union from 'lodash/union'
import { combineReducers } from 'redux'
import * as ActionTypes from '../actions'
import * as categoryActions from '../actions/category'
import * as styleActions from '../actions/listStyle'
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
  categories: {
    sort: 'all', list: 'all', timeframe: 'all'
  },
  page: 1,
  per: 10,
  ids: [],
  isFetching: false,
  failTimes: 0
}, action) => {
  switch (action.type) {
    case ActionTypes.SHOTS_REQUEST:
      return merge({}, state, {
        isFetching: true
      })
    case ActionTypes.SHOTS_SUCCESS:
      return merge({}, state, {
        ids: union(state.ids, action.response.result),
        page: state.page + 1,
        isFetching: false
      })
    case ActionTypes.SHOTS_FAILURE:
      const { failTimes } = state

      return merge({}, state, {
        isFetching: false,
        failTimes: failTimes + 1
      })
    case categoryActions.UPDATE_CATEGORY:
      const { categories } = state
      const { type, key } = action.category
      const newCate = merge({}, categories, { [type]: key })
      return Object.assign({}, state, {
        categories: newCate,
        ids: [],
        page: 1,
        isFetching: false
      })
    case styleActions.UPDATE_PAGINATION:
      return Object.assign({}, state, {
        per: action.per,
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
