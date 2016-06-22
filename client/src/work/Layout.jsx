import React from 'react';
import { hashHistory } from 'react-router';
import CSSModules from 'react-css-modules';

import styles from 'work/work.scss';

class WorkLayout extends React.Component {
  render() {
    console.log('WorkLayout::render this:%o', this);
    return (
      <h1 className={styles.title}>work</h1>
    );
  }
}

export default CSSModules(WorkLayout, styles);
