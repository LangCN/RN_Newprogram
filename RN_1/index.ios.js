/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
    ListView,
    Image,
    TouchableOpacity
} from 'react-native';

// 导入json数据
var shareData = require('./shareData.json');

// ES5
var listViewDemo = React.createClass({

  // 设置默认值固定值
    getDefaultProps(){
      return {

      }
    },

  // 设置初始值
    getInitialState(){

      var ds = new ListView.dataSource({rowHasChanged:(r1,r2) => r1 !== r2});
      return{

        dataSource: ds.cloneWithRows(shareData)
      }
    },

    render(){
        return (
         <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow }
                contentContainerStyle={styles.listViewStyle}

          />
        )
    }
    renderRow(rowdData){
        return(
            <TouchableOpacity activeOpacity={0.5}>
                <View>
                    <Image source ={{uri: rowdData.icon }} style={styles.iconStyle}/>
                    <Text>{rowData.title}</Text>
                </View>
            </TouchableOpacity>
        );

    }

})

const styles = StyleSheet.create({
    listViewStyle:{
        flexDirection:"row"
    }
    iconStyle:{
        width:80,
        height:80
    }
});

AppRegistry.registerComponent('RN_1', () => RN_1);
