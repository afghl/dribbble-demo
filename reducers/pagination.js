import merge from 'lodash/merge'
import union from 'lodash/union'
import { combineReducers } from 'redux'
import paginate from './paginate'
import * as shotsActions from '../actions/shots'
import * as commentsActions from '../actions/comments'

const handleShotsParamsUpdate = (state, action) => {
  return Object.assign({}, state, {
    params: merge({}, state.params, action.params),
    ids: [],
    page: 1,
    isFetching: false
  })
}

const handleCommentsParamsUpdate = (state, action) => {
  return Object.assign({}, state, {
    params: merge({}, state.params, action.params),
    ids: [],
    page: 1,
    isFetching: false
  })
}

export default combineReducers({
  shots: paginate({
    types: [
      shotsActions.SHOTS_REQUEST,
      shotsActions.SHOTS_SUCCESS,
      shotsActions.SHOTS_FAILURE,
    ],
    defaultParams: {
      sort: 'all', list: 'all', timeframe: 'all', per: 10
    },
    more: {
      [shotsActions.UPDATE_SHOTS_PARAMS]: handleShotsParamsUpdate
    }
  }),
  comments: paginate({
    types: [
      commentsActions.COMMENTS_REQUEST,
      commentsActions.COMMENTS_SUCCESS,
      commentsActions.COMMENTS_FAILURE,
    ],
    defaultParams: { shotId: undefined },
    more: {
      [commentsActions.UPDATE_COMMENTS_PARAMS]: handleCommentsParamsUpdate
    }
  })
})
