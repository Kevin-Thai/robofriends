import * as types from './constants'

export const setSearchField = (text) => ({
  type: types.CHANGE_SEARCH_FIELD,
  payload: text
})

export const requestBots = (dispatch) => {
  dispatch({ type: types.REQUEST_BOTS_PENDING });
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users=> dispatch({ 
      type: types.REQUEST_BOTS_SUCCESS, 
      payload: users}))
    .catch(err => dispatch({
      type: types.REQUEST_BOTS_FAILED,
      payload: err
    }))
}