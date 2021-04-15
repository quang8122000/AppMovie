import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, DeviceEventEmitter} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors} from '../../../configs/style';
export default class ItemNewMovie extends Component<any, any> {
  render() {
    DeviceEventEmitter.addListener('', data => {});
    const {title, poster_pat, overview} = this.props;

    return (
      <View style={Styles.container}>
        <View style={{width: '50%'}}>
          <Image source={poster_pat} style={Styles.imgPoter} />
        </View>
        <View style={{width: '50%'}}>
          <Text style={Styles.textTitle}>{title}</Text>
          <Text style={Styles.textOverview}>{overview}</Text>
        </View>
        <View></View>
      </View>
    );
  }
}
const Styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    alignItems: 'center',
    height: hp(30),
    width: wp(80),
    backgroundColor: Colors.gray,
    paddingHorizontal: wp(3),
    flexDirection: 'row',
  },
  imgPoter: {
    height: hp(25),
    width: wp(35),
  },
  textTitle: {
    fontSize: wp(3),
    color: Colors.white,
    fontWeight: 'bold',
  },
  textOverview: {
    color: Colors.white,
    fontSize: wp(2),
  },
});
