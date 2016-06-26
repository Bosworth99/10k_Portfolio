import React from 'react'
import { expect, assert } from 'chai';
import { shallow, mount } from 'enzyme';

// TODO child routes are causeing mocha to choke.
// - need either set a base variable for mocha
// - or modify the base variable in webpack.config.js and update class paths throughout.

// import Header from '../../src/header/Header.jsx';
// import Nav from '../../src/nav/Nav.jsx';
//
//
// This passes when I remove the reference to children modules.
// describe('[Component] Nav', () => {
//
//   it('Renders a unordered list', () => {
//     const wrapper = shallow(<Nav />);
//     const nav = wrapper.find('ul');
//     expect(nav).to.have.length(1);
//   });
//
// });
//
// describe('[Component] Header', () => {
//
//   it('Renders a logo', () => {
//     const wrapper = shallow(<Header />);
//     const logo = wrapper.find('img');
//     expect(logo).to.have.length(1);
//   });
//
// });
