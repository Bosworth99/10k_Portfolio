import React from 'react';
import CSSModules from 'react-css-modules';

import ProfilePic from 'assets/profile_sm.jpg';
import styles from 'home/home.scss';

class Home extends React.Component {
  render() {
    //console.log('Home::render this:%o', this);
    return (
      <section className="module-layout">
        <div className={styles.container}>
          <div className={styles.panel}>
            <div className={styles.brandBox}>
              <h1 className={styles.title}>HANDCRAFTED INTERNET</h1>
              <p className={styles.subText}>Airtight code. Rock-solid markup. Stylesheets that hum.</p>
              <div className={styles.bottomText}>
                <div className={styles.workButton} onClick={this.props.onPanelClick}>
                  View Work
                </div>
              </div>
            </div>
            <div className={styles.textBox} >
              <div className={styles.profilePicBox}>
                <img className={styles.profilePic} src={ProfilePic} alt="Profile Pic" />
              </div>
              <div className={styles.projectText}>
                <h1>React/Redux Demo App | Portfolio Module</h1>
                <p>
                  This project is intended to be an eventual portfolio module for my company website.
                  It is the culmination of about a week of work and study on the React/Redux stack.
                  The goal was to create a complete application; a scalable, maintainable codebase,
                  from scratch, that incorporated a number of critical technologies.
                  <br />
                  <br />
                  The codebase is availble at <a href="https://github.com/Bosworth99/10k_Portfolio" target="_blank">GitHub</a>.
                </p>
                <h3>Tech Stack</h3>
                <ul className={styles.ul}>
                  <li className={styles.li}>Complex view layer with React</li>
                  <li className={styles.li}>Redux state management</li>
                  <li className={styles.li}>Route management with React-router</li>
                  <li className={styles.li}>React CSS modules with SCSS for crazy specificity</li>
                  <li className={styles.li}>Responsive layout for mobile devices</li>
                  <li className={styles.li}>Async API interactions with Redux-Thunk</li>
                  <li className={styles.li}>Version control with Git</li>
                  <li className={styles.li}>Unit testing with Mocha, Chai, and Enzyme</li>
                  <li className={styles.li}>Asset and script compilation with Webpack</li>
                  <li className={styles.li}>Hapi.js / Webpack-Dev-Server local development environment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CSSModules(Home, styles);
