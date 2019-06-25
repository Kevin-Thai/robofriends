import * as types from './constants'

export const setSearchField = (text) => ({
  type: types.CHANGE_SEARCH_FIELD,
  payload: text
})