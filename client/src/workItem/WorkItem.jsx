import React from 'react';
import CSSModules from 'react-css-modules';

import styles from 'workItem/workItem.scss';
import Viewer from 'viewer/ViewerContainer.jsx';

// CLASS ///////////////////////////////////////////////////////////////////////
const WorkItem = (props) => {
  // console.log('WorkItem::render item:%o ', props.item);

  // generate some rows
  const itemProps = Object.keys(props.item).map( (result, i) => {
    return (
      <div className="detail" key={i}>
        <span>{result}</span>{props.item[result]}
      </div>
    );
  });

  return (
    <section className="module-layout">
      <div className={styles.container}>
        <div className={styles.panel}>
          <div className={styles.close} onClick={props.onClickClose}>X</div>
          <div className={styles.imageBox}>
            <Viewer {...props} />
          </div>
          <div className={styles.detailsBox}>
            <div className={styles.detail}>
              <h2 className={styles.detailTitle}>Project</h2>
              <strong>{props.item.Title}</strong>
            </div>
            <div className={styles.detail}>
              <h2 className={styles.detailTitle}>Description</h2>
              <div
                className={styles.detailTextBox}
                dangerouslySetInnerHTML={{ __html: props.item.Description }}
              >
              </div>
            </div>
            <div className={styles.detail}>
              <h2 className={styles.detailTitle}>Timeline</h2>
              {props.item.Timeline}
            </div>
            <div className={styles.detail}>
              <h2 className={styles.detailTitle}>Tech</h2>
              {props.item.Tech}
            </div>
            <div className={styles.detail}>
              <h2 className={styles.detailTitle}>Client</h2>
              {props.item.Context}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CSSModules(WorkItem, styles);

//  <img className={styles.image} src={`/dist/images/work/${props.item.Thumb}`} />
