import React, {Component, useCallback} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import YoutubePlayer, {YoutubeIframeRef} from 'react-native-youtube-iframe';
import {Colors} from '../../../configs/style';

export default class ItemTraller extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {source, name, size, type} = this.props;
    return (
      <View style={Styles.container}>
        <YoutubePlayer
          play={false}
          videoId={source}
          webViewStyle={Styles.youtubePlayer}
          height={hp('20')}
        />
        <View style={Styles.allContent}>
          <Text style={Styles.name} numberOfLines={1}>
            {' '}
            {name}{' '}
          </Text>
        </View>
      </View>
    );
  }
}
const Styles = StyleSheet.create({
  container: {
    height: hp('30'),
    width: wp('80'),
    backgroundColor: Colors.black,
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: hp('2'),
    marginLeft: hp('2'),

    justifyContent: 'center',
    borderRadius: wp('2'),
  },

  youtubePlayer: {
    width: wp('70'),
  },

  allContent: {
    marginLeft: wp('2'),
    justifyContent: 'center',
    alignSelf: 'center',
  },
  name: {
    fontSize: wp('3.5'),
    fontWeight: 'bold',
    color: '#B03A2E',
    alignSelf: 'center',
  },
  sizeType: {
    fontSize: wp('2'),
    color: Colors.white,
    alignSelf: 'center',
  },
});
