import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors} from '../../../../configs/style';

export default class ItemCast extends Component<any, any> {
  render() {
    const {profile_path, original_name, character} = this.props;
    let url = 'https://image.tmdb.org/t/p/w500';
    return (
      <TouchableOpacity style={Styles.container}>
        <Image
          source={
            profile_path
              ? {uri: `${url}/${profile_path}`}
              : require('../../../../assets/images/noImage.jpg')
          }
          style={Styles.styleImg}
        />
        <Text style={Styles.name}>{original_name}</Text>
        <Text style={Styles.character}>{character}</Text>
      </TouchableOpacity>
    );
  }
}
const Styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: hp(25),
    width: wp(40),
    borderRadius: 50,
    marginVertical: hp(4),
  },
  styleImg: {
    height: hp('20'),
    width: wp('35'),
    borderRadius: 50,
  },
  name: {
    fontSize: wp('5'),
    fontWeight: 'bold',
    color: Colors.yellow,
  },
  character: {
    fontSize: wp('3.5'),
    color: Colors.white,
    fontWeight: 'bold',
  },
});
