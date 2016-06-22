import React from 'react';
import { hashHistory } from 'react-router';
import CSSModules from 'react-css-modules';

import Logo from 'assets/brand/10k_325x131_wht.png';
import styles from 'header/styles.scss';

const headerStyle = {
  position: 'absolute',
  top: '0px',
  left: '0px',
  padding: '10px',
  backgroundColor: 'red',
};

class HeaderLayout extends React.Component {
  render() {
    console.log('HeaderLayout::render this:%o', this);
    return (
      <header style={headerStyle}>
        <brand>
          <img src={Logo} alt="10k-Interactive Brand" />
        </brand>
      </header>
    );
  }
}

export default CSSModules(HeaderLayout, styles);
