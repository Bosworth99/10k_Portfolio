import { expect, assert } from 'chai';

import reducers from '../../src/work/WorkReducers';

describe('WorkReducers', () => {

  it('handles an initialState', () => {
    const initialState = undefined;
    const action = { type: 'SELECT_ITEM', itemId: 'ABC' };
    const nextState = reducers(initialState, action);
    assert.isDefined(nextState.item);
  });

  it('handles action : REQUEST_ITEMS', () => {
    const initialState = [];
    const action = { type: 'REQUEST_ITEMS' };
    const nextState = reducers(initialState, action);
    expect(nextState.fetching).to.equal(true);
  });

  it('handles action : RECEIVED_ITEMS', () => {
    const initialState = [];
    const action = { type: 'RECEIVED_ITEMS' };
    const nextState = reducers(initialState, action);
    expect(nextState.fetching).to.equal(false);
  });

  it('handles action : REQUEST_IMAGES', () => {
    const initialState = [];
    const action = { type: 'REQUEST_IMAGES' };
    const nextState = reducers(initialState, action);
    expect(nextState.fetching).to.equal(true);
  });

  it('handles action : RECEIVED_IMAGES', () => {
    const initialState = [];
    const action = { type: 'RECEIVED_IMAGES' };
    const nextState = reducers(initialState, action);
    expect(nextState.fetching).to.equal(false);
  });

  it('handles action : SELECT_ITEM', () => {
    const initialState = {
      items: [{ ID: 'ABC' }, { ID: 'XYZ' }]
    };
    const action = { type: 'SELECT_ITEM', itemId: 'ABC' };
    const nextState = reducers(initialState, action);
    assert.isDefined(nextState.item);
  });

  it('RECEIVED_ITEMS assigns a property : items', () => {
    const initialState = {
      items: []
    };
    const items = [{ ID: 'ABC' }, { ID: 'XYZ' }];
    const action = { type: 'SELECT_ITEM', items };
    const nextState = reducers(initialState, action);
    assert.isDefined(nextState.items);
  });

  it('RECEIVED_ITEMS sets fetching to false', () => {
    const initialState = {
      items: []
    };
    const items = [{ ID: 'ABC' }, { ID: 'XYZ' }];
    const action = { type: 'RECEIVED_ITEMS', items };
    const nextState = reducers(initialState, action);
    expect(nextState.fetching).to.equal(false);
  });

  it('RECEIVED_ITEMS appends new items to state', () => {
    const initialState = {
      items: []
    };
    const items = [{ ID: 'ABC' }, { ID: 'XYZ' }];
    const action = { type: 'RECEIVED_ITEMS', items };
    const nextState = reducers(initialState, action);
    expect(nextState.items).to.deep.equal(items);
  });

  it('RECEIVED_IMAGES assigns a property : items', () => {
    const initialState = { images: [] };
    const images = [{ ID: 'image1' }, { ID: 'image2' }];
    const action = { type: 'RECEIVED_IMAGES', images };
    const nextState = reducers(initialState, action);
    assert.isDefined(nextState.images);
  });

  it('RECEIVED_IMAGES sets fetching to false', () => {
    const initialState = { images: [] };
    const images = [{ ID: 'image1' }, { ID: 'image2' }];
    const action = { type: 'RECEIVED_IMAGES', images };
    const nextState = reducers(initialState, action);
    expect(nextState.fetching).to.equal(false);
  });

  it('RECEIVED_IMAGES appends new images to state', () => {
    const initialState = { images: [] };
    const images = [{ ID: 'image1' }, { ID: 'image2' }];
    const action = { type: 'RECEIVED_IMAGES', images };
    const nextState = reducers(initialState, action);
    expect(nextState.images).to.deep.equal(images);
  });

  it('SELECT_ITEM assigns a property : item', () => {
    const initialState = {
      items: [{ ID: 'ABC' }, { ID: 'XYZ' }]
    };
    const action = { type: 'SELECT_ITEM', itemId: 'ABC' };
    const nextState = reducers(initialState, action);
    assert.isDefined(nextState.item);
  });

  it('SELECT_ITEM filters a unique item from a list', () => {
    const initialState = {
      items: [{ ID: 'ABC' }, { ID: 'XYZ' }]
    };
    const action = { type: 'SELECT_ITEM', itemId: 'ABC' };
    const nextState = reducers(initialState, action);
    expect(nextState.item).to.deep.equal({ ID: 'ABC' });
  });

  it('SELECT_ITEM responds with NOT_FOUND if no item is found', () => {
    const initialState = {
      items: [{ ID: 'ABC' }, { ID: 'XYZ' }]
    };
    const action = { type: 'SELECT_ITEM', itemId: 'EFG' };
    const nextState = reducers(initialState, action);
    expect(nextState.item).to.deep.equal({ ID: 'NOT_FOUND' });
  });

});
