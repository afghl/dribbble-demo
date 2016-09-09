import * as shotDetailActions from '../actions/shotDetail'

export default function selected(state = {
  shotId: null
}, action) {
  if (action.type == shotDetailActions.UPDATE_SELECTED) {
    const { shotId } = action
    return { shotId }
  }

  return state
}
