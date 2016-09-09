import * as ActionType from '../actions/shotDetail'

export default function listStyle(state = 'list', action) {
  if (action.type == ActionType.UPDATE_DISPLAY_MODE) {
    return action.mode
  } else {
    return state
  }
}
