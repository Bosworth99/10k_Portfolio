
// reducer stack for work items
const initialState = {
  fetching: false,
  images: [],
  items: [],
  item: {}
};

//  Reducer methods
function requestItems(state) {
  // console.log('WorkReducers::requestItems %o %o', state);
  return Object.assign({}, state, {
    fetching: true
  });
}

function receivedItems(state, items) {
  // console.log('WorkReducers::receivedItems %o %o', state, items);
  return Object.assign({}, state, {
    fetching: false,
    items
  });
}

function requestImages(state) {
  // console.log('WorkReducers::requestImages %o %o', state);
  return Object.assign({}, state, {
    fetching: true
  });
}

function receivedImages(state, images) {
  // console.log('WorkReducers::receivedImages %o images:%o', state, images);
  return Object.assign({}, state, {
    fetching: false,
    images
  });
}

function setItem(state, itemId) {
  // console.log('WorkReducers::setItem %o %o', state, itemId);
  let item = state.items.filter((_item) => {
    return _item.ID === itemId;
  })[0];

  if (!item) {
    item = { ID: 'NOT_FOUND' };
  }

  return Object.assign({}, state, {
    item
  });
}

// Work Reducers
function workState(state = initialState, action) {
  // console.log('%s %o %o', action.type, state, action);

  switch (action.type) {
    case 'REQUEST_ITEMS' :
      return requestItems(state);
    case 'RECEIVED_ITEMS' :
      return receivedItems(state, action.items);
    case 'REQUEST_IMAGES' :
      return requestImages(state);
    case 'RECEIVED_IMAGES' :
      return receivedImages(state, action.images);
    case 'SELECT_ITEM' :
      return setItem(state, action.itemId);
    default:
  }
  return state;
}

export default workState;
