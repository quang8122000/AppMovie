import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import YoutubePlayer from 'react-native-youtube-iframe';

export default class Test extends Component<any, any> {
  render() {
    return (
      <View style={Styles.container}>
        <YoutubePlayer
          videoId={'s-MUzvASr8s'}
          height={hp(30)}
          webViewStyle={Styles.abc}
          play={false}
          mute={true}
          forceAndroidAutoplay={true}
          onError={err => console.log('Error', err)}
        />
      </View>
    );
  }
}
const Styles = StyleSheet.create({
  container: {},
  abc: {
    width: wp(100),
  },
});
