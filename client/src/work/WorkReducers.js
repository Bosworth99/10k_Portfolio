import * as actionCreators from 'work/WorkActions';

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

function setItems(state, items) {
  // console.log('WorkReducers::setItems %o %o', state, items);
  return Object.assign({}, state, {
    fetching: false,
    items
  });
}

function requestImages(state) {
  //console.log('WorkReducers::requestImages %o %o', state);
  return Object.assign({}, state, {
    fetching: true
  });
}

function setImages(state, images) {
  //console.log('WorkReducers::setImages %o', state);
  return Object.assign({}, state, {
    fetching: false,
    images
  });
}

function setItem(state, itemId) {
  // console.log('WorkReducers::setItem %o %o', state, itemId);
  const item = state.items.filter((_item) => {
    return _item.ID === itemId;
  })[0];
  return Object.assign({}, state, {
    item
  });
}

// Work Reducers
function workState(state = initialState, action) {
  console.log('WorkReducers::workState %o %o %s', state, action, action.type);
  switch (action.type) {
    case actionCreators.REQUEST_ITEMS :
      return requestItems(state);
    case actionCreators.RECEIVED_ITEMS :
      return setItems(state, action.items);
    case actionCreators.SELECT_ITEM :
      return setItem(state, action.itemId);
    case actionCreators.REQUEST_IMAGES :
      return requestImages(state);
    case actionCreators.RECEIVED_IMAGES :
      return setImages(state, action.items);
    default:
  }
  return state;
}

export default workState;
