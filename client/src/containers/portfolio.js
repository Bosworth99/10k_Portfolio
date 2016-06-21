import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from 'actions.js';
import Portfolio from 'components/Portfolio';

class PortfolioContainer extends React.Component {

    // the critical bit here, is taht connect() needs to be wired up
    // properly or dispatch wont get set on the the props, which is critical
    componentDidMount() {
        console.log('PortfolioContainer::componentDidMount this:%o', this);
        this.props.dispatch(actionCreators.fetchItems());
    }

    componentWillReceiveProps(nextProps) {
        console.log('PortfolioContainer::componentWillReceiveProps', nextProps);
        const items = nextProps.portfolio;
        this.setState({
            portfolio: items,
            loaded: true
        });
    }

    setInitialState() {
        console.log('PortfolioContainer::setInitialState %o', this);
        this.setState({
            loaded: false
        });
    }

    checkIfLoaded() {
        console.log('PortfolioContainer::checkIfLoaded', this.state);
        return (this.state && this.state.loaded) || false;
    }

    render() {
        console.log('PortfolioContainer::render', this);
        return (
          <Portfolio portfolio={this.props.portfolio} loaded={this.checkIfLoaded()} />
        );
    }
}

const mapDispatchToProps = (dispatch, props) => {
    console.log('Portfolio::mapDispatchToProps props:%o', props);
    return {}
};

// assign props to connect
const mapStateToProps = (state) => {
    console.log('Portfolio::mapStateToProps store:%o', state);
    return {
        portfolio: state.itemState.items,
    };
};

// connect container to presentational / functional component
// - this is critical to wiring the store logic up to the component
export default connect(
    mapStateToProps
)(PortfolioContainer);
