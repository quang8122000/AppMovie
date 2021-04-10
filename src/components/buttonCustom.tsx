import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FontAwessome5 from 'react-native-vector-icons/FontAwesome5';

export default class ButtonCustom extends Component<any, any> {
  render() {
    return (
      <TouchableOpacity style={Styles.container}>
        <FontAwessome5 name={'grin-stars'} size={wp(6)} color={'#D4AC0D'} />
        <Text style={Styles.text_Button}> Actor </Text>
      </TouchableOpacity>
    );
  }
}
const Styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: hp(5),
    width: wp(20),
    backgroundColor: '#5B2C6F',
    borderRadius: wp(6),
    flexDirection: 'row',
  },
  text_Button: {
    color: 'white',
    fontSize: wp('3.5'),
    fontWeight: 'bold',
  },
});
