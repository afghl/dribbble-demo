export const UPDATE_LIST_STYLE = 'UPDATE_LIST_STYLE'

export const updateListStyle = (styleType) => {
  return (dispatch, getState) => {
    dispatch({
      type: UPDATE_LIST_STYLE,
      listStyle: styleType
    })
  }
}
