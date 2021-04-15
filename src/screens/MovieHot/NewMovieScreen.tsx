import React, {Component} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors} from '../../configs/style';
import ItemNewMovie from '../MovieHot/modules/itemNewMovie';
import ItemNewTraller from '../MovieHot/modules/ItemNewTraller';
export default class NewMovieScreen extends Component<any, any> {
  getWindownDimensions() {
    const {innerWidth: width, innerHeight: height} = window;
    return {
      width,
      height,
    };
  }

  render() {
    return (
      <View style={Styles.container}>
        {/* <ItemNewMovie
          title={'La Funeraria'}
          poster_pat={require('../../assets/images/abc.jpg')}
          overview={
            'Bernardo is an undertaker. He runs his mortuary business in the same house where he resides. In the front, he has his clients. And in the back, his dysfunctional family lives amongst coffins, wreaths, and the mischievous but nonviolent ghosts that visit on a daily basis. But when a malevolent entity enters the scene, it wreaks havoc on the already fractured household.'
          }
        /> */}
        <ItemNewTraller />
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.yellow,
  },
  // flatList: {
  //   height: hp('50'),
  //   width: wp('100'),
  // },
});
