import React from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';

import * as actionCreators from 'actions';
import Item from 'components/Portfolio/Item.jsx';

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
    return {
        dispatch,
        handleClick: (e) => {
            console.log('clicked %s', props);
            const ID = props.item.ID;
            const path = `/single/${ID}`;

            dispatch(actionCreators.selectSingle(ID));

            hashHistory.push(path);
        }
    };
};

// assign props to connect
const mapStateToProps = (state, { params }) => {
    return {};
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemContainer);
