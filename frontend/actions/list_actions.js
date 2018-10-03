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

export const fetchListsForBoard = boardId => dispatch => (
  ListAPIUtil.fetchListsForBoard(boardId).then(lists => (
    dispatch(receiveLists(lists))
  )) 
);

export const fetchList = (boardId, listId) => dispatch => (
  ListAPIUtil.fetchList(boardId, listId).then(payload => (
    dispatch(receiveList(payload))
  ))
);

export const createList = list => dispatch => (
  ListAPIUtil.createList(list).then(payload => (
    dispatch(receiveList(payload))
  )), errors => (
    dispatch(receiveErrors(errors.responseJSON)
  )) 
);

export const editList = list => dispatch => (
  ListAPIUtil.updateList(list).then(payload => (
    dispatch(receiveList(payload))
  )) // add error handling here
);

export const deleteList = listId => dispatch => (
  ListAPIUtil.deleteList(listId).then(listId => (
    dispatch(removeList(listId)) 
  ))
);

export const receiveLists = lists => ({
  type: RECEIVE_LISTS,
  lists
});

export const receiveList = payload => ({
  type: RECEIVE_LIST,
  payload
});

export const removeList = listId => ({
  type: REMOVE_LIST,
  listId
});

export const receiveErrors = errors =>  ({
  type: RECEIVE_LIST_ERRORS,
  errors
});
