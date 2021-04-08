import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ItemTraller from './src/screens/Traller/modules/itemTraller';

export default class Test extends Component<any, any> {
  render() {
    return (
      <View style={Styles.container}>
        <ItemTraller
          source={require('../AppMovie/src/assets/images/hardcore1.jpg')}
          name={'Batman v Superman: Dawn of Justice - Official Trailer 2 [HD]'}
          size={'HD'}
          type={'Clip'}
        />
      </View>
    );
  }
}
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
});
