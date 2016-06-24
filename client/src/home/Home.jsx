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
            <div className={styles.panelInner}>
              <h1 className={styles.title}>HANDCRAFTED INTERNET</h1>
              <p className={styles.subText}>Airtight code. Rock-solid markup. Stylesheets that hum.</p>
            </div>
            <p className={styles.bottomText}>View Work</p>
          </div>
        </div>
      </section>
    );
  }
}

export default CSSModules(Home, styles);
