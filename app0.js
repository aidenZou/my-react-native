'use strict';

import React, {
  Image,
  Text,
  PropTypes
} from 'react-native';

export default
class App extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        name:111,
        loopsRemaining: this.props.maxLoops,
      };
  }
  // static defaultProps = {
  //     autoPlay: false,
  //     maxLoops: 10,
  // }
  // static propTypes = {
  //     autoPlay: React.PropTypes.bool.isRequired,
  //     maxLoops: React.PropTypes.number.isRequired,
  //     posterFrameSrc: React.PropTypes.string.isRequired,
  //     videoSrc: React.PropTypes.string.isRequired,
  // }
  render() {
      return (
        <Text>
          Loading movies...
          {this.state.name}-----
          {this.props.maxLoops}
        </Text>
      );
  }
}

App.defaultProps = {
    autoPlay: false,
    maxLoops: 10,
};
App.propTypes = {
    autoPlay: React.PropTypes.bool.isRequired,
    maxLoops: React.PropTypes.number.isRequired,
    posterFrameSrc: React.PropTypes.string.isRequired,
    videoSrc: React.PropTypes.string.isRequired,
};
