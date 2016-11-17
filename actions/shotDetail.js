import { updateCommentsParams } from './comments'
import { updateRelatedParams } from './relatedShots'
import { indexOf } from 'lodash'

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

const updateSelected = (shotId, userId) => {
  return (dispatch, getState) => {
    dispatch({
      type: UPDATE_SELECTED,
      shotId,
      userId
    })

    return Promise.resolve()
  }
}

export const showShotDetail = (shotId, userId) => {
  return (dispatch, getState) => {
    dispatch(
      updateDisplayMode('detail')
    ).then(() => {
      dispatch(updateSelected(shotId, userId))
    }).then(() => {
      dispatch(updateCommentsParams({shotId}))
    }).then(() => {
      dispatch(updateRelatedParams({userId}))
    })
  }
}

// const getId = (state, mode = 'next') => {
//
// }

export const showNext = () => {
  return (dispatch, getState) => {
    const state = getState()
    const { shotId } = state.pageStyle.detail
    const { ids } = state.pagination.shots
    const nextShotId = ids[indexOf(ids, shotId) + 1] || ids[0]
    const nextShot = state.entities.shots[nextShotId]
    const userId = nextShot.user
    
    dispatch(
      updateSelected(nextShotId, userId)
    ).then(() => {
      dispatch(updateCommentsParams({ nextShotId }))
    }).then(() => {
      dispatch(updateRelatedParams({ userId }))
    })
  }
}

export const showPrev = () => {
  return (dispatch, getState) => {
    const state = getState()
    const { shotId } = state.pageStyle.detail
    const { ids } = state.pagination.shots
    const prevShotId = ids[indexOf(ids, shotId) - 1] || ids[ids.length - 1]
    const prevShot = state.entities.shots[prevShotId]
    const userId = prevShot.user

    dispatch(
      updateSelected(prevShotId, userId)
    ).then(() => {
      dispatch(updateCommentsParams({ prevShotId }))
    }).then(() => {
      dispatch(updateRelatedParams({ userId }))
    })
  }
}
