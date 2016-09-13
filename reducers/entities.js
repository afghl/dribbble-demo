import merge from 'lodash/merge'
import values from 'lodash/values'

// Updates an entity cache in response to any action with response.entities.
export default function shots(state = { shots: {} }, action) {
  if (action.response && action.response.entities) {
    return merge({}, state, action.response.entities)
  }

  return state
}
