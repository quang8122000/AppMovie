import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors} from '../../configs/style';
import {connect} from 'react-redux';
import {trallerAction} from '../../redux/traller/action';

class TrallerSrceen extends Component<any, any> {
  componentDidMount() {
    this.props.getALLTrallers();
  }
  render() {
    return (
      <View style={Styles.container}>
        <Text> textInComponent </Text>
      </View>
    );
  }
}
const mapStateFromProps = (state: any) => {
  return {
    allTraller: state.traller.allTraller,
  };
};
export default connect(mapStateFromProps, trallerAction)(TrallerSrceen);
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.blue,
  },
});
