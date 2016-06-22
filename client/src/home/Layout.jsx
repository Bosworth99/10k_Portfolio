import React from 'react';
import { hashHistory } from 'react-router';
import CSSModules from 'react-css-modules';

import styles from 'home/home.scss';

class HomeLayout extends React.Component {
  render() {
    console.log('HomeLayout::render this:%o', this);
    return (
      <h1 className={styles.title}>Home</h1>
    );
  }
}

export default CSSModules(HomeLayout, styles);
