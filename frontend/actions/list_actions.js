import * as ListAPIUtil from '../util/list_api_util';

export const RECEIVE_LISTS = 'RECEIVE_LISTS';
export const RECEIVE_LIST = 'RECEIVE_LIST';
export const REMOVE_LIST = 'REMOVE_LIST';
export const RECEIVE_LIST_ERRORS = 'RECEIVE_LIST_ERRORS';

export const fetchLists = () => dispatch => (
  ListAPIUtil.fetchLists().then(lists => (
    dispatch(receiveLists(lists))
  )) // add error handling here
);

export const fetchList = listId => dispatch => (
  ListAPIUtil.fetchList(listId).then(list => (
    dispatch(receiveList(list))
  ))
);

export const createList = list => dispatch => (
  ListAPIUtil.createList(list).then(list => (
    dispatch(receiveList(list))
  )) // add error handling here
);

export const editList = list => dispatch => (
  ListAPIUtil.updateList(list).then(list => (
    dispatch(receiveList(list))
  )) // add error handling here
);

export const deleteList = listId => dispatch => (
  ListAPIUtil.deleteList(listId).then(listId => (
    dispatch(removeList(listId)) // change list to listId?
  ))
);

export const receiveLists = lists => ({
  type: RECEIVE_LISTS,
  lists
});

export const receiveList = list => ({
  type: RECEIVE_LIST,
  list
});

export const removeList = listId => ({
  type: REMOVE_LIST,
  listId
});

export const receiveErrors = errors =>  ({
  type: RECEIVE_LIST_ERRORS,
  errors
});
