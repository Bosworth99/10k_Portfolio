import React from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';

import styles from 'nav/Nav.scss';

class NavLayout extends React.Component {
  render() {
    console.log('NavLayout::render this:%o', this);
    return (
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/work">Work</Link></li>
        </ul>
      </nav>
    );
  }
}

export default CSSModules(NavLayout, styles);
