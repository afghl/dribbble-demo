import merge from 'lodash/merge'
import union from 'lodash/union'
import { combineReducers } from 'redux'
import paginate from './paginate'
import * as shotsActions from '../actions/shots'
import * as commentsActions from '../actions/comments'
import * as relatedActions from '../actions/relatedShots'
import * as status from './paginate'

const defaultHandle = (state, action) => {
  return Object.assign({}, state, {
    params: merge({}, state.params, action.params),
    ids: [],
    page: 1,
    fetchStatus: status.PENDING
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
      sort: 'all', list: 'all', timeframe: 'all', per_page: 12
    },
    more: {
      [shotsActions.UPDATE_SHOTS_PARAMS]: defaultHandle
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
      [commentsActions.UPDATE_COMMENTS_PARAMS]: defaultHandle
    }
  }),
  related: paginate({
    types: [
      relatedActions.RELATED_REQUEST,
      relatedActions.RELATED_SUCCESS,
      relatedActions.RELATED_FAILURE,
    ],
    defaultParams: { userId: undefined, per_page: 4, sort: 'oldest' },
    more: {
      [relatedActions.UPDATE_RELATED_PARAMS]: defaultHandle
    }
  })
})
