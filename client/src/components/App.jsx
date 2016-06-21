import React from 'react';

//  Application Root
//  - serve props to the children
export default class App extends React.Component {
    render() {
        console.log('App::render %o', this);
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}
