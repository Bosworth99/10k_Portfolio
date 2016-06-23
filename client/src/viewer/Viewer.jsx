import React from 'react';
import CSSModules from 'react-css-modules';

import styles from 'work/work.scss';

// CLASS ///////////////////////////////////////////////////////////////////////
class Viewer extends React.Component {
  render() {
    console.log('Viewer:render this.props:%o', this.props);
    // the currently selected item
    return (
      <div className="" onClick={this.props.onClickImg} >
        Image Viewer
      </div>
    );
  }
}

export default CSSModules(Viewer, styles);
