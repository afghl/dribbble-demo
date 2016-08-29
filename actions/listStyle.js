export const UPDATE_LIST_STYLE = 'UPDATE_LIST_STYLE'

const updateStyle = (style, dispatch) => {
  return (dispatch, getState) => {
    dispatch({
      type: UPDATE_LIST_STYLE,
      listStyle: style
    })

    return Promise.resolve()
  }
}

export const updateListStyle = (styleType) => {
  return (dispatch, getState) => {
    dispatch(updateStyle(styleType, dispatch))
      .then(() => {console.log('updateStyle');})
  }
}
