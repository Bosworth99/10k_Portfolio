import React from 'react';
import Item from 'components/Item';

export default class Items extends React.Component {

    getProps(){
        console.log('this.props.items', this.props.items);
        return this.props.items || [];
    }

    render (){
        return (
            <div className="items">
                <ul>
                    { this.getProps().map( (item, i)  =>
                        <Item item={item} key={i}  />
                    )}
                </ul>
            </div>
        )
    }
};
