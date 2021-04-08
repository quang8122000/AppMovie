import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import StarRating from 'react-native-star-rating';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Colors} from '../../configs/style';

export default class ModalDetal extends Component<any, any> {
  render() {
    const {image, title, content, releasedate, starCount} = this.props;
    return (
      <View style={Styles.container}>
        <Image source={image} style={Styles.image} />
        <View style={{marginLeft: wp(4)}}>
          <Text style={Styles.textTitle}>{title}</Text>
          <Text style={Styles.textReleasedate}>
            Release Date: {releasedate}
          </Text>
          <StarRating
            disabled={false}
            maxStars={5}
            rating={starCount}
            emptyStar={'star-o'}
            fullStarColor={Colors.white}
            containerStyle={{
              width: wp('60'),
              alignSelf: 'flex-start',
              marginBottom: wp('3'),
            }}
          />
          <Text style={Styles.textContent}>{content}</Text>
        </View>
      </View>
    );
  }
}
const Styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.gray,
    height: hp('100'),
    width: wp('80'),
    alignSelf: 'center',
  },
  image: {
    width: wp('75'),
    height: hp('30'),
    marginBottom: wp('5'),
    alignSelf: 'center',
  },
  textReleasedate: {
    fontSize: wp('3'),
    color: Colors.white,
    marginBottom: wp('3'),
  },
  textTitle: {
    color: Colors.white,
    fontSize: wp('5.5'),
    marginBottom: wp('3'),
    fontWeight: 'bold',
  },
  textContent: {
    color: Colors.white,
    fontSize: wp('3'),
  },
});
