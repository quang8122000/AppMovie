import React, {Component} from 'react';
import {Text, View, StyleSheet, Dimensions, Alert} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as lor,
  removeOrientationListener as rol,
} from 'react-native-responsive-screen';
import {Colors} from '../../../configs/style';
import ItemTrallerHorizontal from './ItemTrallerHorizontal';
import ItemTrallerVertical from './ItemTrallerVertical';
import {connect} from 'react-redux';
import {trallerAction} from '../../../redux/traller/action';

class ListAllTraller extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      orientation: 'portrait',
    };
  }

  componentDidMount() {
    Dimensions.addEventListener('change', newDimensions => {
      console.log('Changesss', newDimensions);
      if (newDimensions.window.width > newDimensions.window.height) {
        this.setState({orientation: 'landscape'});
      } else {
        this.setState({orientation: 'portrait'});
      }
    });
  }
  componentWillUnMount() {
    Dimensions.removeEventListener('change', () => {});
  }

  item: any;

  renderItem = ({item}) => {
    return this.state.orientation == 'portrait' ? (
      <ItemTrallerHorizontal
        source={item.source}
        title={item.name}
        type={item.type}
        size={item.size}
      />
    ) : (
      <ItemTrallerVertical source={item.source} />
    );
  };
  render() {
    console.log('render', this.state.orientation);
    return (
      <View style={Styles.container}>
        <FlatList
          data={this.props.allTraller.youtube}
          renderItem={this.renderItem}
          keyExtractor={item => item.source}
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
export default connect(mapStateFromProps, trallerAction)(ListAllTraller);

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.black,
  },
});
