import merge from 'lodash/merge'

import {
  RECEIVE_LIST,
  RECEIVE_LISTS,
  REMOVE_LIST
} from '../actions/list_actions';

const ListsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LISTS:
      return action.lists;
    case RECEIVE_LIST:
      console.log(action);
      const newList = { [action.payload.list.id]: action.payload.list };
      return merge({}, state, newList);
    case REMOVE_LIST:
      let newState = merge({}, state);
      delete newState[action.listId];
      return newState;
    default:
      return state;
  }
};

export default ListsReducer;
