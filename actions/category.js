export const UPDATE_CATEGORY = 'UPDATE_CATEGORY'

export const updateCategory = (type, key) => (dispatch, getState) => () => {
  dispatch({
    type: UPDATE_CATEGORY,
    category: {
      type, key
    }
  })
}
