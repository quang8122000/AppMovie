import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default class ItemTraller extends Component<any, any> {
  render() {
    const {source, name, size, type} = this.props;
    return (
      <View style={Styles.container}>
        <Image source={source} resizeMode={'cover'} style={Styles.img} />
        <View style={Styles.allContent}>
          <Text style={Styles.name}> {name} </Text>
          <Text style={Styles.sizeType}>Size: {size}</Text>
          <Text style={Styles.sizeType}>Type: {type}</Text>
        </View>
      </View>
    );
  }
}
const Styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    alignItems: 'center',
    height: hp('19'),
    width: wp('100'),
    backgroundColor: 'white',
    flexDirection: 'row',
    marginBottom: hp('2'),
  },
  img: {
    backgroundColor: 'red',
    height: hp('19'),
    width: wp('68'),
    marginRight: wp('3'),
  },
  allContent: {
    width: wp('29'),
  },
  name: {
    fontSize: wp('3'),
    fontWeight: 'bold',
  },
  sizeType: {
    fontSize: wp('2'),
  },
});
