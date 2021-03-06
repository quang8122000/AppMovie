import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  DeviceEventEmitter,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors} from '../../../configs/style';
export default class ItemNewMovie extends Component<any, any> {
  render() {
    DeviceEventEmitter.addListener('', data => {});
    const {title, poster_pat, overview, onPress} = this.props;

    return (
      <TouchableOpacity style={Styles.container} onPress={onPress}>
        <View style={{width: '60%'}}>
          <Image source={poster_pat} style={Styles.imgPoter} />
        </View>
        <View style={{width: '40%'}}>
          <Text style={Styles.textTitle}>{title}</Text>
          <Text style={Styles.texttitleOverview}>Overview</Text>
          <Text style={Styles.textOverview} numberOfLines={4}>
            {overview}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}
const Styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: hp(25),
    width: wp(75),
    backgroundColor: Colors.gray,
    paddingHorizontal: wp(3),
    flexDirection: 'row',
    borderRadius: wp(2),
    marginVertical: hp(2),
  },
  imgPoter: {
    height: hp(20),
    width: wp(35),
  },
  textTitle: {
    fontSize: wp(3),
    color: Colors.yellow,
    fontWeight: 'bold',
  },
  textOverview: {
    color: Colors.white,
    fontSize: wp(2),
  },
  texttitleOverview: {
    fontSize: wp(2.5),
    color: Colors.white,
    fontWeight: 'bold',
  },
});
