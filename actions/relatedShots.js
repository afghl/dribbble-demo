import { CALL_API } from '../middleware/api'
import Schemas from '../schemas/index'
import merge from 'lodash/merge'

export const RELATED_REQUEST = 'RELATED_REQUEST'
export const RELATED_SUCCESS = 'RELATED_SUCCESS'
export const RELATED_FAILURE = 'RELATED_FAILURE'
export const UPDATE_RELATED_PARAMS = 'UPDATE_RELATED_PARAMS'

const fetchRelated = params => {
  return {
    [CALL_API]: {
      types: [ RELATED_REQUEST, RELATED_SUCCESS, RELATED_FAILURE ],
      endpoint: `users/${params.userId}/shots`,
      schema: Schemas.SHOT_ARRAY,
      params: params
    }
  }
}

export const loadRelated = userId => {
  return (dispatch, getState) => {
    // TODO: get userId from state
    const { params } = getState().pagination.related
    return dispatch(fetchRelated(merge({ userId }, params)))
  }
}


export const updateRelatedParams = params => {
  return (dispatch, getState) => {
    dispatch({
      type: UPDATE_RELATED_PARAMS,
      params})
  }
}
