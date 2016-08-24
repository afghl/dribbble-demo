import merge from 'lodash/merge'
import union from 'lodash/union'
import { combineReducers } from 'redux'
import * as ActionTypes from '../actions'
// const defaultCategory = [
//   {
//     sort: [
//       { name: 'Popular', key: 'all'},
//       { name: 'Recent', key: 'recent'},
//       { name: 'Most Viewed', key: 'views'},
//       { name: 'Most Commented', key: 'comments'}
//     ]
//   },
//   {
//     list: [
//       { name: 'Shots', key: 'all'},
//       { name: 'Debuts', key: 'debuts'},
//       { name: 'Team Shots', key: 'teams'},
//       { name: 'Playoffs', key: 'playoffs'},
//       { name: 'Rebounds', key: 'rebounds'},
//       { name: 'Animated GIFs', key: 'animated'},
//       { name: 'Shots with Attachments', key: 'attachments'}
//     ]
//   },
//   {
//     timeframe: [
//       { name: 'Now', key: 'all'},
//       { name: 'This Past Week', key: 'week'},
//       { name: 'This Past Month', key: 'month'},
//       { name: 'This Past Year', key: 'year'},
//       { name: 'All Time', key: 'ever'}
//     ]
//   }
// ]

const pagination = (state = {
  categories: {
    sort: 'all', list: 'all', timeframe: 'all'
  },
  page: 1,
  ids: []
}, action) => {
  switch (action.type) {
    case ActionTypes.SHOTS_SUCCESS:
      return merge({}, state, {
        ids: union(state.ids, action.response.result),
        page: state.page + 1
      })
    default:
      return state
  }
}

export default pagination
