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
      INDEX = this.props.viewerCollection.length - 1;
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

  let viewerCollection = [];

  if (images.length > 0 && typeof item.ID !== 'undefined') {
    // return array of matchies
    const imgList = item.Image.split(',');
    viewerCollection = images.filter(img => {
      return (imgList.indexOf(img.ID) !== -1);
    });

  } else {

    // this should probably be set on teh constructro
    viewerCollection.push({
      'ID': 'NOT_FOUND',
      'Title': 'default big image',
      'Description': '',
      'Full_URI': 'empty.jpg',
      'Thumb_URI': 0
    });
  }

  return viewerCollection;
};

// assign props to connect
const mapStateToProps = (state) => {
  // console.log('ViewerContainer::mapStateToProps state:%o params:%o', state);

  // we need to assemble a viewable collection, and assign it to props
  const viewerCollection = filterViewerCollection(state.workReducers.images, state.workReducers.item);
  return {
    viewerCollection,
    bigImage: viewerCollection[0]
  };
};

// export a redux-aware container component
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ViewerContainer);
