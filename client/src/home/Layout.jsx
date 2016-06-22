import React from 'react';
import { hashHistory } from 'react-router';
import CSSModules from 'react-css-modules';

import Header from 'header/layout.jsx';
//import styles from 'home/styles.scss';

class HomeLayout extends React.Component {
  render() {
    console.log('HomeLayout::render this:%o', this);
    return (
      <div className="layout">
        <Header />
        <section className="content">
          <h1 className="title">Home</h1>
        </section>
      </div>
    );
  }
}

export default HomeLayout;
