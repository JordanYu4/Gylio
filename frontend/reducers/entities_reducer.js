import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import boardsReducer from './boards_reducer';
import listsReducer from './lists_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  boards: boardsReducer,
  lists: listsReducer
});

export default entitiesReducer;
