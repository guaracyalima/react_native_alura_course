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

const width = Dimensions.get('screen').width;
export default class Post extends Component {
  render() {
    return (
              <View>
              <View style={ styles.cabecalho  }>
              <Image
                      source={ require('../../resources/img/1.jpg') }
                      style={ styles.fotPerfil }/>

                <Text>{ item.usuario }</Text>
              </View>

                <Image
                        source={ require('../../resources/img/1.jpg') }
                        style={ styles.foto }/>
              </View>


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
