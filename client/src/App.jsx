import React from 'react';
import CSSModules from 'react-css-modules';

import styles from 'common/styles/layout.scss';
import base from 'common/styles/base.scss';

// APP ROOT ////////////////////////////////////////////////////////////////////
// - components are exposed to this top level component, as props
class App extends React.Component {
  render() {
    console.log('App::render %o', this);

    // utlmately, page composition is achieved through the router props here.
    return (
      <div className={styles.appLayout} >
        {this.props.header}
        {this.props.main}
      </div>
    );
  }
}

export default CSSModules(App, styles);
