export const UPDATE_DISPLAY_MODE = 'UPDATE_DISPLAY_MODE'
export const UPDATE_CURRENT_SHOT_ID = 'UPDATE_CURRENT_SHOT_ID'

export const updateDisplayMode = (mode) => {
  return (dispatch, getState) => {
    dispatch({
      type: UPDATE_DISPLAY_MODE,
      mode
    })

    return Promise.resolve()
  }
}

const updateCurrentShotId = (shotId) => {
  return {
    type: UPDATE_CURRENT_SHOT_ID,
    shotId
  }
}

export const showShotDetail = (shotId) => {
  return (dispatch, getState) => {
    dispatch(
      updateDisplayMode('detail')
    ).then(() => {
      dispatch(updateCurrentShotId(shotId))
    })
  }
}
