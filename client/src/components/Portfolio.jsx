import React from 'react';
import { connect } from 'react-redux';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import { fetchItems } from 'actions.js';

import Items from 'components/Items';
import styles from 'styles.scss';

// define dumb component
// not sure if this is the right way to build a presentational component
class Portfolio extends React.Component {

    // define an empty portfolio array
    constructor(props){
        super(props);
    }

    // need to add PureRenderMixin here

    componentWillMount(){
        console.log('Portfolio::componentWillMount');
        this.props.dispatch(fetchItems());
    }

    componentWillReceiveProps(nextProps) {
        console.log('Portfolio::componentWillReceiveProps %o', nextProps);

        this.setState({
            portfolio: nextProps.portfolio
        });
    }

    render(){
        console.log('Portfolio::render %o', this.state, this.props );
        if (this.state.portfolio){
            return (
                <div className={styles.portfolio}>
                    <h1 className={styles.title}>10k Portfolio</h1>
                    <Items items={this.state.portfolio} />
                </div>
            )
        } else {
            return <div>Loading...</div>
        }
    }
};

// now - generate a container taht we're going use to connect the application state to

// assign props to connect
function mapStateToProps(state){
    console.log('Portfolio::mapStateToProps', state);
    return {
        portfolio : state.reducerItems.items
    };
}

// connect container to dumb component
export default connect(mapStateToProps)(Portfolio);
