import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import WorkItem from 'workItem/WorkItem.jsx';
import * as actionCreators from 'work/WorkActions';

// CLASS ///////////////////////////////////////////////////////////////////////
class WorkItemContainer extends React.Component {

  componentDidMount() {
    // console.log('WorkItemContainer::componentDidMount this:%o', this);

    // here, we might be reloading a deep path
    // - need to request data and handle the returns
    if (!this.props.item.ID) {
      this.props.dispatch(actionCreators.fetchItems());
      this.props.dispatch(actionCreators.fetchImages());
    }
  }

  // called when the application state updates
  componentWillReceiveProps(nextProps) {
    // console.log('WorkItemContainer::componentWillReceiveProps', nextProps);

    // the collection of work items
    const item = nextProps.item;
    const images = nextProps.images;

    // here, we just need to know that the item has been selected and is ready for consumption
    // - if not (if we loaded on a deep route, call setelctItem
    if (images.length > 0 && item.ID) {
      this.setState({
        item,
        images,
        loaded: true
      });
    } else {
      // here, we need to select a valid item from the url
      const tempItemID = window.location.pathname.split('/')[2];
      this.props.dispatch(actionCreators.selectItem(tempItemID));
    }
  }

  render() {
    return (
      <WorkItem
        item={this.props.item}
        images={this.props.images}
        onClickClose={this.props.onClickClose}
      />
    );
  }
}

// PROPS ///////////////////////////////////////////////////////////////////////
// validate prop types
WorkItemContainer.propTypes = {};

// wire up a click handler for the pComponent
const mapDispatchToProps = (dispatch, props) => {
  return {
    dispatch,
    onClickClose: (e) => {
      browserHistory.push('/work');
    }
  };
};

// assign props to connect
const mapStateToProps = (state) => {
  return {
    item: state.workReducers.item,
    images: state.workReducers.images
  };
};

// export a redux-aware container component
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WorkItemContainer);
