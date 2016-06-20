import React from 'react';
import { connect } from 'react-redux';

import { fetchItems } from 'actions.js';
import Portfolio from 'components/Portfolio';

// only return active items
function filterActiveItems(items){
    return items.filter( t => !t.Active );
}

// assign props to connect
const mapStateToProps = (state) => {
    console.log('PortfolioContainer::mapStateToProps', state);
    return {
        portfolio : filterActiveItems(state.reducerItems.items)
    };
}

// assign events to the presentational component
const mapDispatchToProps = (dispatch) => {
    console.log('PortfolioContainer::mapDispatchToProps', dispatch);
    return {
        fetchItems : (id) => {
            dispatch(fetchItems);
        }
    };
}

// connect container to presentational component
export default connect(mapStateToProps)(Portfolio);
