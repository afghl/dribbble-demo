import merge from 'lodash/merge'
import union from 'lodash/union'

// Creates a reducer managing pagination, given the action types to handle,
// and a function telling how to extract the key from an action.
export default ({ types, defaultParams }) => {
  // if (!Array.isArray(types) || types.length !== 3) {
  //   throw new Error('Expected types to be an array of three elements.')
  // }
  if (!types.every(t => typeof t === 'string')) {
    throw new Error('Expected types to be strings.')
  }

  const [ requestType, successType, failureType, updateParams ] = types

  return (state = {
    params: defaultParams,
    page: 1,
    ids: [],
    isFetching: false,
    failTimes: 0
  }, action) => {
    switch (action.type) {
      case requestType:
        return merge({}, state, {
          isFetching: true
        })
      case successType:
        return merge({}, state, {
          ids: union(state.ids, action.response.result),
          page: state.page + 1,
          isFetching: false
        })
      case failureType:
        return merge({}, state, {
          isFetching: false,
          failTimes: state.failTimes + 1
        })
      case updateParams:
        return Object.assign({}, state, {
          params: merge({}, state.params, action.params),
          ids: [],
          page: 1,
          isFetching: false
        })
      default:
        return state
    }
  }
}
