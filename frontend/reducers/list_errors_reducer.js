import {
  RECEIVE_LIST_ERRORS
} from "../actions/list_actions";
import {
  CLEAR_ERRORS
} from "../actions/session_actions";

const listErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LIST_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};

export default listErrorsReducer;
