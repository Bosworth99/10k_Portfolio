
function setState(state, newState){
    return state.merge(newState);
}

export default function reducer(state = {}, action){

    switch (action.type) {
        case 'SET_STATE':
            return setState(state, action.state);
    }

    return state;
}
