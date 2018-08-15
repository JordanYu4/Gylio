import * as ListAPIUtil from '../util/list_api_util';

export const RECEIVE_LISTS = 'RECEIVE_LISTS';
export const RECEIVE_LIST = 'RECEIVE_LIST';
export const RECEIVE_LIST_ERRORS = 'RECEIVE_LIST_ERRORS';

export const receiveLists = lists => ({
  type: RECEIVE_LISTS,
  lists
});

export const receiveList = list => ({
  type: RECEIVE_LIST,
  list
});

export const receiveErrors = errors =>  ({
  type: RECEIVE_LIST_ERRORS,
  errors
});

export const createList = list => dispatch => (
  ListAPIUtil.createList(list).then(list => (
    dispatch(receiveList(list)),
  )
  // , error => (
  //   dispatch(receiveErrors(error.responseJSON))
  // )
  )
);

export const fetchLists = () => dispatch => (
  ListAPIUtil.fetchLists().then(lists => (
    dispatch(receiveLists(lists)),
  )
  // , error => (
  //   dispatch(receiveErrors(error.responseJSON))
  // )
  )
);
