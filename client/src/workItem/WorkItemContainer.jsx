import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import WorkItem from 'workItem/WorkItem.jsx';

// CLASS ///////////////////////////////////////////////////////////////////////
class WorkItemContainer extends React.Component {
  render() {
    return (
      <WorkItem {...this.props} />
    );
  }
}

// PROPS ///////////////////////////////////////////////////////////////////////
// validate prop types
WorkItemContainer.propTypes = {};

// take clicks on the

// wire up a click handler for the pComponent
const mapDispatchToProps = (dispatch, props) => {
  return {
    dispatch,
    onClickClose: (e) => {
      console.log('WorkItem::onClickClose %o %o', props, e);
      browserHistory.push('/work');
      // dispatch(actionCreators.selectItem(props.item.ID));
    }
  };
};

// assign props to connect
const mapStateToProps = (state, { params }) => {
  console.log('WorkItemContainer::mapStateToProps state:%o params:%o', state, params);
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
