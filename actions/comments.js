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

  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.

  return (dispatch, getState) => {
    return dispatch(fetchComments({ shotId }))
  }
}
