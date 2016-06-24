import React from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';

import Nav from 'nav/Nav.jsx';

import LogoWhite from 'assets/brand/10k_325x131_wht.png';
import LogoRed from 'assets/brand/10k_325x131_red.png';
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
          <img className={styles.logoWhite} src={LogoWhite} alt="10k-Interactive Brand white" />
        </div>
        <div className={styles.navigation}>
          <Nav />
        </div>
      </header>
    );
  }
}

export default CSSModules(Header, styles);
