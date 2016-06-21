import React from 'react';
import { connect } from 'react-redux';

import * as actionCreators from 'actions.js';
import Item from 'components/Portfolio/Item';

// set up our container component
class ItemContainer extends React.Component {
    render() {
        return (
            <Item {...this.props} />
        );
    }
}

ItemContainer.propTypes = {
    item: React.PropTypes.object
};

// wire up a click handler for the pComponent
const mapDispatchToProps = (dispatch, props) => {
    //console.log('ItemContainer::mapDispatchToProps props:%o', props);
    return {
        handleClick: (e) => {
            console.log('clicked %s %o', props.item.ID, e.target);
        }
    };
};

// assign props to connect
const mapStateToProps = (state, { params }) => {
    //console.log('ItemContainer::mapStateToProps store:%o', state, params);
    return {};
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemContainer);
