import { updateShotsParams } from './shots'

export const UPDATE_LIST_STYLE = 'UPDATE_LIST_STYLE'
export const UPDATE_PAGINATION = 'UPDATE_PAGINATION'

const updateStyle = (style, dispatch) => {
  return (dispatch, getState) => {
    dispatch({
      type: UPDATE_LIST_STYLE,
      listStyle: style
    })

    return Promise.resolve()
  }
}

export const updateListStyle = (style) => {
  return (dispatch, getState) => {
    const prevStyle = getState().pageStyle.list
    const { name, size, withMeta } = style

    dispatch(updateStyle({
      name,
      size,
      withMeta
    }, dispatch))
    .then(() => {
      if (prevStyle.size != style.size) {
        dispatch(updateShotsParams({per_page: style.per}))
      }
    })
  }
}
