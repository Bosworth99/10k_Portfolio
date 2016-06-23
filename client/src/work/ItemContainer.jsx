// INCLUDES ////////////////////////////////////////////////////////////////////
import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import * as actionCreators from 'work/WorkActions';
import Item from 'work/Item.jsx';

// CLASS ///////////////////////////////////////////////////////////////////////
const ItemContainer = (props) => {
  return <Item {...props} />;
};

ItemContainer.propTypes = {
  item: React.PropTypes.object
};

// wire up a click handler for the pComponent
const mapDispatchToProps = (dispatch, props) => {
  return {
    dispatch,
    onItemClick: (e) => {
      console.log('Item::onItemClick %o %o', props, e);

      const itemId = props.item.ID;
      // @WorkReducers
      dispatch(actionCreators.selectItem(itemId));
    }
  };
};

// assign props to connect
const mapStateToProps = (state, params) => {
    return {};
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemContainer);
