import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Feather from 'react-native-vector-icons/Feather';
import {Colors} from '../configs/style';
import ButtonCustom from '../components/buttonCustom';
export default class BackdropPath extends Component<any, any> {
  render() {
    const {image, title, onPress, idMovie} = this.props;
    console.log('idMovie', idMovie);
    return (
      <ImageBackground source={image} style={Styles.container}>
        <View>
          <TouchableOpacity onPress={onPress} style={{width: wp(10)}}>
            <Feather
              name="arrow-left"
              style={Styles.iconFeather}
              color={Colors.white}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={Styles.title} numberOfLines={2}>
            {title}
          </Text>
          <ButtonCustom idMovie={idMovie} />
        </View>
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
    width: wp(60),
    borderRadius: wp('2'),
    // marginBottom: hp('2'),
    textShadowRadius: 10,
    textShadowColor: 'black',
    paddingLeft: wp('2'),
  },
  iconFeather: {
    fontSize: wp('10'),
    borderColor: Colors.black,
    // borderRadius: wp('10'),
  },
});
