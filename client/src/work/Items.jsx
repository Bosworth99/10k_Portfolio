// include
import React from 'react';
import CSSModules from 'react-css-modules';

// components
import ItemContainer from 'work/ItemContainer.jsx';
import styles from 'work/work.scss';

// CLASS ///////////////////////////////////////////////////////////////////////
class Items extends React.Component {
  render() {
    // console.log('Items::render', this.props);

    // Filter only the active items
    // TODO - this should be wrapped in a container i think? or
    // set by the WorkContainer?
    const filteredItems = this.props.items.filter((item) => (item.Active));

    return (
      <div className={styles.workItems}>
          {
            filteredItems.map((item, i) => {
              return <ItemContainer item={item} key={i} itemId={item.ID} />;
            })
          }
      </div>
    );
  }
}

// PROPS ///////////////////////////////////////////////////////////////////////
Items.propTypes = {
  items: React.PropTypes.array
};

export default CSSModules(Items, styles);
