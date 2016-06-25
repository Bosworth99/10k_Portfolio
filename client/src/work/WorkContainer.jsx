import React from 'react';
import { connect } from 'react-redux';

import * as actionCreators from 'work/WorkActions';
import Work from 'work/Work.jsx';

// CLASS ///////////////////////////////////////////////////////////////////////
class WorkContainer extends React.Component {

  // the critical bit here, is taht connect() needs to be wired up
  // properly or dispatch wont get set on the the props
  componentDidMount() {
    // console.log('WorkContainer::componentDidMount this:%o', this);

    if (this.props.items.length < 1) {
      this.props.dispatch(actionCreators.fetchItems());
    }

    if (this.props.images.length < 1) {
      this.props.dispatch(actionCreators.fetchImages());
    }
  }

  // called when the application state updates
  componentWillReceiveProps(nextProps) {
    // console.log('WorkContainer::componentWillReceiveProps', nextProps);

    // the collection of work items
    const items = nextProps.items;
    const images = nextProps.images;
    this.setState({
      items,
      images
    });
  }

  // is the required data loaded from the api?
  checkIfLoaded() {
    // console.log('WorkContainer::checkIfLoaded', this.state);
    return (this.state && this.state.loaded) || false;
  }

  render() {
    // console.log('WorkContainer::render', this);
    return (
      <Work
        images={this.props.images}
        items={this.props.items}
      />
    );
  }
}

// PROPS ///////////////////////////////////////////////////////////////////////

// validate prop types
WorkContainer.propTypes = {};

// wire up a click handler for the pComponent
const mapDispatchToProps = (dispatch, props) => {
  return {
    dispatch
  };
};

// assign props to connect
const mapStateToProps = (props) => {
  // console.log('WorkContainer::mapStateToProps props:%o', props);
  return {
    items: props.workReducers.items,
    images: props.workReducers.images
  };
};

// export a redux-aware container component
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkContainer);
