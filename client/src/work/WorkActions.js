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
export function requestItems() {
  // console.log('WorkActions::requestItems');
  return {
    type: REQUEST_ITEMS
  };
}

// action to emit when json data has been recieved
export function receivedItems(items) {
  // console.log('WorkActions::receivedItems %o', items);
  return {
    type: RECEIVED_ITEMS,
    items,
  };
}

export function requestImages() {
  //  console.log('WorkActions::requestImages');
  return {
    type: REQUEST_IMAGES
  };
}

export function receivedImages(images) {
  //  console.log('WorkActions::receivedImages %o', images);
  return {
    type: RECEIVED_IMAGES,
    images,
  };
}

export function _selectItem(itemId) {
  // console.log('WorkActions::_selectItem %s', itemId);
  return {
    type: SELECT_ITEM,
    itemId
  };
}

// THUNK METHODS////////////////////////////////////////////////////////////////

// TODO these api calls are requesting a file.
// - routing for the hapi/node api works without the extensions
// - apache isnt yet set up to handle api routes yet

// async action made available via redux-thunk as middleware
export function fetchItems() {
  // console.log('WorkActions::fetchItems');
  return dispatch => {
    // let anyone whos listening know we are performing an async
    dispatch(requestItems());

    // perform the async operation
    return fetch('/api/portfolio.json', { method: 'GET' })
      .then(response => response.json())
      .then(json => dispatch(receivedItems(json)));
  };
}

// pick image json
export function fetchImages() {
  // console.log('WorkActions::fetchImages');
  return dispatch => {
    dispatch(requestImages());
    return fetch('/api/images.json', { method: 'GET' })
      .then(response => response.json())
      .then(json => dispatch(receivedImages(json)));
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
