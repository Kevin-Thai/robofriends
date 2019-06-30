import * as types from './constants'
import { combineReducers } from 'redux';

const initialStateSearch = {
  searchField: ''
}

export const searchBots = (state = initialStateSearch, action={}) => {
  switch(action.type) {
    case types.CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload };
    default: 
      return state;
  }
}

const initialStateBots ={
  isPending: false,
  robots: [],
  error: ''
}

export const fetchBots = (state = initialStateBots, action={}) => {
  switch(action.type) {
    case types.REQUEST_BOTS_PENDING:
      return { ...state, isPending: true }
    case types.REQUEST_BOTS_SUCCESS:
      return { ...state, robots: action.payload, isPending: false }
    case types.REQUEST_BOTS_FAILED:
      return { ...state, error: action.payload, isPending: false }
    default: 
      return state;
  }
}

export default combineReducers({
  searchBots,
  fetchBots
})