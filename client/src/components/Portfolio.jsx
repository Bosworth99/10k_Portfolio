import React from 'react';
import { connect } from 'react-redux';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import { fetchItems } from 'actions.js';

import Items from 'components/Items';
import styles from 'styles.scss';

// the Presentational Component
class Portfolio extends React.Component {
    render(){
        console.log('Portfolio::render %o', this.state, this.props );

        if (this.props.loaded){
            return (
                <div className={styles.portfolio}>
                    <h1 className={styles.title}>10k Portfolio</h1>
                    <Items items={this.props.portfolio} />
                </div>
            )
        } else {
            return <div>Loading...</div>
        }
    }
}

// Or - the pure functional way
// - only if the sole method is render()
const StatelessPortfolioComponent = (props)=>{
    console.log('StatelessPortfolioComponent::render %o', props );
    if (props.loaded){
        return (
            <div className={styles.portfolio}>
                <h1 className={styles.title}>10k Portfolio</h1>
                <Items items={props.portfolio} />
            </div>
        )
    } else {
        return <div>Loading...</div>
    }
}

// Portfolio Container
const PortfolioContainer = React.createClass({

    getInitialState : ()=>{
        console.log('PortfolioContainer::getInitialState');
        return {
            portfolio : [],
            loaded : false
        }
    },

    componentWillMount : ()=>{
        console.log('PortfolioContainer::componentWillMount');
        this.props.dispatch(fetchItems());
    },

    componentWillReceiveProps : (nextProps) => {
        console.log('PortfolioContainer::componentWillReceiveProps', nextProps);
        const items = nextProps;
        this.setState({
            portfolio : items,
            loaded : true
        });
    },

    render : ()=>{
        console.log('PortfolioContainer::render', this);
        return (
            <div>Hello stupid</div>
        )
    }
});

//             <Portfolio portfolio={this.state.portfolio} loaded={this.state.loaded} />

// if we need to dispatch an action
const mapDispatchToProps = (dispatch, props) => {
    console.log('Portfolio::mapDispatchToProps dispatch:%o props:%o', dispatch, props);
    return {}
}

// assign props to connect
const mapStateToProps = (store) => {
    console.log('Portfolio::mapStateToProps store:%o', store);
    return {
        portfolio : store.itemState.items
    };
}

// connect container to presentational / functional component
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PortfolioContainer);
