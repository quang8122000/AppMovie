import React, {Component} from 'react';
import {Text, View, StyleSheet, FlatList, Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors} from '../../configs/style';
import ItemNewMovie from '../MovieHot/modules/itemNewMovie';
import ItemNewTrallerHorizontal from './modules/ItemNewMovieHorizontal';
import {connect} from 'react-redux';
import {homeAction} from '../../redux/movie/action';
class NewMovieScreen extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      orientation: 'portrait',
    };
  }
  componentDidMount() {
    this.props.getAllNewMovies();
    Dimensions.addEventListener('change', newDimensions => {
      if (newDimensions.window.width > newDimensions.window.height) {
        console.log('Changess', newDimensions);
        this.setState({orientation: 'landscape'});
      } else {
        this.setState({orientation: 'portrait'});
      }
    });
  }

  onPress = item => {
    this.props.navigation.navigate('Details', item);
  };
  rederItem(item, index) {
    let url = 'https://image.tmdb.org/t/p/w500';

    return this.state.orientation == 'portrait' ? (
      <ItemNewMovie
        title={item.original_title}
        poster_pat={{uri: `${url}/${item.poster_path}`}}
        overview={item.overview}
        onPress={() => this.onPress(item)}
      />
    ) : (
      <ItemNewTrallerHorizontal
        backdrop_path={{uri: `${url}/${item.backdrop_path}`}}
        title={item.original_title}
        overview={item.overview}
        onPress={() => this.onPress(item)}
      />
    );
  }

  render() {
    // const {allNewMovie} = this.props;
    return (
      <View style={Styles.container}>
        <Text style={Styles.textTitle}>Popular Movie</Text>
        <FlatList
          data={this.props.allNewMovie.results}
          renderItem={({item, index}) => this.rederItem(item, index)}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

const mapStateFromProps = (state: any) => {
  return {
    allNewMovie: state.movie.allNewMovie,
  };
};
export default connect(mapStateFromProps, homeAction)(NewMovieScreen);
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.black,
    width: '100%',
  },
  textTitle: {
    fontSize: wp(6),
    color: Colors.white,
    fontWeight: 'bold',
    textShadowRadius: 20,
    textShadowColor: Colors.gray,
    marginVertical: hp(2),
  },
});
