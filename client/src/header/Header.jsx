import React from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';

import Nav from 'nav/Nav.jsx';

import Logo from 'assets/brand/10k_325x131_wht.png';
import styles from 'header/header.scss';

class Header extends React.Component {
  render() {
    //console.log('Header::render this:%o', this);
    return (
      <header className={styles.header}>
        <div
          className={styles.brand}
          onClick={this.props.handleLogoClick}
        >
          <img className={styles.logo} src={Logo} alt="10k-Interactive Brand" />
        </div>
        <div className={styles.navigation}>
          <Nav />
        </div>
      </header>
    );
  }
}

export default CSSModules(Header, styles);
