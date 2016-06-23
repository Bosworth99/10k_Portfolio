import { browserHistory } from 'react-router';

//  ACTION_CONST
// - could split these into their own file
export const REQUEST_ITEMS = 'REQUEST_ITEMS';
export const RECEIVED_ITEMS = 'RECEIVED_ITEMS';
export const SELECT_ITEM = 'SELECT_ITEM';

// ACTION  /////////////////////////////////////////////////////////////////////

// TODO - not sure if its better to expose methods that wrap action object creators
// - or are they consumed outside this class as well?

// useful for a loader screen, for example
function _requestItems() {
  // console.log('WorkActions::_requestItems');
  return {
    type: REQUEST_ITEMS
  };
}

// action to emit when json data has been recieved
function _receivedItems(items) {
  // console.log('WorkActions::_receivedItems %o', items);
  return {
    type: RECEIVED_ITEMS,
    items,
  };
}

function _selectItem(itemId) {
  // console.log('WorkActions::_selectItem %s', itemId);
  return {
    type: SELECT_ITEM,
    itemId
  };
}

// THUNK METHODS////////////////////////////////////////////////////////////////

// async action made available via redux-thunk as middleware
export function fetchItems(req) {
  console.log('WorkActions::fetchItems');
  return dispatch => {
    // let anyone whos listening know we are performing an async
    dispatch(_requestItems(req));

    // perform the async operation
    return fetch('/api/portfolio', { method: 'GET' })
      .then(response => response.json())
      .then(json => dispatch(_receivedItems(json)));
  };
}

export function selectItem(itemId) {
  console.log('WorkActions::selectItem %s', itemId);
  return dispatch => {
      // we already have the item data, just need somethign to filter on
      // @WorkReducers
      dispatch(_selectItem(itemId));
      // navigate to /work/item
      browserHistory.push(`/work/${itemId}`);
      return true;
  };
}
