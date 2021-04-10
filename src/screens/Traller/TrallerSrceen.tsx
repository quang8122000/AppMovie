import React, {Component} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors} from '../../configs/style';
import {connect} from 'react-redux';
import {trallerAction} from '../../redux/traller/action';
import ItemTraller from '../Details/modules/itemTraller';

class TrallerSrceen extends Component<any, any> {
  componentDidMount() {
    this.props.getALLTrallers();
  }
  renderItem({item}) {
    return (
      <ItemTraller
        source={item.source}
        name={item.name}
        size={item.size}
        type={item.type}
      />
    );
  }
  // || []).slice(0, 3)
  render() {
    // console.log(this.props.allTraller.youtube);
    const {allTraller} = this.props;
    return (
      <View style={Styles.container}>
        <FlatList
          data={allTraller.youtube}
          renderItem={this.renderItem}
          keyExtractor={item => item.source}
          horizontal={true}
        />
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
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: Colors.blue,
  },
  // flatList: {
  //   height: hp('50'),
  //   width: wp('100'),
  // },
});
