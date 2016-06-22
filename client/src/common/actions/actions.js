//  Actions
// - could split these into their own file
export const REQUEST_ITEMS = 'REQUEST_ITEMS';
export const RECEIVED_ITEMS = 'RECEIVED_ITEMS';
export const SELECT_SINGLE = 'SELECT_SINGLE';

// modify url for dev/production
//const ROOT_URL = location.href.indexOf('localhost') > 0 ? 'http://localhost:3001/api' : '/api';

//  Action Creators
// useful for a loader screen, for example
export function requestItems() {
    console.log('Actions::requestItems');
    return {
        type: REQUEST_ITEMS
    };
}

// action to emit when json data has been recieved
export function receivedItems(items) {
    console.log('Actions::receivedItems %o', items);
    return {
        type: RECEIVED_ITEMS,
        items,
    };
}

export function selectSingle(itemId) {
    console.log('Actions::selectSingle %s', itemId);
    return {
        type: SELECT_SINGLE,
        itemId
    };
}

// async action made available via redux-thunk as middleware
export function fetchItems(req) {
    console.log('Actions::fetchItems');

    return dispatch => {
        // let anyone whos listening know we are performing an async
        dispatch(requestItems(req));

        // perform the async operation
        return fetch('/api/portfolio', { method: 'GET' })
            .then(response => response.json())
            .then(json => dispatch(receivedItems(json)));
    };
}