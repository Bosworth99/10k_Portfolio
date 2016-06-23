import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import Home from 'home/Home.jsx';

class HomeContainer extends React.Component {
  render() {
    return (
      <Home {...this.props} />
    );
  }
}

// validate prop types
HomeContainer.propTypes = {};

// wire up a click handler for the pComponent
const mapDispatchToProps = (dispatch, props) => {
  return {
    dispatch,
    onPanelClick: (e) => {
      console.log('Item::onPanelClick %o %o', props, e);
      browserHistory.push('/work');
    }
  };
};

// assign props to connect
const mapStateToProps = (state, { params }) => {
    return {};
};

// export a redux-aware container component
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeContainer);
