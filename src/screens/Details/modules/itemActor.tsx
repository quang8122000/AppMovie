import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors} from '../../../configs/style';

export default class ItemActor extends Component<any, any> {
  render() {
    const {source, name, character} = this.props;
    return (
      <View style={Styles.container}>
        <Image source={source} style={Styles.styleImg} resizeMode={'cover'} />
        <Text style={Styles.name}>{name}</Text>
        <Text style={Styles.character}>{character}</Text>
      </View>
    );
  }
}
const Styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    height: hp(25),
    width: wp(40),
    borderRadius: wp('5'),
  },
  styleImg: {
    height: hp('20'),
    width: wp('35'),
    borderRadius: wp('50'),
  },
  name: {
    fontSize: wp('4'),
    fontWeight: 'bold',
    // color: Colors.white,
  },
  character: {
    fontSize: wp('3'),
    // color: Colors.white,
  },
});
