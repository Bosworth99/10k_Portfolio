import { combineReducers } from 'redux';

const initialState = {
    fetching: false,
    items: [],
    item: {}
};

//  Reducer methods
function requestItems(state, newState) {
    console.log('Reducers::requestItems', state, newState);
    return Object.assign({}, state, {
        fetching: true
    });
}

function setItems(state, newState) {
    console.log('Reducers::setItems', state, newState);
    return Object.assign({}, state, {
        fetching: false,
        items: newState
    });
}

// Item Reducers
function itemState(state = initialState, action) {
    console.log('Reducers::itemState', state, action);

    switch (action.type) {
        case 'REQUEST_ITEMS' :
            return requestItems(state);
        case 'RECEIVED_ITEMS' :
            return setItems(state, action.items);
        default:
    }
    return state;
}

// destructuered object
const rootReducer = combineReducers({
    itemState
});

export default rootReducer;
