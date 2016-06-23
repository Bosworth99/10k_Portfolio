import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import Viewer from 'workItem/Viewer.jsx';

// CLASS ///////////////////////////////////////////////////////////////////////
class ViewerContainer extends React.Component {

  // called when the application state updates
  componentWillReceiveProps(nextProps) {
    console.log('WorkContainer::componentWillReceiveProps', nextProps);

    const item = nextProps.item;
    const images = nextProps.images;

    // here, we need to take the itemId that we've been passed and
    // pull matching imgs out of the images data
    // make an array of objs, and update the presentational components

    // mostly to contain an array of imageIDs
    const thunbs = [{}];

    // this should be an object from the images pile that represents the current big image
    const image = {};

    this.setState({
      item,
      images,
      image
    });
  }

  onComponentWillMount(){
    console.log('ViewerContainer::onComponentWillMount', this.props);
  }

  render() {
    console.log('ViewerContainer:render this.props.item:%o', this.props.images);
    // the currently selected item
    return (
      <Viewer {...this.props} />
    );
  }
}

// PROPS ///////////////////////////////////////////////////////////////////////
// validate prop types
ViewerContainer.propTypes = {};

// wire up a click handler for the pComponent
const mapDispatchToProps = (dispatch, props) => {
  return {
    dispatch,
    onClickImg: (e) => {
      console.log('ViewerContainer::onClickImg %o %o', props, e);

      // dispatch(actionCreators.selectItem(props.item.ID));
    }
  };
};

// assign props to connect
const mapStateToProps = (state, { params }) => {
  console.log('ViewerContainer::mapStateToProps state:%o params:%o', state, params);
  return {};
};

// export a redux-aware container component
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WorkItemContainer);
