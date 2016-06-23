import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import Header from 'header/Header.jsx';

class HeaderContainer extends React.Component {
  render() {
    return (
      <Header {...this.props} />
    );
  }
}

// validate prop types
HeaderContainer.propTypes = {};

// wire up a click handler for the pComponent
const mapDispatchToProps = (dispatch, props) => {
    return {
        dispatch,
        handleLogoClick: (e) => {
            console.log('HeaderContainer::handleLogoClick %o %o', props, e);
            const path = '/';
            browserHistory.push(path);
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
)(HeaderContainer);
