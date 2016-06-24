import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import Viewer from 'viewer/Viewer.jsx';

// CLASS ///////////////////////////////////////////////////////////////////////
class ViewerContainer extends React.Component {

  constructor(props){
    // console.log('WorkContainer::constructor', props);
    super(props);

    this.state = {
      INDEX: 0
    };
  }

  onClickImg(e, dir = 'next') {
    console.log('onClickImg e:%o dir:%s', e, dir);
    // capture the Index
    let INDEX = this.state.INDEX;
    // check out next to decide if we want to increment
    INDEX = (dir === 'next') ? INDEX += 1 : INDEX -= 1;
    if (INDEX >= this.props.viewerCollection.length) {
      INDEX = 0;
    } else if (INDEX < 0) {
      INDEX = this.props.viewerCollection.length;
    }
    this.setState({ INDEX });
  }

  getBigImage() {
    return this.props.viewerCollection[this.state.INDEX];
  }

  render() {
    // console.log('ViewerContainer:render this:%o', this);
    return (
      <Viewer
        bigImage={this.getBigImage()}
        onClickImg={this.onClickImg.bind(this)}
      />
    );
  }
}

// PROPS ///////////////////////////////////////////////////////////////////////
// validate prop types
ViewerContainer.propTypes = {};

// wire up a click handler for the pComponent
const mapDispatchToProps = (dispatch, props) => {
  return {};
};

// here, we need to take the itemId that we've been passed and
// make an array of objs, and update the presentational components
const filterViewerCollection = (images, item) => {
  // console.log('ViewerContainer::filterViewerCollection', images, item);

  // return array of matchies
  const imgList = item.Image.split(',');
  return images.filter(img => {
    return (imgList.indexOf(img.ID) !== -1);
  });
};

// assign props to connect
const mapStateToProps = (state, { params }) => {
  // console.log('ViewerContainer::mapStateToProps state:%o params:%o', state, params);
  return {
    viewerCollection: filterViewerCollection(state.workReducers.images, state.workReducers.item),
    bigImage: state.workReducers.images[0]
  };
};

// export a redux-aware container component
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ViewerContainer);
