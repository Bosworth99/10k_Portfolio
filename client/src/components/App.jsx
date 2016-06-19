import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class App extends Component {
    render(){
        return (
            <div className="react-app">
                React::APP {this.props.msg}!
            </div>
        )
    }
};
