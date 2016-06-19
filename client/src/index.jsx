import React from 'react';
import ReactDOM from 'react-dom';

const App = React.createClass({
    render : ()=>{
        return <div className="react-app">React::App</div>
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
