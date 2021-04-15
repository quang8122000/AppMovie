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
import {Colors} from '../../../configs/style';
import YoutubePlayer from 'react-native-youtube-iframe';

export default class ItemTrallerHorizontal extends Component<any, any> {
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
      <TouchableOpacity
        style={Styles.container}
        onPress={() => this.onPressPlay()}>
        <View style={{width: '70%'}}>
          <YoutubePlayer
            play={this.state.isPlaying}
            videoId={source}
            height={hp('20')}
            webViewStyle={Styles.Styleimg}
            mute={true}
            onError={err => console.log('Error', err)}
          />
        </View>
        <View style={{width: '30%', padding: wp(2)}}>
          <Text style={Styles.textTitle} numberOfLines={3}>
            {title}
          </Text>
          <Text style={Styles.textTitle}>Size:{size} </Text>
          <Text style={Styles.textTitle}>Type: {type}</Text>
        </View>
      </TouchableOpacity>
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
    flexDirection: 'row',
    padding: 10,
    borderRadius: wp('2'),
    marginVertical: hp('2'),
  },

  Styleimg: {
    height: hp('20'),
  },
  textTitle: {
    color: Colors.white,
    fontSize: wp(4),
    fontWeight: 'bold',
  },
  textSizeType: {
    color: Colors.white,
    fontSize: wp(3.5),
  },
});
