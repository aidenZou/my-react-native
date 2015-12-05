'use strict';

import React, {
  Component,
  Text,
  View
} from 'react-native';

import NavigationBar from 'react-native-navbar';

export default class Navbar extends React.Component{

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

  render() {
    const leftButtonConfig = {
      title: 'Back',
      handler: () => alert('Back')
    };

    const rightButtonConfig = {
      title: 'Next',
      handler: () => alert('hello!')
    };

    const titleConfig = {
      title: 'Title'
    };

    return (
      <NavigationBar
        title={titleConfig}
        leftButton={leftButtonConfig}
        rightButton={rightButtonConfig} />
    )

    // return (
    //   <View style={{ flex: 1, backgroundColor: '#ff9900' }}>
    //     <NavigationBar
    //       title={titleConfig}
    //       leftButton={leftButtonConfig}
    //       rightButton={rightButtonConfig} />
    //   </View>
    // );
  }

}
