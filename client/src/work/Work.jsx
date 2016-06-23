// include
import React from 'react';
import CSSModules from 'react-css-modules';

// include
import Items from 'work/Items.jsx';
import styles from 'work/work.scss';

// CLASS ///////////////////////////////////////////////////////////////////////
class Work extends React.Component {
  render() {
    // console.log('Work::render this:%o', this);
    return (
      <section className="module-layout">
        <Items {...this.props} />
      </section>
    );
  }
}

export default CSSModules(Work, styles);
