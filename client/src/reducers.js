import { combineReducers } from 'redux';

const initialState = {
    fetching : false,
    items : [],
    item : {}
};

function setState(state, newState){
    return state.merge(newState);
}

function requestItems(state, newState){
    console.log('Reducers::requestItems', state, newState);
    return Object.assign({}, state, {
        fetching : true
    });
}

function setItems(state, newState){
    console.log('Reducers::setItems', state, newState);
    return Object.assign({}, state, {
        fetching : false,
        items : newState
    });
}

function reducerItems(state = initialState, action){
    console.log('Reducers', state, action);

    switch (action.type) {
        case 'SET_STATE':
            return setState(state, action.state);

        case 'REQUEST_ITEMS' :
            return requestItems(state)

        case 'RECEIVED_ITEMS' :
            return setItems(state, action.items);
    }

    return state;
}

const rootReducer = combineReducers({
    reducerItems
});

export default rootReducer;
