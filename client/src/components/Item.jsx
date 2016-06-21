import React from 'react';

const activeStyle = {
    float: 'left',
    height: '150px',
    width: '150px',
    border: '1px solid blue',
    margin: '10px',
    cursor: 'pointer',
    textAlign: 'center'
};

const inactiveStyle = {
    height: '150px',
    width: '150px',
    border: '1px solid red',
    margin: '10px'
};

export default class Item extends React.Component {

    onClick(event) {
        console.log('Item::onClick %o', event.target);
    }

    render() {
        console.log('Item:render this.props.item:%o', this.props.item);
        if ( this.props.item.active ){
            return (
                <div style={activeStyle} >
                    <div    className="item"
                            onClick={() => { console.log('click') }} >
                        {this.props.item.id}
                    </div>
                </div>
            );
        } else {
            return <div style={inactiveStyle}>empty</div>
        }
    }
}
