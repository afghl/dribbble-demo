import * as ActionType from '../actions/listStyle'
import merge from 'lodash/merge'

// Updates an entity cache in response to any action with response.entities.
export default function listStyle(state = {
  size: 'large',
  withMeta: true
}, action) {
  if (action.type == ActionType.UPDATE_LIST_STYLE) {
    return action.listStyle
  } else {
    return state
  }
}
