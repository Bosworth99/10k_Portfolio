import React from 'react';
import CSSModules from 'react-css-modules';

import styles from 'viewer/viewer.scss';

// CLASS ///////////////////////////////////////////////////////////////////////
class Viewer extends React.Component {
  render() {
    // console.log('Viewer:render this.props:%o', this.props);

    // the currently selected item
    return (
      <div className={styles.viewerBox}>
        <div
          className={styles.clickPrev}
          onClick={(e) => this.props.onClickDir(e, 'next')}
        >
          +
        </div>

        <div className={styles.viewerImageContainer} >
          <img
            className={styles.viewerImage}
            src={`/dist/images/work/${this.props.bigImage.Full_URI}`}
            alt="Screenshot"
            onClick={(e) => this.props.onClickImg(e)}
          />
          <p className={styles.viewerDescription}>{this.props.bigImage.Title} - {this.props.bigImage.Description}</p>
        </div>

        <div
          className={styles.clickNext}
          onClick={(e) => {
            this.props.onClickDir(e, 'prev')
          }}
        >
          -
        </div>
      </div>
    );
  }
}

export default CSSModules(Viewer, styles);
