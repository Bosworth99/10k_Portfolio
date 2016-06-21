import React from 'react';
import { hashHistory } from 'react-router';

const closeStyle = {
    display: 'inline-block',
    position: 'absolute',
    top: '0px',
    right: '0px',
    border: '1px solid blue',
    padding: '10px',
    cursor: 'pointer'
};

export default class Single extends React.Component {

    // navigate back to portfolio on closed
    render() {
        console.log('Single::render this:%o', this);

        const clickHandler = (e) => {
            console.log('Single::close', e);
            hashHistory.push('/portfolio');
        };

        return (
            <div>
                <h1> SINGLE VIEW </h1>
                <div
                    style={closeStyle}
                    onClick={clickHandler} >
                    Close
                </div>
                <div>
                    {
                        (this.props && this.props.single && this.props.single.ID)
                        ? this.props.single.ID
                        : "ID not set"
                    }
                </div>
            </div>
        );
    }
}
