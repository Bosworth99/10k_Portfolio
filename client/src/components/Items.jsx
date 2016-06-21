import React from 'react';
import Item from 'components/Item';

export default class Items extends React.Component {

    render() {
        console.log('Items::render', this.props);
        return (
            <div className="items">
                <ul>
                    {this.props.items.map( (item, i) =>
                        <Item item={item} key={i} />
                    )}
                </ul>
            </div>
        );
    }
}
