import * as types from './constants'

const initialState = {
  searchField: ''
}

export const searchBots = (state = initialState, action={}) => {
  switch(action.type) {
    case types.CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload };
    default: return state;
  }
}