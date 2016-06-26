import React from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';

import styles from 'nav/Nav.scss';

class Nav extends React.Component {
  render() {
    return (
      <nav className={styles.navigation}>
        <ul className={styles.items}>
          <li className={styles.item}><Link className="link" to="/">Home</Link></li>
          <li className={styles.item}><Link className="link" to="/work">Work</Link></li>
        </ul>
      </nav>
    );
  }
}

export default CSSModules(Nav, styles);
