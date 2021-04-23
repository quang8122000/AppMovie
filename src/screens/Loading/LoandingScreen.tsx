import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors} from '../../configs/style';
import {connect} from 'react-redux';
import {isEmpty} from 'lodash';
import {homeAction} from '../../redux/movie/action';
import {systemAction} from '../../redux/systems/action';

class LoandingScreen extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={Styles.container}>
        <Text style={Styles.nameApp}>App Movie</Text>
        <Text style={Styles.textLoading}> Just wait second </Text>
        <ActivityIndicator size={'large'} color={Colors.white} />
      </View>
    );
  }
}
const StatusStateFromProps = (state: any) => {
  return {
    loading: state.system.loading,
  };
};
export default connect(StatusStateFromProps, systemAction)(LoandingScreen);
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primaryLight,
  },
  nameApp: {
    color: '#FCDE00',
    fontSize: wp(7),
    fontWeight: 'bold',
  },
  textLoading: {
    color: Colors.white,
    fontSize: wp(5),
    fontWeight: 'bold',
  },
});
