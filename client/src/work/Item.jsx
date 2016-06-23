import React from 'react';
import CSSModules from 'react-css-modules';

import styles from 'work/work.scss';

// CLASS ///////////////////////////////////////////////////////////////////////
class Item extends React.Component {
  render() {
    //console.log('Item:render this:%o', this);
    // the currently selected item
    const item = this.props.item;
    return (
      <div className={styles.workItem} onClick={this.props.onItemClick} >
        <div className={styles.workItemInner} >
          {item.ID}
        </div>
      </div>
    );
  }
}

// PROPS ///////////////////////////////////////////////////////////////////////
Item.propTypes = {
    item: React.PropTypes.object
};

export default CSSModules(Item, styles);
