import { CALL_API } from '../middleware/api'
import Schemas from '../schemas/index'
import merge from 'lodash/merge'
import random from 'lodash/random'

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

const randomPage = (total, per) => {
  let page = Math.floor(total / per)
  page = page < 1 ? 1 : page
  return random(1, page)
}

export const loadRelated = userId => {
  return (dispatch, getState) => {
    const {
      pagination: { related: { params } },
      entities: { users }
    } = getState()
    const user = users[userId]
    const page = randomPage(user.shotsCount, params.per_page)
    return dispatch(fetchRelated(merge({ userId, page }, params)))
  }
}


export const updateRelatedParams = params => {
  return (dispatch, getState) => {
    dispatch({
      type: UPDATE_RELATED_PARAMS,
      params})
  }
}
