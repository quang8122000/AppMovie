import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Alert,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FontAwessome5 from 'react-native-vector-icons/FontAwesome5';
import ModalCast from '../screens/Details/modules/Cast/modalCast';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Colors} from '../configs/style';
export default class ButtonCustom extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }

  render() {
    const {idMovie} = this.props;
    return (
      <>
        <TouchableOpacity
          style={Styles.container}
          onPress={() => this.setState({modalVisible: true})}>
          <FontAwessome5 name={'grin-stars'} size={wp(6)} color={'#D4AC0D'} />
          <Text style={Styles.text_Button}> Actor </Text>
        </TouchableOpacity>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setState({modalVisible: false});
          }}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(255,255,255,0.5)',
            }}>
            <TouchableOpacity
              onPress={() => this.setState({modalVisible: false})}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={Styles.textOut}>Out </Text>
              <FontAwesome name={'close'} color={Colors.black} size={wp(10)} />
            </TouchableOpacity>
            <ModalCast idMovie={idMovie} />
          </View>
        </Modal>
      </>
    );
  }
}
const Styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: hp(5),
    width: wp(20),
    backgroundColor: '#5B2C6F',
    borderRadius: wp(6),
    flexDirection: 'row',
  },
  text_Button: {
    color: 'white',
    fontSize: wp('3.5'),
    fontWeight: 'bold',
  },
  textOut: {
    color: Colors.black,
    fontSize: wp(5),
    fontWeight: 'bold',
  },
});
