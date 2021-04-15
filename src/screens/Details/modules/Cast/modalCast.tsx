import React, {Component} from 'react';
import {Text, View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ItemCast from '../Cast/ItemCast';
import {connect} from 'react-redux';
import {homeAction} from '../../../../redux/movie/action';
import {Colors} from '../../../../configs/style';
class ModalCast extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getAllActors(this.props.idMovie);
  }
  renderItem = item => {
    return (
      <ItemCast
        original_name={item.original_name}
        profile_path={item.profile_path}
        character={item.character}
      />
    );
  };

  render() {
    return (
      <View style={Styles.container}>
        <FlatList
          data={this.props.allActor.cast}
          renderItem={({item}) => this.renderItem(item)}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}
const mapStateFromProps = (state: any) => {
  return {
    allActor: state.movie.allActor,
  };
};

export default connect(mapStateFromProps, homeAction)(ModalCast);
const Styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.black,
    width: wp(50),
    height: hp(80),
    borderRadius: wp(2),
  },
});
