import * as ActionType from '../actions/listStyle'
import merge from 'lodash/merge'
import * as shotDetailActions from '../actions/shotDetail'
import { combineReducers } from 'redux'

const list = (state = {
  size: 'large',
  withMeta: true
}, action) => {
  if (action.type == ActionType.UPDATE_LIST_STYLE) {
    return action.listStyle
  } else {
    return state
  }
}

const emptyDetail = {
  shotId: undefined,
  userId: undefined
}

const detail = (state = emptyDetail, action) => {
  if (action.type == shotDetailActions.UPDATE_SELECTED) {
    const { shotId, userId } = action
    return { shotId, userId }
  } else if (action.type == shotDetailActions.UPDATE_DISPLAY_MODE) {
    // clear shotId when update display mode
    return emptyDetail
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
  list,
  detail,
  current
})
