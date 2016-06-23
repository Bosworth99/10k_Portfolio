import React from 'react';
import CSSModules from 'react-css-modules';

import styles from 'work/work.scss';

// CLASS ///////////////////////////////////////////////////////////////////////
class Item extends React.Component {
  render() {
    console.log('Item:render this.props.item:%o', this.props.item);
    // the currently selected item
    const item = this.props.item;
    return (
      <div className={styles.workItem} onClick={this.props.onItemClick} >
        <div className={styles.workItemInner} >
          <img className={styles.workItemImg} src={`./dist/images/work/${item.Thumb}`} alt/>
          <div className={styles.workItemDetails} >
            {item.ID}
          </div>
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
