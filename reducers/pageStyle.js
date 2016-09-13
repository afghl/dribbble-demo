import * as ActionType from '../actions/listStyle'
import merge from 'lodash/merge'
import * as shotDetailActions from '../actions/shotDetail'
import * as categoryActions from '../actions/category'
import { combineReducers } from 'redux'

const category = (state = {
  sort: 'all',
  list: 'all',
  timeframe: 'all'
}, action) => {
  if (action.type != categoryActions.UPDATE_CATEGORY) return state
  const { categories } = state
  const { type, key } = action.category
  return Object.assign({}, state, merge({}, categories, { [type]: key }))
}

const style = (state = {
  size: 'large',
  withMeta: true
}, action) => {
  if (action.type == ActionType.UPDATE_LIST_STYLE) {
    return action.listStyle
  } else {
    return state
  }
}

const detail = (state = {
  shotId: undefined
}, action) => {
  if (action.type == shotDetailActions.UPDATE_SELECTED) {
    const { shotId } = action
    return { shotId }
  }
  return state
}

const current = (state = 'list', action) => {
  if (action.type == shotDetailActions.UPDATE_DISPLAY_MODE) {
    return action.mode
  } else {
    return state
  }
}

export default combineReducers({
  list: combineReducers({
    style,
    category
  }),
  detail,
  current
})
