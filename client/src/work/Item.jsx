import React from 'react';
import CSSModules from 'react-css-modules';

import styles from 'work/work.scss';

// CLASS ///////////////////////////////////////////////////////////////////////
class Item extends React.Component {
  render() {
    // console.log('Item:render this.props.item:%o', this.props.item);
    // the currently selected item
    return (
      <div className={styles.item} onClick={this.props.onItemClick} >
        <div className={styles.itemInner} >
          <img className={styles.itemImg} src={`./dist/images/work/${this.props.item.Thumb}`} />
          <div className={styles.itemDetails} >
            <div className={styles.itemDetailField} >
              <span className={styles.itemDetailFieldSpan}>{this.props.item.Title}</span><br />
              {this.props.item.Category}
            </div>
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
