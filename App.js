/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  FlatList
} from 'react-native';
import Post from './src/components/Post';

const width = Dimensions.get('screen').width;
export default class App extends Component {
  render() {

    const fotos = [
      {
        id: 1,
        usuario: 'mingau'
      },
      {
        id: 2,
        usuario: 'maguinho'
      },
      {
        id: 3,
        usuario: 'mang'
      },
    ];
    return (
      <FlatList
        style={ styles.container }
        keyExtractor={item => item.id}
        data={ fotos }
        renderItem={
            ( { item } ) =>
            <Post />
         }
      />

    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: 20
  },
  cabecalho: {
    margin: 10,
    flexDirection: 'row',
    alignItems:'center'
  },
  fotPerfil: {
    marginRight: 10,
    borderRadius: 20,
    width: 40,
    height: 40
  },
  foto:{
    width: width,
    height: width
  }
})
// AppRegistry.registerComponent('InstaluraMobile');
