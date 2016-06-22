import React from 'react';
import ItemContainer from '/containers/Portfolio/Item.jsx';

export default class Items extends React.Component {
    render() {
        console.log('Items::render', this.props);
        // filter only the active items
        const filteredItems = this.props.items.filter((item) => (item.Active));
        return (
            <div className="items">
                <ul>
                    {filteredItems.map( (item, i) =>
                        <ItemContainer item={item} key={i} />
                    )}
                </ul>
            </div>
        );
    }
}

Items.propTypes = {
    items: React.PropTypes.array
};
