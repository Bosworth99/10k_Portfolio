import React from 'react';
import CSSModules from 'react-css-modules';

import styles from 'workItem/workItem.scss';

// CLASS ///////////////////////////////////////////////////////////////////////
const WorkItem = (props) => {
  console.log('WorkItem::render item:%o ', props.item);

  // generate some rows
  const thesehereprops = Object.keys(props.item).map( (result, i) => {
    return (
        <div className="item" key={i} >
          <label>{result}</label>
          <span>{props.item[result]}</span>
        </div>
      );
  });

  return (
    <section className="module-layout">
      <div className={styles.container}>
        <div className={styles.panel}>
          <h1 className={styles.title}>Work/{props.item.ID}</h1>
          <div>
            {thesehereprops}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CSSModules(WorkItem, styles);
