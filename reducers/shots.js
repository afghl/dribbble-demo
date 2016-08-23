import merge from 'lodash/merge'
import values from 'lodash/values'

// Updates an entity cache in response to any action with response.entities.
function shots(state = [], action) {
  if (action.response && action.response.entities) {
    // TODO: better way to handle pagination
    const shots = values(action.response.entities.shots)
    return shots
  }
  return state
}

export default shots
