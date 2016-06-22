import React from 'react';
import CSSModules from 'react-css-modules';

import styles from 'work/work.scss';

class WorkLayout extends React.Component {
  render() {
    //console.log('WorkLayout::render this:%o', this);
    return (
      <section className="module-layout">
        <h1 className="page-title">Work</h1>
        <p>All the items</p>
      </section>
    );
  }
}

export default CSSModules(WorkLayout, styles);
