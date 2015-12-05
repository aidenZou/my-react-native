'use strict';

import React, {
  View,
  Image,
  Text
} from 'react-native';

export default class MImage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var url = require('../img/logo.png');
    console.log(url)
    return (
      // 图片文件的查找会和JS模块的查找方式一样。在上面的这个例子里，是哪个组件引用了这个图片，Packager就会去这个组件所在的文件夹下查找my-icon.png。并且，如果你有my-icon.ios.png和my-icon.android.png，Packager就会根据平台而选择不同的文件。
      // 你还可以使用@2x，@3x这样的文件名后缀，来为不同的屏幕精度提供图片。
      // 使用require('image!x')语法）则无需指定尺寸
      // 网络图片 需要手动指定图片的尺寸
      <View>
        <Image source={require('../img/logo.png')} style={{backgroundColor: 'red'}}/>
        <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
         style={{width: 100, height: 100}} />
         <Image source={url} style={{width:100, height: 100, backgroundColor: 'red'}}>
            <Text>我有背景哟!!!</Text>
         </Image>
      </View>
    );
  }
}
