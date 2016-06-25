import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect, assert } from 'chai';

import * as WorkActions from '../../src/work/WorkActions';

describe('WorkActions.requestItems', () => {
  it('returns an action type REQUEST_ITEMS', () => {
    const action = WorkActions.requestItems();
    expect(action.type).to.equal('REQUEST_ITEMS');
  });
});

describe('WorkActions.receivedItems', () => {

  it('returns an action type RECEIVED_ITEMS', () => {
    const items = [{}];
    const action = WorkActions.receivedItems(items);
    expect(action.type).to.equal('RECEIVED_ITEMS');
  });

  it('returns a property : items', () => {
    const items = [{ foo: 'bar' }];
    const action = WorkActions.receivedItems(items);
    assert.isDefined(action.items);
  });
});

describe('WorkActions.requestImages', () => {

  it('returns an action type REQUEST_IMAGES', () => {
    const images = [{}];
    const action = WorkActions.requestImages(images);
    expect(action.type).to.equal('REQUEST_IMAGES');
  });
});

describe('WorkActions.receivedImages', () => {

  it('returns an action type RECEIVED_IMAGES', () => {
    const images = [{}];
    const action = WorkActions.receivedImages(images);
    expect(action.type).to.equal('RECEIVED_IMAGES');
  });

  it('returns a property : images', () => {
    const images = [{ foo: 'bar' }];
    const action = WorkActions.receivedImages(images);
    assert.isDefined(action.images);
  });
});

describe('WorkActions._selectItem', () => {

  it('returns an action type SELECT_ITEM', () => {
    const images = [{}];
    const action = WorkActions._selectItem(images);
    expect(action.type).to.equal('SELECT_ITEM');
  });

  it('returns a property : itemId', () => {
    const itemId = 'FooBar';
    const action = WorkActions._selectItem(itemId);
    assert.isDefined(action.itemId);
  });
});
