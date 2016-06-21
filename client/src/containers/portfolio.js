import React from 'react';
import { connect } from 'react-redux';

import { fetchItems } from 'actions.js';
import Portfolio from 'components/Portfolio';

// Portfolio Container
const PortfolioContainer = React.createClass({

    getInitialState: () => {
        console.log('PortfolioContainer::getInitialState');
        return {
            portfolio: [],
            loaded: false
        };
    },

    componentWillMount: () => {
        console.log('PortfolioContainer::componentWillMount', this.state, this.state.dispatch);
        this.state.dispatch(fetchItems());
    },

    componentWillReceiveProps: (nextProps) => {
        console.log('PortfolioContainer::componentWillReceiveProps', nextProps);
        const items = nextProps;
        this.setState({
            portfolio: items,
            loaded: true
        });
    },

    render: () => {
        console.log('PortfolioContainer::render', this);
        return (
          <Portfolio portfolio={this.state.portfolio} loaded={this.state.loaded} />
        );
    }
});

// if we need to dispatch an action
const mapDispatchToProps = (dispatch, props) => {
    console.log('Portfolio::mapDispatchToProps dispatch:%o props:%o', dispatch, props);
    return {};
};

// assign props to connect
const mapStateToProps = (store) => {
    console.log('Portfolio::mapStateToProps store:%o', store);
    return {
        portfolio: store.itemState.items
    };
};

// connect container to presentational / functional component
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PortfolioContainer);
