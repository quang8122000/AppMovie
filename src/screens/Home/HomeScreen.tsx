import React, {Component} from 'react';
import {Text, View, StyleSheet, FlatList, Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors} from '../../configs/style';
import ItemViewMovie from '../../components/itemViewMovie';
import {connect} from 'react-redux';
import {homeAction} from '../../redux/home/action';
class HomeScreen extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getALLMovies();
  }
  onPress = item => {
    this.props.navigation.navigate('Details', item);
  };
  renderItem(item, index) {
    console.log('item', item);
    let url = 'https://image.tmdb.org/t/p/w500';
    return (
      <ItemViewMovie
        title={item.original_title}
        image={{uri: `${url}/${item.poster_path}`}}
        content={item.overview}
        release_date={item.release_date}
        onPress={() => this.onPress(item)}
      />
    );
  }

  render() {
    console.log('HomeallMovie', this.props.allMovie);
    return (
      <View style={Styles.container}>
        <FlatList
          horizontal={false}
          data={this.props.allMovie.results}
          renderItem={({item, index}) => this.renderItem(item, index)}
          keyExtractor={item => item.id}
          numColumns={3}
        />
      </View>
    );
  }
}
const mapStateFromProps = (state: any) => {
  return {
    allMovie: state.movie.allMovie,
  };
};

export default connect(mapStateFromProps, homeAction)(HomeScreen);
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.black,
    // alignSelf: 'center',
  },
});
