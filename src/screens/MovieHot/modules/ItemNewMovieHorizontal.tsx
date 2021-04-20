import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors} from '../../../configs/style';

export default class ItemNewTrallerHorizontal extends Component<any, any> {
  componentDidMount() {}

  render() {
    const {title, backdrop_path, overview, onPress} = this.props;

    return (
      <TouchableOpacity style={Styles.container} onPress={onPress}>
        <View style={{width: '70%'}}>
          <Image
            source={backdrop_path}
            style={Styles.backdrop_path}
            resizeMode={'cover'}
          />
        </View>
        <View
          style={{
            width: '30%',
            justifyContent: 'center',
            alignItems: 'center',
            padding: wp(2),
          }}>
          <Text style={Styles.textTitle}>{title}</Text>
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
    width: wp(100),
    backgroundColor: Colors.gray,
    flexDirection: 'row',
    borderRadius: wp(2),
    marginVertical: hp(2),
    justifyContent: 'center',
    padding: wp(4),
  },
  backdrop_path: {
    height: hp(20),
    width: '100%',
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
});
