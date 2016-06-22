import React from 'react';
import CSSModules from 'react-css-modules';

import Nav from 'nav/Nav.jsx';

import Logo from 'assets/brand/10k_325x131_wht.png';
import styles from 'header/header.scss';

class HeaderLayout extends React.Component {
  render() {
    console.log('HeaderLayout::render this:%o', this);
    return (
      <header className={styles.header}>
        <div className={styles.brand}>
          <img className={styles.logo} src={Logo} alt="10k-Interactive Brand" />
        </div>
        <div className={styles.navigation}>
          <Nav />
        </div>
      </header>
    );
  }
}

export default CSSModules(HeaderLayout, styles);
