import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ButtonCustom from './src/components/buttonCustom';
import IItemActor from './src/screens/Details/modules/Cast/ItemCast';

export default class Test extends Component<any, any> {
  render() {
    let url = 'https://image.tmdb.org/t/p/w500';

    return (
      <View style={Styles.container}>
        <IItemActor
          original_name={'Sam Levinson'}
          profile_path={{uri: `${url}/${'/unyjIDs02a9ghtZhnajoAKKGzhW.jpg'}`}}
          job={'Producer'}
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
    backgroundColor: 'gray',
  },
});
