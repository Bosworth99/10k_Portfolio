import React from 'react';

export default class Single extends React.Component {

    // navigate back to portfolio on closed

    render() {
        console.log('Single::render this:%o', this);

        const clickHandler = (e) => {
            console.log('Single::close')
        }

        return (
            <div>
                <h1> SINGLE VIEW </h1>
                <div onClick={clickHandler}>
                    Close
                </div>
            </div>
        );
    }
}
