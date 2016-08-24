import merge from 'lodash/merge'
import values from 'lodash/values'

// Updates an entity cache in response to any action with response.entities.
function shots(state = {}, action) {
  if (action.response && action.response.entities) {
    const shots = action.response.entities.shots

    return merge({}, state, shots)
  }
  return state
}

export default shots
