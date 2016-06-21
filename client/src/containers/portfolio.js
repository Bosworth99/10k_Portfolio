import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from 'actions.js';
import Portfolio from 'components/Portfolio';

import configureStore from 'store.js';
const store = configureStore();

class PortfolioContainer extends React.Component {

    componentDidMount() {
        console.log('PortfolioContainer::componentDidMount this:%o', this, store);
        store.dispatch(actionCreators.fetchItems());
    }

    componentWillReceiveProps(nextProps) {
        console.log('PortfolioContainer::componentWillReceiveProps', nextProps);
        const items = nextProps;
        this.setState({
            portfolio: items,
            loaded: true
        });
    }

    setInitialState() {
        console.log('PortfolioContainer::setInitialState %o', this);
        this.setState({
            loaded : false
        });
    }

    render() {
        console.log('PortfolioContainer::render', this);
        return (
          <Portfolio portfolio={this.props.portfolio} loaded={this.props.loaded} />
        );
    }
}

// if we need to dispatch an action
const mapDispatchToProps = (dispatch, props) => {
    console.log('Portfolio::mapDispatchToProps props:%o', props);
    return bindActionCreators({
        fetchItems: actionCreators.fetchItems,
    }, dispatch);
};

// assign props to connect
const mapStateToProps = (store) => {
    console.log('Portfolio::mapStateToProps store:%o', store);
    return {
        portfolio: store.itemState.items,
    };
};

// connect container to presentational / functional component
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PortfolioContainer);
