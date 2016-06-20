import { combineReducers } from 'redux';

const initialState = {
    fetching : false,
    items : []
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
        items : newState.items
    });
}

function reducerItems(state = initialState, action){
    console.log('Reducers::reducerItems', state, action);

    switch (action.type) {
        case 'SET_STATE':
            return setState(state, action.state);

        case 'REQUEST_ITEMS' :
            return requestItems(state, action.state)

        case 'RECEIVED_ITEMS' :
            return setItems(state, action.state);
    }

    return state;
}

const rootReducer = combineReducers({
    reducerItems
});

export default rootReducer;
