import { CALL_API } from '../middleware/api'
import Schemas from '../schemas/index'

export const COMMENTS_REQUEST = 'COMMENTS_REQUEST'
export const COMMENTS_SUCCESS = 'COMMENTS_SUCCESS'
export const COMMENTS_FAILURE = 'COMMENTS_FAILURE'

const fetchComments = params => {
  return {
    [CALL_API]: {
      types: [ COMMENTS_REQUEST, COMMENTS_SUCCESS, COMMENTS_FAILURE ],
      endpoint: `shots/${params.shotId}/comments`,
      schema: Schemas.COMMENT_ARRAY,
      params: params
    }
  }
}

export const loadComments = shotId => {
  return (dispatch, getState) => {
    return dispatch(fetchComments({ shotId }))
  }
}
