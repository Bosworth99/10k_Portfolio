import React from 'react';
import CSSModules from 'react-css-modules';

import styles from 'home/home.scss';

class HomeLayout extends React.Component {
  render() {
    //console.log('HomeLayout::render this:%o', this);
    return (
      <section className="module-layout">
        <h1 className="page-title">Handcrafted Internet</h1>
        <p>Airtight code. Rock-solid markup. Stylesheets that hum.</p>
      </section>
    );
  }
}

export default CSSModules(HomeLayout, styles);
