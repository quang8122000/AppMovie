import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
// import ItemYoutube from './src/components/ItemYoutube';
import ButtonCustom from './src/components/buttonCustom';
import IItemActor from './src/screens/Details/modules/itemActor';

export default class Test extends Component<any, any> {
  render() {
    return (
      <View style={Styles.container}>
        <ButtonCustom />
      </View>
    );
  }
}
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
