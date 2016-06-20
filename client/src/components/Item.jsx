import React from 'react';

export default class Item extends React.Component{
    render (){
        console.log('Item:render this.props.item:%o', this.props.item);
        if ( this.props.item.active ){
            let cells = Object.keys(this.props.item).map( (result, i) => {
                return (
                    <td className="item" key={i} >
                        <span>{this.props.item[result]}</span>
                    </td>
                )
            });
            return <tr>{cells}</tr>;
        } else {
            return <td cols="4"> not active </td>
        }
    }
};
