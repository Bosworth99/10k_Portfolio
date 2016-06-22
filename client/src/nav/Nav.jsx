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
          <li><Link className="link" to="/">Home</Link></li>
          <li><Link className="link" to="/work">Work</Link></li>
        </ul>
      </nav>
    );
  }
}

export default CSSModules(NavLayout, styles);
