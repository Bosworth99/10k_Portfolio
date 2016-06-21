import React from 'react';

const activeStyle = {
    float: 'left',
    height: '150px',
    width: '150px',
    border: '1px solid blue',
    padding: '10px',
    margin: '10px',
    cursor: 'pointer',
    textAlign: 'center'
};

export default class Item extends React.Component {

    render() {
        // console.log('Item:render this:%o', this);
        const item = this.props.item;
        return (
            <div style={activeStyle} >
                <div
                    className="item"
                    onClick={this.props.handleClick} >
                    {item.ID}
                </div>
            </div>
        );
    }
}

Item.propTypes = {
    item: React.PropTypes.object
};
