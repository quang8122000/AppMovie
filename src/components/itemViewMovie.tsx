import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors} from '../configs/style';

export default class ItemViewMovie extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {image, title, release_date, onPress} = this.props;

    return (
      <TouchableOpacity style={Styles.container} onPress={onPress}>
        <View style={Styles.ViewImage}>
          <Image source={image} style={Styles.styleImage} />
        </View>
        <View style={Styles.allText}>
          <Text style={Styles.textTitle} numberOfLines={1}>
            {title}
          </Text>
          <Text style={Styles.textRelease_date}>{release_date}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
const Styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: Colors.gray,
    height: hp('30'),
    width: wp('29'),
    marginBottom: hp('1'),
    borderRadius: wp('2'),
    marginRight: wp('2'),
    alignItems: 'center',
  },
  styleImage: {
    height: hp('25'),
    width: wp('25'),
  },
  textTitle: {
    fontSize: wp('3'),
    fontWeight: 'bold',
    color: Colors.yellow,
    textAlign: 'center',
  },
  ViewImage: {
    justifyContent: 'center',
  },

  textRelease_date: {
    color: Colors.white,
    fontSize: wp('2'),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  allText: {
    justifyContent: 'center',
    flexDirection: 'column',
    alignSelf: 'center',
  },
});
