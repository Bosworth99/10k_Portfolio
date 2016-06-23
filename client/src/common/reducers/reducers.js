// Common Reducers
// - combine all app reducers, ready to send to store

import { combineReducers } from 'redux';
import workReducers from 'work/WorkReducers';

const initialState = {
  appName: '10k_Interactive',
  version: '0.1.0'
};

function commonReducers(state = initialState, action ){
  // console.log('Reducers::commonReducers', state, action);

  // this is a spot for any common reducer interactions
  // - the goal is just to set it up for scaling
  switch (action.type) {
    // case etc...
    default:
  }

  return state;
}

// combine all the reducers
const rootReducer = combineReducers({
    commonReducers,
    workReducers
});

export default rootReducer;
