import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Feather from 'react-native-vector-icons/Feather';
import {Colors} from '../configs/style';
export default class BackdropPath extends Component<any, any> {
  render() {
    const {image, title, onPress} = this.props;
    return (
      <ImageBackground source={image} style={Styles.container}>
        <TouchableOpacity onPress={onPress} style={{width: wp(10)}}>
          <Feather
            name="arrow-left"
            style={Styles.iconFeather}
            color={Colors.white}
          />
        </TouchableOpacity>
        <Text style={Styles.title} numberOfLines={1}>
          {title}
        </Text>
      </ImageBackground>
    );
  }
}
const Styles = StyleSheet.create({
  container: {
    height: hp('30'),
    width: '100%',
    justifyContent: 'space-between',
  },
  title: {
    color: Colors.white,
    fontSize: wp('10'),
    fontWeight: 'bold',
    width: wp(100),
    borderRadius: wp('2'),
    marginBottom: hp('2'),
    textShadowRadius: 10,
    textShadowColor: 'black',
  },
  iconFeather: {
    fontSize: wp('10'),
    borderColor: Colors.black,
    // borderRadius: wp('10'),
  },
});
