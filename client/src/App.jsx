import React from 'react';
import CSSModules from 'react-css-modules';

import styles from 'common/styles/layout.scss';
import base from 'common/styles/base.scss';

// Application Root
// - serve all props to children
// - components are exposed to this top level component, as props
class App extends React.Component {
  render() {
    console.log('App::render %o', this);
    return (
      <div className={styles.appLayout} >
        <div className={styles.appHeader}>
          {this.props.header}
        </div>
        <div className={styles.appMain}>
          {this.props.main}
        </div>
      </div>
    );
  }
}

export default CSSModules(App, styles);
