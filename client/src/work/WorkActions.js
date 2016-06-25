import { browserHistory } from 'react-router';

//  ACTION_CONST
// - could split these into their own file
export const REQUEST_ITEMS = 'REQUEST_ITEMS';
export const RECEIVED_ITEMS = 'RECEIVED_ITEMS';
export const SELECT_ITEM = 'SELECT_ITEM';
export const REQUEST_IMAGES = 'REQUEST_IMAGES';
export const RECEIVED_IMAGES = 'RECEIVED_IMAGES';

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

function _requestImages() {
  //  console.log('WorkActions::_requestImages');
  return {
    type: REQUEST_IMAGES
  };
}

function _receivedImages(images) {
  //  console.log('WorkActions::_receivedImages %o', images);
  return {
    type: RECEIVED_IMAGES,
    images,
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
export function fetchItems() {
  // console.log('WorkActions::fetchItems');
  return dispatch => {
    // let anyone whos listening know we are performing an async
    dispatch(_requestItems());

    // perform the async operation
    return fetch('/api/portfolio.json', { method: 'GET' })
      .then(response => response.json())
      .then(json => dispatch(_receivedItems(json)));
  };
}

// pick image json
export function fetchImages() {
  // console.log('WorkActions::fetchImages');
  return dispatch => {
    dispatch(_requestImages());
    return fetch('/api/images.json', { method: 'GET' })
      .then(response => response.json())
      .then(json => dispatch(_receivedImages(json)));
  };
}

export function selectItem(itemId) {
  // console.log('WorkActions::selectItem %s', itemId);
  return dispatch => {

    // we already have the item data, just need somethign to filter on
    // @WorkReducers
    dispatch(_selectItem(itemId));

    // navigate to /work/item
    browserHistory.push(`/work/${itemId}`);
    return true;
  };
}
