import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default class index extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      isReady: true,
      status: null,
      quality: null,
      error: null,
      isPlaying: false,
    };
  }
  onPressPlay = () => {
    const {isPlaying} = this.state;
    this.setState({isPlaying: !isPlaying});
  };

  render() {
    const {} = this.props;
    console.log(this.state.isPlaying);
    return (
      <View style={Styles.container}>
        <TouchableOpacity onPress={() => this.onPressPlay()}>
          <AntDesign name={'playcircleo'} size={wp(10)} />
        </TouchableOpacity>
      </View>
    );
  }
}
const Styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    height: hp('50'),
    width: wp('100'),
  },
});
