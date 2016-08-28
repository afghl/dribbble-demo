export const UPDATE_CATEGORY = 'UPDATE_CATEGORY'

export const updateCategory = (type, key) => {
  return (dispatch, getState) => {
    dispatch({
      type: UPDATE_CATEGORY,
      category: {
        type, key
      }
    })
  }
}
