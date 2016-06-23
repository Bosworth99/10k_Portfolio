import React from 'react';
import CSSModules from 'react-css-modules';

import styles from 'home/home.scss';

class Home extends React.Component {
  render() {
    //console.log('Home::render this:%o', this);
    return (
      <section className="module-layout">
        <div className={styles.container}>
          <div className={styles.panel} onClick={this.props.onPanelClick}>
            <h1 className={styles.title}>HANDCRAFTED INTERNET</h1>
            <p className={styles.text}>View Work</p>
          </div>
        </div>
      </section>
    );
  }
}

export default CSSModules(Home, styles);

//<p className="{styles.text}">Airtight code. Rock-solid markup. Stylesheets that hum.</p>
