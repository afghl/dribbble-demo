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

const getId = (state, mode = 'next') => {
  const { shotId } = state.pageStyle.detail
  const { ids } = state.pagination.shots
  const { shots } = state.entities
  let id

  if (mode == 'next') {
    id = ids[indexOf(ids, shotId) + 1] || ids[0]
  } else if (mode == 'prev') {
    id = ids[indexOf(ids, shotId) - 1] || ids[ids.length - 1]
  }

  const userId = shots[id].user

  return [id, userId]
}

export const showNext = () => {
  return (dispatch, getState) => {
    const [id, userId] = getId(getState())

    dispatch(
      updateSelected(id, userId)
    ).then(() => {
      dispatch(updateCommentsParams({ id }))
    }).then(() => {
      dispatch(updateRelatedParams({ userId }))
    })
  }
}

export const showPrev = () => {
  return (dispatch, getState) => {
    const [id, userId] = getId(getState(), 'prev')

    dispatch(
      updateSelected(id, userId)
    ).then(() => {
      dispatch(updateCommentsParams({ id }))
    }).then(() => {
      dispatch(updateRelatedParams({ userId }))
    })
  }
}
