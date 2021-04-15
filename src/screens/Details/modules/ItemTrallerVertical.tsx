import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import YoutubePlayer, {YoutubeIframeRef} from 'react-native-youtube-iframe';
import {Colors} from '../../../configs/style';

export default class ItemTrallerVertical extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
    };
  }

  onPressPlay = () => {
    const {isPlaying} = this.state;
    this.setState({isPlaying: !isPlaying});
  };

  render() {
    const {title, source, size, type} = this.props;

    return (
      <View style={Styles.container}>
        <YoutubePlayer
          play={this.state.isPlaying}
          videoId={source}
          height={hp(25)}
          webViewStyle={Styles.Styleimg}
          mute={true}
          onError={err => console.log('Error', err)}
        />
      </View>
    );
  }
}
const Styles = StyleSheet.create({
  container: {
    height: hp(25),
    width: wp(90),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.gray,
    borderRadius: wp('2'),
    marginVertical: hp('2'),
  },
  Styleimg: {
    width: wp(100),
  },
});
