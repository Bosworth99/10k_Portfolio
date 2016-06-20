
////////////////////////////////////////////////////////////////////////////////
//  Actions
////////////////////////////////////////////////////////////////////////////////

export const SET_STATE = 'SET_STATE'
export const REQUEST_ITEMS = 'REQUEST_ITEMS';
export const RECEIVED_ITEMS = 'RECEIVED_ITEMS';

const ROOT_URL = location.href.indexOf('localhost') > 0 ? 'http://localhost:3001/api' : '/api';

////////////////////////////////////////////////////////////////////////////////
//  Action Creators
////////////////////////////////////////////////////////////////////////////////

export function setState(state){
    return {
        type : SET_STATE,
        state : state
    }
}

// useful for a loader screen, for example
export function requestItems(){
    console.log('Actions::requestItems');
    return {
        type : REQUEST_ITEMS
    }
}

export function receivedItems(state){
    console.log('Actions::receivedItems %o', state);
    return {
        type : RECEIVED_ITEMS,
        state : state
    }
}

export function fetchItems(req) {
    console.log('Actions::fetchItems');

    return dispatch => {
        // let anyone whos listening know we are performing an async
        dispatch(requestItems(req));
        return fetch( ROOT_URL + '/portfolio', {
                method : 'GET'
            })
            .then(response => response.json())
            .then(json => dispatch( receivedItems(json)))
    }
}
