import { combineReducers } from 'redux';

const initialState = {
    fetching: false,
    items: [],
    single: {}
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

function selectSingle(state, itemId) {
    console.log('Reducers::selectSingle', state, itemId);
    const single = state.items.filter((item) => {
        return item.ID === itemId;
    })[0];
    return Object.assign({}, state, { single });
}

// Item Reducers
function itemState(state = initialState, action) {
    console.log('Reducers::itemState', state, action);
    switch (action.type) {
        case 'REQUEST_ITEMS' :
            return requestItems(state);
        case 'RECEIVED_ITEMS' :
            return setItems(state, action.items);
        case 'SELECT_SINGLE' :
            return selectSingle(state, action.itemId);
        default:
            console.log('Reducers::itemState [%s] Not Handled!', action.type);
    }
    return state;
}

// destructuered object
const rootReducer = combineReducers({
    itemState
});

export default rootReducer;
