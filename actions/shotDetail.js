import { updateCommentsParams } from './comments'

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

export const showShotDetail = (shotId) => {
  return (dispatch, getState) => {
    dispatch(
      updateDisplayMode('detail')
    ).then(() => {
      dispatch(updateCommentsParams({shotId}))
    }).then(() => {
      dispatch(updateSelected(shotId))
    })
  }
}
