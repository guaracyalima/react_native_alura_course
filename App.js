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
export default class App extends Component<{}> {
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
        style={ {marginTop: 20}}
        keyExtractor={item => item.id}
        data={ fotos }
        renderItem={
            ( { item } ) =>
              <View>
                <Text>{ item.usuario }</Text>
                <Image
                        source={ require('./resources/img/1.jpg') }
                        style={ {width: width, height: width} }/>
              </View>

         }
      />


    );
  }
}
