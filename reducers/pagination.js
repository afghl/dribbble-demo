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


//
// const comments = (state = {
//   params: { shotId: undefined },
//   page: 1,
//   ids: [],
//   isFetching: false,
//   failTimes: 0
// }, action) => {
//   switch (action.type) {
//     case commentsActions.COMMENTS_REQUEST:
//       return merge({}, state, {
//         isFetching: true
//       })
//     case commentsActions.COMMENTS_SUCCESS:
//       return merge({}, state, {
//         ids: union(state.ids, action.response.result),
//         page: state.page + 1,
//         isFetching: false
//       })
//     case commentsActions.COMMENTS_FAILURE:
//       return merge({}, state, {
//         isFetching: false,
//         failTimes: state.failTimes + 1
//       })
//     case commentsActions.UPDATE_COMMENTS_PARAMS:
//       // TODO: fetch ids if cached
//       return Object.assign({}, state, {
//         params: merge({}, state.params, action.params),
//         ids: [],
//         page: 1,
//         isFetching: false
//       })
//     default:
//       return state
//   }
// }
// const shots = (state = {
//   params: {
//     sort: 'all', list: 'all', timeframe: 'all', per: 10
//   },
//   page: 1,
//   ids: [],
//   isFetching: false,
//   failTimes: 0
// }, action) => {
//   switch (action.type) {
//     case shotsActions.SHOTS_REQUEST:
//       return merge({}, state, {
//         isFetching: true
//       })
//     case shotsActions.SHOTS_SUCCESS:
//       return merge({}, state, {
//         ids: union(state.ids, action.response.result),
//         page: state.page + 1,
//         isFetching: false
//       })
//     case shotsActions.SHOTS_FAILURE:
//       return merge({}, state, {
//         isFetching: false,
//         failTimes: state.failTimes + 1
//       })
//     case shotsActions.UPDATE_SHOTS_PARAMS:
//       return Object.assign({}, state, {
//         params: merge({}, state.params, action.params),
//         ids: [],
//         page: 1,
//         isFetching: false
//       })
//     default:
//       return state
//   }
// }
