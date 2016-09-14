import merge from 'lodash/merge'
import union from 'lodash/union'

export const PENDING = 'PENDING'
export const FETCHING = 'FETCHING'
export const FETCHED = 'FETCHED'

// Creates a reducer managing pagination, given the action types to handle,
// and a function telling how to extract the key from an action.
export default ({ types, defaultParams, more }) => {
  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected types to be an array of three elements.')
  }
  if (!types.every(t => typeof t === 'string')) {
    throw new Error('Expected types to be strings.')
  }

  const [ requestType, successType, failureType] = types

  const handleMore = (state, action, more) => {
    const handler = more[action.type]
    if (!handler) {
      return state
    }

    return handler(state, action)
  }

  return (state = {
    params: defaultParams,
    page: 1,
    ids: [],
    fetchStatus: PENDING,
    failTimes: 0
  }, action) => {
    switch (action.type) {
      case requestType:
        return merge({}, state, {
          fetchStatus: FETCHING
        })
      case successType:
        return merge({}, state, {
          ids: union(state.ids, action.response.result),
          page: state.page + 1,
          fetchStatus: FETCHED
        })
      case failureType:
        return merge({}, state, {
          fetchStatus: FETCHED,
          failTimes: state.failTimes + 1
        })
      default:
        return handleMore(state, action, more)
    }
  }
}
