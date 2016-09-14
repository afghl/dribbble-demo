import { CALL_API } from '../middleware/api'
import Schemas from '../schemas/index'
import merge from 'lodash/merge'

export const SHOTS_REQUEST = 'SHOTS_REQUEST'
export const SHOTS_SUCCESS = 'SHOTS_SUCCESS'
export const SHOTS_FAILURE = 'SHOTS_FAILURE'
export const UPDATE_SHOTS_PARAMS = 'UPDATE_SHOTS_PARAMS'

// Relies on the custom API middleware defined in ../middleware/api.js.
function fetchShots(params) {
  return {
    [CALL_API]: {
      types: [ SHOTS_REQUEST, SHOTS_SUCCESS, SHOTS_FAILURE ],
      endpoint: 'shots',
      schema: Schemas.SHOT_ARRAY,
      params: params
    }
  }
}

export function loadShots() {

  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.

  return (dispatch, getState) => {
    const { page, params } = getState().pagination.shots

    return dispatch(fetchShots(merge({ page }, params)))
  }
}

export const updateShotsParams = (params) => {
  return (dispatch, getState) => {
    dispatch({
      type: UPDATE_SHOTS_PARAMS,
      params
    })
  }
}
