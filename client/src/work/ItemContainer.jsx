import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import * as actionCreators from 'work/WorkActions';
import Item from 'work/Item.jsx';

// CLASS ///////////////////////////////////////////////////////////////////////
class ItemContainer extends React.Component {

  componentWillMount() {
    //console.log('ItemContainer::componentWillMount', this);
  }

  // called when the application state updates
  componentWillReceiveProps(nextProps) {
    //console.log('ItemContainer::componentWillReceiveProps', nextProps, this);
    const item = nextProps.items;
    this.setState({
      item
    });
  }

  render() {
    // console.log('ItemContainer::render', this);
    return <Item {...this.props} />;
  }
}

// PROPS ///////////////////////////////////////////////////////////////////////

ItemContainer.propTypes = {
  item: React.PropTypes.object
};

// wire up a click handler for the pComponent
const mapDispatchToProps = (dispatch, props) => {
  return {
    dispatch,
    onItemClick: (e) => {
      console.log('Item::onItemClick %o %o', props, e);
      // select an id and push it onto the store, where we filter out an item
      dispatch(actionCreators.selectItem(props.item.ID));
    }
  };
};

// assign props to connect the store
// - not really doing that, because, at this point, picking data from parents
const mapStateToProps = (state, params) => {
  return {};
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemContainer);
