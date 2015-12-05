'use strict';

import React, {
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

// var ScrollableTabView = require('react-native-scrollable-tab-view');
// import ScrollableTabView from 'react-native-scrollable-tab-view';
// var TableView = require('react-native-tableview');
// import TableView from 'react-native-tableview';

import Navbar from './navbar.js';

// var styles = require('./styles');
// import styles from './list.js';
import MyImage from './demo/Image.js';

var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  // container: {
  //   flex: 1,
  //   flexDirection: 'row',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: '#F5FCFF',
  // },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
  rightContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  },
  thumbnail: {
    width: 53,
    height: 81,
  }
});

export default class App extends React.Component{

  constructor(props){
      super(props);
      this.state = {
        // loaded: false,
      };
  }

  componentDidMount() {
    // this.fetchData();
  }

  fetchData() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
          loaded: true,
        });
      })
      .done();
  }
  // render() {
  //   var rightButtonConfig = {
  //     title: 'Next',
  //     handler: function onNext() {
  //       alert('hello!');
  //     }
  //   };
  //
  //   var titleConfig = {
  //     title: 'Hello, world',
  //   };
  //
  //   return (
  //     <View style={{ flex: 1, }}>
  //       <NavigationBar
  //         title={titleConfig}
  //         rightButton={rightButtonConfig} />
  //     </View>
  //   );
  // }

  // render() {
  //   const rightButtonConfig = {
  //     title: 'Next',
  //     handler: () => alert('hello!'),
  //   };
  //
  //   const titleConfig = {
  //     title: 'Hello, world',
  //   };
  //
  //   return (
  //     <View style={{ flex: 1, }}>
  //       <NavigationBar
  //         title={titleConfig}
  //         rightButton={rightButtonConfig} />
  //     </View>
  //   );
  // }

  render() {
    return (
      <View>
        <Navbar></Navbar>
        <MyImage></MyImage>
      </View>
    );
  }

}
