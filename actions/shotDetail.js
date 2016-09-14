import { updateCommentsParams } from './comments'
import { updateRelatedParams } from './relatedShots'

export const UPDATE_DISPLAY_MODE = 'UPDATE_DISPLAY_MODE'
export const UPDATE_SELECTED = 'UPDATE_SELECTED'

export const updateDisplayMode = (mode) => {
  return (dispatch, getState) => {
    dispatch({
      type: UPDATE_DISPLAY_MODE,
      mode
    })

    return Promise.resolve()
  }
}

const updateSelected = (shotId) => {
  return (dispatch, getState) => {
    dispatch({
      type: UPDATE_SELECTED,
      shotId
    })

    return Promise.resolve()
  }
}

export const showShotDetail = (shotId, userId) => {
  return (dispatch, getState) => {
    dispatch(
      updateDisplayMode('detail')
    ).then(() => {
      dispatch(updateSelected(shotId))
    }).then(() => {
      dispatch(updateCommentsParams({shotId}))
    }).then(() => {
      dispatch(updateRelatedParams({userId}))
    })
  }
}
