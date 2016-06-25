import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect, assert } from 'chai';

import reducers from '../../src/work/WorkReducers';

describe('requestItems', () => {

  it('handles action : REQUEST_ITEMS', () => {

    const initialState = [];
    const action = { type: 'REQUEST_ITEMS' };
    const nextState = reducers(initialState, action);
    expect(nextState).to.equal({ fetching: true });
  });
});
